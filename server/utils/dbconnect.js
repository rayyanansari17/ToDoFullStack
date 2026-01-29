import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function dbConnect() {
    try {
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri)
        console.log("database connected")        
    } catch (error) {
        console.log(error)
    }
}

dbConnect();