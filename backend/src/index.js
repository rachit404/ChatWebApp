import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "../src/lib/db.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
