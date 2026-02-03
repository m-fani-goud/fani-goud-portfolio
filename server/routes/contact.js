import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const router = express.Router();

// file storage
const filePath = path.join(process.cwd(), "messages.txt");

// SMTP transporter (Brevo)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// CONTACT ROUTE
router.post("/", async (req, res) => {
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
    `-----------------------------\n`;

  // log to terminal
  console.log(logMessage);

  // save to file
  fs.appendFile(filePath, logMessage, () => {});

  try {
    // email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <mfanigoud@gmail.com>`,
      to: "mfanigoud@gmail.com",
      subject: "📩 New Portfolio Message",
      text: logMessage,
    });

    // auto reply to USER
    await transporter.sendMail({
      from: `"Fani Goud" <mfanigoud@gmail.com>`,
      to: email,
      subject: "Thanks for contacting me 😊",
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thanks for reaching out through my portfolio.</p>
        <p>I’ve received your message and will get back to you soon.</p>
        <br/>
        <p>Regards,<br/><strong>Fani Goud</strong></p>
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
      message: "Email failed but message saved",
    });
  }
});

export default router;
