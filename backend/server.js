const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
const PORT = 5000;
app.use(cors());

app.use(express.json());

// POST route for sending emails
app.post("/send-email", async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Gmail transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
},

    });

    await transporter.sendMail({
      from: `"Lawmate Inquiry" <lawmate.infodesk@gmail.com>`,
      to: "lawmate.infodesk@gmail.com",
      subject: `New Inquiry - ${subject}`,
      text: `
Name: ${fullName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Backend server running on http://localhost:5000");
});
