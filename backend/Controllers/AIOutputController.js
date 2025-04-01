import { AIGenOutput } from "../Models/AIGeneratedOutputModel.js";
import { User } from "../Models/AuthModel.js";

export const aiOutput = async (req, res)=> {
    const { generatedBy, userFormInput, aiOutput, templateSlug } = req.body;
    
    try {
        if (!generatedBy || !userFormInput || !aiOutput || !templateSlug)
          throw new Error("All fields are required!");

        const aiGenOutput = await AIGenOutput.create({
          generatedBy,
          userFormInput,
          aiOutput,
          templateSlug,
        }); 
        await aiGenOutput.save()
        res.status(200).json({message: "Generated data saved!", success: true})
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
}

export const showAIOutputHistory = async (req, res)=> {
    const userId = req.userId;
    
    try {
        const user = await User.findById(userId).select("email") // select only email with id
        const generatedBy = user.email
        const history = await AIGenOutput.find({ generatedBy });
        res.status(200).json({message: "Generated data saved!", history, success: true})
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
}