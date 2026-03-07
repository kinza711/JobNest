import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    disc: { type: String, required: true },
    keys: { type: String, required: true },
    requirements: { type: String, required: true },
    company: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Web Developer",
        "AI/ML Engineer",
        "UI/UX Designer",
        "Software Engineering",
        "Marketing",
        "Customer Support",
      ],
      required: true,
    },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    jobType: {
      type: String,
      enum: ["Full-time", "Contract", "Part-time"],
      required: true,
    },
    status: {
      type: String,
      enum: ["live", "closed"],
      required: true,
    },
    companySize: { type: String, required: true },
    industry: { type: String, required: true },
    remote: { type: Boolean, default: false },
    onsite: { type: Boolean, default: true },
    urgent: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("Job", jobSchema);
