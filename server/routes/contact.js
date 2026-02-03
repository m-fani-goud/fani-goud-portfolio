import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    // Create a test email account
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <no-reply@portfolio.com>`,
      to: "fanigoud@portfolio.com",
      subject: `New message from ${name}`,
      text: message,
    });

    res.status(200).json({
      success: true,
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      message: "Failed to send message",
    });
  }
});

export default router;
