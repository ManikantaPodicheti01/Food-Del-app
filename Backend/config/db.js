import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://usermani:9133937783@cluster0.xuolxfj.mongodb.net/food-del").then(()=>console.log("DB connected"));
}