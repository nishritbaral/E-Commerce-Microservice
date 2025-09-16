import mongoose from "mongoose";

const dbName = process.env.dbName;
const dbUserName = process.env.dbUserName;
const dbPassword = process.env.dbPassword;
const dbHosts = process.env.dbHosts;
const dbOptions = process.env.dbOptions;

const mongoDbConnectionURL = `mongodb+srv://${dbUserName}:${dbPassword}@${dbHosts}/${dbName}?${dbOptions}`;

const connectDB = async () => {
  try {
    mongoose.connect(mongoDbConnectionURL);
    console.log(`DB connection Successful.`);
  } catch (error) {
    console.log(`DB connection Failed.`);
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
