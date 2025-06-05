import express from "express";
import cors from "cors";
const app = express();
import userRoutes from "./my-app/routes/userRoutes.js";
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());

 
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.use("/api/users", userRoutes);