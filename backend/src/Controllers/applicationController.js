import Application from "../Models/applicationModel.js";
import Job from "../Models/jobModel.js";

// submit appliaction logic
export const ApplyJob = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      location,
      portfolio,
      website,
      linkedIn,
      github,
      coverLetter,
      resume,
      relocate,
      newsletter,
      Experience,
      availability,
      status,
    } = req.body;

    const { id } = req.params;
    // fetch job details using job ID
    const job = await Job.findOne(id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const application = await Application.create({
      jobTitle: job.title,
      company: job.company, // automatically add company
      fullName,
      email,
      phone,
      location,
      portfolio,
      website,
      linkedIn,
      github,
      coverLetter,
      resume,
      relocate,
      newsletter,
      Experience,
      availability,
      status,
    });

    res.status(200).json({
      message: "application submitted successfully",
      data: application,
    });
  } catch (err) {
    res.status(500).json({
      message: "application not submitted",
      error: err,
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
    const interview = await Application.find({ status: "Shortlisted" });

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
    const interview = await Application.find({ status: "Rejected" });

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
    const singleApplications = await Application.findById(id);

    res.status(200).json({
      message: "applications found successfully",
      data: singleApplications,
    });
  } catch (err) {
    res.status(500).json({
      message: "applications not found",
      error: err,
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
