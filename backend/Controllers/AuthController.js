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
        .json({ msg: "User already exist, Please login!", success: false });
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

    await sendVerificationEmail(user.email, verificationToken)
    
    
    // JWT
    const token = generateTokenAndSetCookies(res, user._id);
    res.status(200).json({
      msg: "Signed up successfully!",
      user: {
        ...user._doc, // Spread the user document means user data
        password: undefined, // and change the password value to undefined so it is not shown in response
      },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message, success: false });
  }
};

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
