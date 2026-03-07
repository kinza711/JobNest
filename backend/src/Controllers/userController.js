import Users from "../Models/authModel.js";

export const AllUsers = async (req, res) => {
  try {
    const allusers = await Users.find();

    res.status(200).json({
      message: "Allusers found successfully",
      data: allusers,
    });
  } catch (err) {
    res.status(500).json({
      message: "users not found",
      error: err,
    });
  }
};

// total HR
export const HRs = async (req, res) => {
  try {
    const hr = await Users.find({ role: "HR" });

    res.status(200).json({
      message: "HR found successfully",
      data: hr,
    });
  } catch (err) {
    res.status(500).json({
      message: "HR not found",
      error: err,
    });
  }
};

// total Jobseeker
export const JobSeeker = async (req, res) => {
  try {
    const jobseeker = await Users.find({ role: "JobSeeker" });

    res.status(200).json({
      message: "jobSeeker found successfully",
      data: jobseeker,
    });
  } catch (err) {
    res.status(500).json({
      message: "JobSeeker not found",
      error: err,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await Users.findByIdAndDelete(id);

    res.status(200).json({
      message: "user delered succesfully",
      data: deleteuser,
    });
  } catch (err) {
    res.status(500).json({
      message: "user not deleted",
      error: err,
    });
  }
};
