import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));
    const conn = await mongoose.connect(`${process.env.MONGODB_URI }/quickshow`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
 
  }
} 
export default connectDB;  