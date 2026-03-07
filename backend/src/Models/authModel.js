import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number }, // for profile
    heading: { type: String }, //for profile
    location: { type: String }, //for profile
    role: { type: String, required: true, enum: ["Admin", "HR", "JobSeeker"] },
    //pic:{type:String, required: true},
  },
  { timestamps: true },
);

export default mongoose.model("Users", userSchema);
