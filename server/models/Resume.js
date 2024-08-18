import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  experience: { type: Array, required: true },
  education: { type: Array, required: true },
  skills: { type: Array, required: true },
});

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;
