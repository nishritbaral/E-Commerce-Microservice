import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./1_config/db.connect.js";

dotenv.config();

await connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is listening on Port, ${PORT}`);
});
