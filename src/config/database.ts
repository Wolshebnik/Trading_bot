import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error(
      'Please define the MONGO_URI environment variable inside .env.local',
    );
  }

  try {
    if (mongoose.connections[0].readyState) {
      return true;
    }

    await mongoose.connect(MONGO_URI);

    console.log('Connected to MongoDB');

    return true;
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
