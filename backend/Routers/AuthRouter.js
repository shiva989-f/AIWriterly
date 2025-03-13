import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
} from "../Controllers/AuthController.js";

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/verify-email", verifyEmail);
authRoute.post("/login", login);
authRoute.post("/logout", logout);

export default authRoute