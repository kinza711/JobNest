import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// const Transporter = nodemailer.createTransport({
//   //service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

const Transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER, // brevo SMTP username
    pass: process.env.BREVO_PASS, // brevo SMTP password
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
