import Resume from "../models/Resume.js";
import { summarizeText } from "../services/huggingFaceService.js";

export const createResume = async (req, res) => {
  const { name, experience, education, skills } = req.body;
  try {
    // Example: Summarizing experience text
    const summarizedExperience = await Promise.all(
      experience.map(async (exp) => {
        return {
          ...exp,
          summary: await summarizeText(exp.description),
        };
      })
    );

    const newResume = await Resume.create({
      name,
      experience: summarizedExperience,
      education,
      skills,
    });

    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ message: "Error creating resume", error });
  }
};

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.findAll();
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resumes", error });
  }
};
