import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};


// const connectDB = mongoose.connect("mongodb://localhost:27017/chat", {

//   useNewUrlParser: "true",
//   useUnifiedTopology: "true"

// })



export default connectDB;
