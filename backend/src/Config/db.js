import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected sucessfully");
  } catch (err) {
    console.log("Database not connected", err);
  }
};

export default ConnectDB;
