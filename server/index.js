import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import resumeRoutes from "./routes/resumeRoutes.js";
import sequelize from "./config/database.js";
import Resume from "./models/Resume.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Sync Database
sequelize
  .sync()
  .then(() => console.log("PostgreSQL connected and models synchronized"))
  .catch((err) => console.error("Failed to sync database:", err));

// Routes
app.use("/api/resumes", resumeRoutes);

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
