import mongoose = require("mongoose");
import logger from "./logger";


const connectDB = async (mongoURI: string) => {
  try {
    await mongoose.connect(mongoURI);
    logger.info('MongoDB connected successfully');
  } catch (error) {
    logger.error('MongoDB connection failed:', error);
    process.exit(1); 
  }
};

export default connectDB;
