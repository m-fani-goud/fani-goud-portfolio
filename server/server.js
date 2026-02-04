import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* ===================== CORS ===================== */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.options("*", cors());
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

/* ===================== BREVO SMTP ===================== */
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // a17576001@smtp-brevo.com
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Required on Render
  },
});

/* ===================== VERIFY SMTP ===================== */
transporter.verify((err) => {
  if (err) {
    console.error("❌ Email server verification failed:", err.message);
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

  const logMessage = `
📩 New Contact Message
Time: ${time}
Name: ${name}
Email: ${email}
Message: ${message}
----------------------------------
`;

  /* SAVE MESSAGE */
  console.log(logMessage);
  fs.appendFileSync(filePath, logMessage);

  try {
    /* EMAIL TO YOU */
    await transporter.sendMail({
      from: `"Fani Goud" <mfanigoud@gmail.com>`,
      to: "mfanigoud@gmail.com",
      subject: "📩 New Portfolio Message",
      text: logMessage,
      replyTo: email,
    });

    /* AUTO REPLY TO USER */
    await transporter.sendMail({
      from: `"Fani Goud" <mfanigoud@gmail.com>`,
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
  } catch (error) {
    // IMPORTANT: Do NOT fail user experience
    console.error("❌ Email failed, message still saved:", error.message);
  }

  /* ALWAYS RETURN SUCCESS */
  return res.status(200).json({
    success: true,
    message: "Message received successfully",
  });
});

/* ===================== SERVER START ===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
