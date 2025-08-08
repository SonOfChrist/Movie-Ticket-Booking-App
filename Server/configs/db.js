import mongoose from "mongoose";

// Load environment variables from .env file and set them in process.env so they can be accessed in the application
const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));
    const conn = await mongoose.connect(`${process.env.MONGODB_URI }/quickshow`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
 
  }
} 
export default connectDB;  