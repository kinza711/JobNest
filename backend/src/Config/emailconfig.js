import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const Transporter = nodemailer.createTransport({
  //service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
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
