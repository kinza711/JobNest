import Transporter from "../Config/emailconfig.js";

export const sendMail = async (to, subject, text) => {
  try {
    const info = await Transporter.sendMail({
      from: `"JobNest Team" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    //console.log("email sended successfully to applicatnt",);
    console.log("Email sent:", info.response);
    //return info; // ← yeh add karo
  } catch (err) {
    console.error(err, "sorry email not sended to applicant");
  }
};
