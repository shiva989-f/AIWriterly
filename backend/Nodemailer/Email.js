import { VERIFICATION_EMAIL_TEMPLATE } from "./EmailTemplate.js";
import {transporter} from '../Nodemailer/nodemailer.config.js'

export const sendVerificationEmail = (email, otp) => {
  // All mail data
  const mailOptions = {
    from: '"No Reply" <foradsonly98@gmail.com>', // for no reply, if you own any domain use that like no-reply@midnight.com
    to: email,
    subject: "Verify your email",
    // text: "This is a test email using Nodemailer!", // use text if want to send only text
    html: VERIFICATION_EMAIL_TEMPLATE.replace("123456", otp), // Search for 123456 and replace with a dynamic OTP
    category: "Email Verification",
  };

  // transporter is mail configuration imported from nodemailer.config.js
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return Promise.reject(
        new Error(`Error sending verification email: ${error.message}`)
      );
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
