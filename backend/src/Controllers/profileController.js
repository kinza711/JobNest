import Users from "../Models/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user._id; // JWT middleware
    const user = await Users.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        location: user.location,
        phone: user.phone,
        heading: user.heading,
        summery: user.summery,
        pic: user.pic || "", // Cloudinary URL from DB
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "server error",
      error: err.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id; // decoded from JWT middleware
    const { name, email, phone, heading, location, summery, password } =
      req.body;

    const user = await Users.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (req.file) {
      user.pic = req.file.path; // multer sets req.file
    }

    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (heading) user.heading = heading;
    if (location) user.location = location;
    if (summery) user.summery = summery;

    // If password is provided, hash it
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        heading: user.heading,
        role: user.role,
        pic: user.pic,
        location: user.location,
        summery: user.summery,
      },
    });
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};
