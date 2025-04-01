import mongoose from 'mongoose';

const AIGeneratedOutputSchema = new mongoose.Schema({
  userFormInput: {
    type: String,
    required: true,
  },
  aiOutput: String,
  templateSlug: {
    type: String,
    required: true,
  },
  generatedBy: {
    type: String,
    required: true,
  },
}, {timestamps: true});

export const AIGenOutput = mongoose.model("AIGeneratedOutput", AIGeneratedOutputSchema);