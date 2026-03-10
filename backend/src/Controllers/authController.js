import Users from "../Models/authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register
export const Register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "Profile image is required",
      });
    }
    // if user already registered
    const ExistingUser = await Users.findOne({ email });
    if (ExistingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const users = await Users.create({
      name,
      email,
      password: hashpassword,
      role,
      pic: req.file?.path || "",
    });

    console.log(users);
    res.status(201).json({
      message: "user craeted successfully",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      message: "user not craeted",
      error: err,
    });
  }
};

// logout
export const Logout = (req, res) => {
  try {
    res.status(200).json("Logout Successfully");
  } catch (err) {
    res.status(500).json("Logout failed");
  }
};

//login
export const Login = async (req, res) => {
  try {
    // add info
    const { email, password, role } = req.body;
    //find email
    const user = await Users.findOne({ email });
    // find user
    if (!user) {
      return res.status(401).json({
        message: "user not exist please register",
      });
    }
    // match role
    if (role !== user.role) {
      return res.status(403).json({
        message: "role not match invalid credintials",
      });
    }
    // match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({
        message: "password is incorrrect invalid crediantials",
      });
    }
    // skip JWT for now only
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    //console.log(token);

    // for cloudinary pics
    let picUrl = user.pic;

    if (user.pic && !picUrl.startsWith("https")) {
      picUrl = `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/${picUrl}`;
    }

    res.status(200).json({
      message: "user is varified or loggedin ",
      user: {
        token: token,
        name: user.name,
        id: user._id,
        email: user.email,
        role: user.role,
        pic: user.pic,
        heading: user.heading,
      },
    });
    console.log(user);

    // set simple login
    // if (role === "Admin") {
    //   res.send("welcome Admin");
    // } else if (role === "HR") {
    //   res.send("welcome HR");
    // } else if (role === "JobSeeker") {
    //   res.send("welcome Jobseeker ");
    // } else {
    //   res.send("you are no authorised go back");
    // }
  } catch (err) {
    res.status(500).json({
      message: "user not loggedin",
      error: err,
    });
  }
};
