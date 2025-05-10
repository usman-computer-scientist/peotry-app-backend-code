import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import poetryRoutes from "./routes/poetryRoutes.js";

dotenv.config();
const app = express();

// using middleware
app.use(express.json());

//using routes
app.use("/api/poetry", poetryRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is working on port",process.env.PORT);
connectDb();  
});









