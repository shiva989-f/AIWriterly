import jwt from "jsonwebtoken";

export const generateTokenAndSetCookies = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  
 res.cookie('token', token, {
  httpOnly: true, // accessible by only http not with js to prevent from xss
  secure: process.env.NODE_ENV === 'production', // Secure = true only when we are in production means (https) else in development secure = false (http)
  sameSite: "strict", // prevent csrf
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7days in the format of ms
 });
 return token;
};
