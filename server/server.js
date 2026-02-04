import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import axios from "axios";

dotenv.config();

const app = express();

/* ===================== BASIC SETUP ===================== */
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
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

/* ===================== CONTACT API ===================== */
app.post("/api/contact", (req, res) => {
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

  /* SAVE MESSAGE (ALWAYS WORKS) */
  console.log(logMessage);
  fs.appendFileSync(filePath, logMessage);

  /* ✅ RESPOND IMMEDIATELY (NO TIMEOUT EVER) */
  res.status(200).json({
    success: true,
    message: "Message received successfully",
  });

  /* 🔁 SEND EMAIL IN BACKGROUND (OPTIONAL) */
  (async () => {
    try {
      await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: {
            name: "Fani Goud",
            email: "mfanigoud@gmail.com",
          },
          to: [
            {
              email: "mfanigoud@gmail.com",
              name: "Fani Goud",
            },
          ],
          replyTo: {
            email: email,
            name: name,
          },
          subject: "📩 New Portfolio Message",
          htmlContent: `
            <h2>New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        },
        {
          headers: {
            "api-key": process.env.BREVO_API_KEY,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );
    } catch (err) {
      console.error("Email failed (background):", err.message);
    }
  })();
});

/* ===================== START SERVER ===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
