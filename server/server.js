import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* ===================== MOBILE-SAFE CORS (NO LIBRARY) ===================== */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // IMPORTANT for mobile browsers
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

/* ===================== HEALTH CHECK ===================== */
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running successfully 🚀",
  });
});

/* ===================== FILE STORAGE ===================== */
const filePath = path.join(process.cwd(), "messages.txt");

/* ===================== SMTP (BREVO) ===================== */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ===================== VERIFY EMAIL ===================== */
transporter.verify((err) => {
  if (err) {
    console.error("❌ Email login failed:", err.message);
  } else {
    console.log("✅ Email server is ready");
  }
});

/* ===================== CONTACT API ===================== */
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const time = new Date().toLocaleString();

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const logMessage =
    `📩 New Contact Message\n` +
    `Time: ${time}\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Message: ${message}\n` +
    `----------------------------------\n`;

  // Log to terminal
  console.log(logMessage);

  // Save to file
  fs.appendFile(filePath, logMessage, () => {});

  try {
    // Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: "mfanigoud@gmail.com",
      subject: "📩 New Portfolio Message",
      text: logMessage,
    });

    // Auto reply to USER
    await transporter.sendMail({
      from: `"Fani Goud" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for contacting me 😊",
      html: `
        <div style="font-family:Arial;line-height:1.6">
          <h2>Hi ${name} 👋</h2>
          <p>Thanks for reaching out through my portfolio.</p>
          <p>I’ve received your message and will get back to you soon.</p>
          <br/>
          <p>
            Regards,<br/>
            <strong>Fani Goud</strong><br/>
            Full-Stack Developer
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Email error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Message saved but email failed",
    });
  }
});

/* ===================== SERVER START ===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
