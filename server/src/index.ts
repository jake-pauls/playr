import { config } from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

const main = async () => {
  const port: string | number = process.env.PORT || 4040;

  // Load .env file into NODE_ENV
  config();

  try {
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:27017/playr`);
    console.log('Successfully connected to MongoDB!');
  } catch (err) {
    console.log(err);
  }

  app.listen(port, () => {
    console.log(`Express server started on https://localhost:${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
