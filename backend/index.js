import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./Routes/user.route.js";
import companyRoute from "./Routes/company.route.js";
import jobRoute from "./Routes/job.route.js";
dotenv.config({});
// dotenv.config();
// console.log(process.env.MONGO_URI);  // This should log your MongoDB URI

const app = express();

// app.get("/home", (req, res) => {
//     return res.status(200).json({
//         message:"Working",
//         success:true
//     })
// });

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/company", jobRoute);



app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
    connectDB();
})