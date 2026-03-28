import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const Transporter = nodemailer.createTransport({
  //service: "gmail",
  host: "smtp.gmail.com",
  //port: 465,
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default Transporter;
