import Application from "../Models/applicationModel.js";
import Job from "../Models/jobModel.js";

// submit appliaction logic
// export const ApplyJob = async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       phone,
//       location,
//       portfolio,
//       website,
//       linkedIn,
//       github,
//       coverLetter,
//       resume,
//       relocate,
//       newsletter,
//       Experience,
//       availability,
//       status,
//     } = req.body;

//     const { id } = req.params;
//     // fetch job details using job ID
//     const job = await Job.findById(id);
//     if (!job) return res.status(404).json({ message: "Job not found" });

//     const application = await Application.create({
//       jobTitle: job.title,
//       company: job.company, // automatically add company
//       fullName,
//       email,
//       phone,
//       location,
//       portfolio,
//       website,
//       linkedIn,
//       github,
//       coverLetter,
//       resume,
//       //resume: req.file ? req.file.path : null,
//       relocate,
//       newsletter,
//       Experience,
//       availability,
//       status,
//     });

//     res.status(200).json({
//       message: "application submitted successfully",
//       data: application,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "application not submitted",
//       error: err,
//     });
//   }
// };
// submit application with resume and user id

export const ApplyJob = async (req, res) => {
  try {
    const data = req.body;
    const resume = req.file?.path;

    // Attach logged-in user ID
    const userId = req.user._id;

    const application = await Application.create({
      ...data,
      resume: resume,
      user: userId, // ⚡ link application to user
    });

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
