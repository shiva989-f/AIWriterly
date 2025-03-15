import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../Controllers/AuthController.js";

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/logout", logout);

// Receive the otp sent during signup and check if otp is exist in db and its time is not expired.
authRoute.post("/verify-email", verifyEmail);
// Send the email with reset password link
authRoute.post("/forgot-password", forgotPassword);
// Receive the new password and reset token and check if the reset token exist if exist update the password with new one.
authRoute.post("/reset-password", resetPassword);

export default authRoute