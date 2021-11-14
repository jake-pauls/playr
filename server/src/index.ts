import { config } from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

const main = async () => {
  config();
  const port: string | number = process.env.PORT || 4040;

  let db;
  try {
    db = await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:27017`);

    console.log(`Connected to MongoDB on ${db}`);
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
