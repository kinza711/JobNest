import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    //job: {type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true, },

    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String },
    portfolio: { type: String },
    coverLetter: { type: String },
    resumeUrl: { type: String, required: true },
    relocate: { type: Boolean, default: false },
    newsletter: { type: Boolean, default: true },
    availability: { type: String, enum: ["Immediate", "1 Month", "3 Months"] },
    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Shortlisted", "Rejected", "Hired"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Application", applicationSchema);
