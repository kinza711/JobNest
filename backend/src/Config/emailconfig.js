import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const Transporter = nodemailer.createTransport({
  //service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Yeh line add karo — verify karta hai connection
Transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Failed:", error);
  } else {
    console.log("✅ SMTP Connected Successfully!");
  }
});

export default Transporter;
