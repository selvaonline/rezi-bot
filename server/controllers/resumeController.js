import Resume from "../models/Resume.js";

export const createResume = async (req, res) => {
  const { name, experience, education, skills } = req.body;
  try {
    const newResume = new Resume({ name, experience, education, skills });
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    res.status(500).json({ message: "Error creating resume", error });
  }
};

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resumes", error });
  }
};
