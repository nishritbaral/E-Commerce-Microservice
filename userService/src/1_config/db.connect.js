import mongoose from "mongoose";

const connectDB = async () => {
  const dbName = process.env.DB_NAME;
  const dbUserName = process.env.DB_USERNAME;
  const dbPassword = process.env.DB_PASSWORD;
  const dbHosts = process.env.DB_HOSTS;

  const mongoDbConnectionURL = `mongodb://${dbUserName}:${dbPassword}@${dbHosts}/${dbName}`;

  try {
    await mongoose.connect(mongoDbConnectionURL);
    console.log(`DB connection Successful.`);
  } catch (error) {
    console.log(`DB connection Failed.`);
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
