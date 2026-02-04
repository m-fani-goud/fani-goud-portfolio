import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend running 🚀",
  });
});

// file storage
const filePath = path.join(process.cwd(), "messages.txt");

// contact api (ONLY SAVE TO FILE)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const log = `
-----------------------------
Time: ${new Date().toLocaleString()}
Name: ${name}
Email: ${email}
Message:
${message}
-----------------------------
`;

  try {
    fs.appendFileSync(filePath, log);
    console.log("✅ Message saved");

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("❌ File error", err);
    res.status(500).json({
      success: false,
      message: "Failed to save message",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
