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
      message: "server error users not found",
      error: err.message,
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
      message: "server error HR not found",
      error: err.message,
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
      message: "server error JobSeeker not found",
      error: err.message,
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
      message: "server error user not deleted",
      error: err.message,
    });
  }
};

// edit user via id
export const EditUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const editusers = await Users.findById(id);

    res.status(200).json({
      message: "Allusers found successfully",
      data: editusers,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error users not found",
      error: err.message,
    });
  }
};

// edit user via id
export const UpdateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await Users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      message: "Allusers updtaed successfully",
      data: updateuser,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error users not updtaed",
      error: err.message,
    });
  }
};

// find user bt id

export const findSingleUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const singleuser = await Users.findById(id);

    res.status(200).json({
      message: "users found successfully",
      data: singleuser,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error users not found",
      error: err.message,
    });
  }
};
