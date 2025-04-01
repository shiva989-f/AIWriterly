import express from 'express'
import {
  aiOutput,
  showAIOutputHistory,
} from "../Controllers/AIOutputController.js";
import { verifyToken } from "../Middleware/VerifyToken.js";

const aiOutputRoute = express.Router()

aiOutputRoute.post("/ai-output", aiOutput);
aiOutputRoute.get("/show-history", verifyToken, showAIOutputHistory);


export default aiOutputRoute