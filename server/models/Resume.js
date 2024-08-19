import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Resume = sequelize.define("Resume", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience: {
    type: DataTypes.JSONB, // Store experience as a JSONB object
    allowNull: false,
  },
  education: {
    type: DataTypes.JSONB, // Store education as a JSONB object
    allowNull: false,
  },
  skills: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Store skills as an array of strings
    allowNull: false,
  },
});

export default Resume;
