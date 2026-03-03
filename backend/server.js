import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import ConnectDB from "./src/Config/db.js"

//import cloudinary from "./src/Config/cloudinary.js" 

const port = process.env.PORT || 3000;

// check cludinary api key to comsole

ConnectDB();

app.listen(port, () => {
console.log(`Server is runnig on Port ${port}`);
})

