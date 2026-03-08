import Users from "../Models/authModel.js";
import jwt from "jsonwebtoken";
const varifyToken = async (req, res, next) => {
  try {
    // step 1 to set authheader
    const authHeader = req.headers.authorization;
    // to check authheader
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        message: "token not found",
      });
    }
    // varify token with sectet key
    const token = authHeader.split("")[1];
    const decoded = jwt.varify(token, process.env.JWT_SECRET);

    // this is the key ( Mian ) part to find users
    const user = await Users.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({
        message: " user not varified",
      });
    }

    req.user = user; // impprtant part
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({
      message: "token or user not varified",
    });
  }
};

export default varifyToken;
