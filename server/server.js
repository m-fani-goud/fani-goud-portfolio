import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ================= ROOT HEALTH ROUTE =================
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is running successfully 🚀",
  });
});

// ================= FILE PATH =================
const filePath = path.join(process.cwd(), "messages.txt");

// ================= BREVO SMTP =================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ================= VERIFY SMTP =================
transporter.verify((err) => {
  if (err) {
    console.error("❌ Email login failed:", err.message);
  } else {
    console.log("✅ Email server is ready");
  }
});

// ================= CONTACT API =================
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
    "📩 New Contact Message\n" +
    "Time: " + time + "\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Message: " + message + "\n" +
    "----------------------------------\n";

  // 1️⃣ LOG TO TERMINAL
  console.log(logMessage);

  // 2️⃣ SAVE TO FILE
  fs.appendFile(filePath, logMessage, (err) => {
    if (err) console.error("❌ File save error:", err);
  });

  try {
    // 3️⃣ SEND EMAIL TO YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <mfanigoud@gmail.com>`,
      to: "mfanigoud@gmail.com",
      subject: "📩 New Portfolio Message",
      text: logMessage,
    });

    // 4️⃣ AUTO-REPLY TO USER (BRANDED)
    await transporter.sendMail({
      from: `"Fani Goud" <mfanigoud@gmail.com>`,
      to: email,
      subject: "Thanks for contacting me 😊",
      html: `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f1f5f9;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table style="max-width:520px;background:#ffffff;border-radius:16px;
            font-family:Arial,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.08);">

            <tr>
              <td style="background:linear-gradient(135deg,#1E3A8A,#0D9488);
                padding:28px;text-align:center;color:#fff;">
                <h1 style="margin:0;font-size:22px;">Thanks for reaching out 👋</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:28px;color:#1f2937;">
                <p>Hi <strong>${name}</strong>,</p>

                <p>
                  Thank you for contacting me through my portfolio.
                  I’ve received your message and I’ll get back to you soon.
                </p>

                <p>
                  Meanwhile, feel free to explore my work and connect with me:
                </p>

                <p style="margin-top:24px;">
                  🔗 <a href="https://github.com/m-fani-goud" style="color:#1E3A8A;">GitHub</a><br/>
                  🔗 <a href="https://linkedin.com/in/fani-goud" style="color:#1E3A8A;">LinkedIn</a>
                </p>

                <p style="margin-top:32px;">
                  Best regards,<br/>
                  <strong>Fani Goud</strong><br/>
                  <span style="color:#6b7280;">Full-Stack Developer</span>
                </p>
              </td>
            </tr>

            <tr>
              <td style="background:#f9fafb;padding:16px;text-align:center;
                font-size:12px;color:#6b7280;">
                This is an automated message. Please do not reply.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Email error:", error.message);

    res.status(500).json({
      success: false,
      message: "Message saved but email failed",
    });
  }
});

// ================= SERVER START =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
