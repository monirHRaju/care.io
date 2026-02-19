import mongoose from 'mongoose';

const connectMongoDB = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Already connected
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Database connection failed');
  }
};

export default connectMongoDB;