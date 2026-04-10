import Job from "../Models/jobModel.js";

// jobpost creat logic
export const PostJob = async (req, res) => {
  try {
    const {
      title,
      disc,
      keys,
      requirements,
      company,
      category,
      location,
      salary,
      jobType,
      status,
      companySize,
      industry,
      remote,
      onsite,
      urgent,
    } = req.body;

    const jobs = await Job.create({
      title,
      disc,
      keys,
      requirements,
      company,
      category,
      location,
      salary,
      jobType,
      status,
      companySize,
      industry,
      remote,
      onsite,
      urgent,
    });

    res.status(200).json({
      message: "job  posted succesfully",
      data: jobs,
    });
    console.log(jobs);
  } catch (err) {
    res.status(500).json({
      message: "server error job not posted",
      error: err.message,
    });
  }
};

// job post delete logic

export const DeletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletejobs = await Job.findByIdAndDelete(id);

    if (!deletejobs) {
      res.status(200).json({
        message: "job  not found ",
      });
    }
    res.status(200).json({
      message: "job  Deleted succesfully",
      data: deletejobs,
    });
    console.log(deletejobs);
  } catch (err) {
    res.status(500).json({
      message: "server error job not deleted",
      error: err.message,
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
      message: "server error job not found",
      error: err.message,
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
      message: "server error job not updated",
      error: err.message,
    });
  }
};

// edit job logic

export const EditPost = async (req, res) => {
  try {
    const { id } = req.params;
    const editJobs = await Job.findById(id);
    res.status(200).json({
      message: "job  edited succesfully",
      data: editJobs,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error job not found",
      error: err.message,
    });
  }
};

// onsite job
export const OnsitePost = async (req, res) => {
  try {
    const onsite = await Job.find({ onsite: true });
    res.status(200).json({
      message: "onsite jobs  founded succesfully",
      data: onsite,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error onsite job not found",
      error: err.message,
    });
  }
};

// remote jobs

export const remotePost = async (req, res) => {
  try {
    const remote = await Job.find({ remote: true });
    res.status(200).json({
      message: "remote jobs  founded succesfully",
      data: remote,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error remote job not found",
      error: err.message,
    });
  }
};

// get single job

// export const GetSinglePost = async (req, res) => {
//   try {
//     const singleJobs = await Job.find({id});
//     res.status(200).json({
//       message: "job  found succesfully",
//       data: singleJobs,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "job not found",
//       error: err,
//     });
//   }
// };

export const GetSinglePost = async (req, res) => {
  try {
    const { id } = req.params;

    const singleJobs = await Job.findById(id);

    res.status(200).json({
      message: "job found successfully",
      data: singleJobs,
    });
  } catch (err) {
    res.status(500).json({
      message: "server error job not found",
      error: err.message,
    });
  }
};
