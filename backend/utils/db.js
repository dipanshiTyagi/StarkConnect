import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;
// const mongoose  = require("mongoose")

// mongoose.connect(MONGO_URI);
