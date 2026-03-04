import Job from "../Models/jobModel.js";

// jobpost creat logic
export const PostJob = async (req, res) => {
  try {
    const {
      title,
      description,
      keys,
      requirements,
      company,
      category,
      location,
      salary,
      jobType,
      companySize,
      industry,
      urgent,
    } = req.body;

    const jobs = await Job.create({
      title,
      description,
      keys,
      requirements,
      company,
      category,
      location,
      salary,
      jobType,
      companySize,
      industry,
      urgent,
    });

    res.status(200).json({
      message: "job  posted succesfully",
      data: jobs,
    });
    console.log(jobs);
  } catch (err) {
    res.status(500).json({
      message: "job not posted",
      error: err,
    });
  }
};

// job post delete logic

export const DeletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletejobs = await Job.findOneAndDelete(id);

    if (!deletejobs) {
      res.status(200).json({
        message: "job  not found ",
      });
    }
    res.status(200).json({
      message: "job  Deleted succesfully",
    });
    console.log(deletejobs);
  } catch (err) {
    res.status(500).json({
      message: "job not deleted",
      error: err,
    });
  }
};

// Get post logic

export const GetPost = async (req, res) => {
  try {
    const AllJobs = await Job.find();
    res.status(200).json({
      message: "job  found succesfully",
      data: AllJobs,
    });
  } catch (err) {
    res.status(500).json({
      message: "job not found",
      error: err,
    });
  }
};

//update job logic

export const UpdateJob = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json({
      message: "job  updated succesfully",
      data: updatedJob,
    });
  } catch (err) {
    res.status(500).json({
      message: "job not updated",
      error: err,
    });
  }
};

// edit job logic

