import { User } from "../Models/AuthModel.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookies } from "../Utils/generateTokenAndSetCookies.js";
import { sendVerificationEmail } from "../Nodemailer/Email.js";

// Signup route: http://localhost:3000/api/auth/signup
export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required!");
    }
    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) {
      return res
        .status(400)
        .json({ message: "User already exist, Please login!", success: false });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Creating verification token (OTP)
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString(); 

    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      // verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // Token expires, after 24 hours of the creation/Signup
      verificationTokenExpiresAt: Date.now() + 10 * 60 * 1000, // Token expires, after 10 minutes 
    });
    await user.save();

    // Sending OTP through nodemailer
    await sendVerificationEmail(user.email, verificationToken)
    
    
    // JWT
    generateTokenAndSetCookies(res, user._id);

    res.status(201).json({
      message: "Signed up successfully!",
      user: {
        ...user._doc, // Spread the user document means user data
        password: undefined, // and change the password value to undefined so it is not shown in response
      },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

// Verify email route: http://localhost:3000/api/auth/verify-email
export const verifyEmail = async (req, res) => {
  // Getting otp from user
  const {code} = req.body
  try {
    // If token is not found or verification time is expired then it is not valid
    const user = await User.findOne({
      verificationToken: code,
      // if verificationTokenExpires time is greater than Date.now(), then expiry time is not expire yet
      verificationTokenExpiresAt: {$gt: Date.now()}
    });

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid or expired verification code"});
    }

    // If valid otp
    user.isVerified = true
    // after verification delete 
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save()

    res
      .status(400)
      .json({
        success: false,
        message: "Invalid or expired verification code",
      });
  } catch (error) {
    
  }
}

// Login route: http://localhost:3000/api/auth/login
export const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("All fields are required!");
  }
};

// Logout route: http://localhost:3000/api/auth/logout
export const logout = (req, res) => {
  res.send("Welcome to logout");
};
