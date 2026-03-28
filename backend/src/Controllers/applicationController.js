import Application from "../Models/applicationModel.js";
import Job from "../Models/jobModel.js";
import { sendMail } from "../services/emailservice.js";

// submit application with resume and user id

export const ApplyJob = async (req, res) => {
  try {
    const data = req.body;
    const resume = req.file?.path;
    // Attach logged-in user ID
    const userId = req.user._id;

    console.log(process.env.EMAIL_USER);
    // console.log(process.env.EMAIL_PASS);

    // Check if form email matches logged-in user email
    if (req.user.email !== data.email) {
      return res.status(400).json({
        message:
          "Invalid email address. Please use the email you registered with.",
      });
    }

    const application = await Application.create({
      ...data,
      resume: resume,
      user: userId, // ⚡ link application to user
    });

    // DEBUG check
    console.log("Recipient email:", req.user.email);

    // send email WITHOUT blocking response
    sendMail(
      req.user.email,
      "Application Received Successfully",
      `Dear Candidate,

Thank you for applying through JobNest.

We have successfully received your job application.
Our hiring team will review your profile and contact you soon.

Best regards,
JobNest Hiring Team`,
    );

    res.status(201).json({
      message: "Application submitted",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      message: "Submission failed",
      error: error.message,
    });
  }
};

// get my applications logic

export const GetApplications = async (req, res) => {
  try {
    const AllApplications = await Application.find();

    res.status(200).json({
      message: "applications found successfully",
      data: AllApplications,
    });
  } catch (err) {
    res.status(500).json({
      message: "applications not found",
      error: err,
    });
  }
};

// total Shortlisted
export const Shortlisted = async (req, res) => {
  try {
    const userId = req.user._id;
    const interview = await Application.find({
      user: userId,
      status: "Shortlisted",
    });

    res.status(200).json({
      message: "shortlisted applications found successfully",
      data: interview,
    });
  } catch (err) {
    res.status(500).json({
      message: "shortlisted applications not found",
      error: err,
    });
  }
};

// total Rejected

export const Rejected = async (req, res) => {
  try {
    const userId = req.user._id;
    const interview = await Application.find({
      user: userId,
      status: "Rejected",
    });

    res.status(200).json({
      message: "Rejected applications found successfully",
      data: interview,
    });
  } catch (err) {
    res.status(500).json({
      message: "rejected applications not found",
      error: err,
    });
  }
};

// get single application

export const GetSingleApplications = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id);

    res.status(200).json({
      message: "Application found successfully",
      data: application,
    });
  } catch (err) {
    res.status(500).json({
      message: "Application not found",
      error: err.message,
    });
  }
};

// update status

export const UpdateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appstatus = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    let subject = "";
    let message = "";

    if (status === "Shortlisted") {
      subject = "Application Update – Shortlisted";
      message = `Dear Candidate,

We are pleased to inform you that your application has been shortlisted. Our team will contact you soon regarding the next steps of the interview process.

Best regards,
JobNest Hiring Team`;
    } else if (status === "Rejected") {
      subject = "Application Update";
      message = `Dear Candidate,

Thank you for applying through JobNest. After careful review, we regret to inform you that your application was not selected for this position.

We wish you success in your future opportunities.

Best regards,
JobNest Hiring Team`;
    } else if (status === "Hired") {
      subject = "Congratulations – You Have Been Selected";
      message = `Dear Candidate,

Congratulations! We are delighted to inform you that you have been selected for the position.

Our team will contact you soon with the next steps.

Best regards,
JobNest Hiring Team`;
    }

    // send email if status matches
    // if (subject && message) {
    //   await sendMail(appstatus.email, subject, message);
    // }
    if (subject && message) {
      try {
        const info = await sendMail(appstatus.email, subject, message);
        if (info && info.response) {
          console.log("✅ Status email sent:", info.response);
        } else {
          console.log("✅ Status email sent (no response info)");
        }
      } catch (error) {
        console.error("❌ Status email failed:", error);
      }
    }

    res.status(200).json({
      message: "Application status updated successfully",
      data: appstatus,
    });
  } catch (err) {
    res.status(500).json({
      message: "Application status not updated",
      error: err,
    });
  }
};

// delete application logic

export const deleteApp = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteapp = await Application.findByIdAndDelete(id);

    res.status(200).json({
      message: "Application deleted successfully",
      data: deleteapp,
    });
  } catch (err) {
    res.status(500).json({
      message: "Application not deleted",
      error: err,
    });
  }
};

// get applications by user id
export const GetUserApplications = async (req, res) => {
  try {
    const userId = req.user._id; // logged-in user from token
    const userApplications = await Application.find({ user: userId });

    res.status(200).json({
      message: "Applications fetched successfully",
      data: userApplications,
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch applications",
      error: err.message,
    });
  }
};

// find total submited application for uers
export const UserTotalApplications = async (req, res) => {
  try {
    const userId = req.user._id;
    const AllApplications = await Application.find({
      user: userId,
    });

    res.status(200).json({
      message: "applications found successfully",
      data: AllApplications,
    });
  } catch (err) {
    res.status(500).json({
      message: "applications not found",
      error: err,
    });
  }
};
