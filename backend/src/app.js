import express from "express"
const app = express();
//import cors from "cors"


// to fetch and store data
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//cors setup for both production and local system
// const allowedOrigin = process.env.NODE_ENV === "production"
//   ? process.env.FRONTEND_URL : "http://localhost:5173"
// app.use(cors({
//   origin: allowedOrigin, // frontend live URL
//   credentials: true
// }));


app.use("/uploads", express.static("uploads"))

//default apge 
app.get("/", (req, res)=>{
    res.send("welcome to the backend kinza")
})
//404  page
app.get((req, res)=>{
    res.send("Sorry its bad request 404 page")
})

export default app