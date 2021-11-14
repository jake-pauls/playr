import mongoose from 'mongoose';
import app from './app';

const main = async () => {
  const port: string | number = process.env.PORT || 4040;

  let db;
  try {
    db = await mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`
    );

    console.log(`Connected to MongoDB on ${db}`);
  } catch (err) {
    console.log(err);
  }

  app.listen(port, () => {
    console.log(`Express server started on https://localhost:${port}`);
  });

  // Verify the contents of your .env
  // import { config } from 'dotenv';
  // console.log(config().parsed);
};

main().catch((err) => {
  console.log(err);
});
