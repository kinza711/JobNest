import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    // jobId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Job",
    //   required: true,
    // },
    jobTitle: { type: String, required: true }, // store title as string
    company: { type: String, required: true }, // add this
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String },
    portfolio: { type: String },
    website: { type: String },
    linkedIn: { type: String },
    github: { type: String },
    coverLetter: { type: String },
    resume: { type: String },
    relocate: { type: Boolean, default: false },
    newsletter: { type: Boolean, default: true },
    Experience: {
      type: String,
      enum: ["fresher", "1-2 years", "2-3 years", "6-10 years"],
    },
    availability: { type: String, enum: ["Immediate", "1 Month", "3 Months"] },
    status: {
      type: String,
      enum: ["Pending", "Shortlisted", "Rejected", "Hired"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Application", applicationSchema);
