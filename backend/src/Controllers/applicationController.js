import Application from "../Models/applicationModel.js";

// submit appliaction logic
export const ApplyJob = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      location,
      portfolio,
      coverLetter,
      resume,
      relocate,
      newsletter,
      availability,
      status,
    } = req.body;

    const application = await Application.create({
      fullName,
      email,
      phone,
      location,
      portfolio,
      coverLetter,
      resume,
      relocate,
      newsletter,
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
