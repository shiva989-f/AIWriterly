import {
  RESET_PASSWORD_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_TEMPLATE,
} from "./EmailTemplate.js";
import { transporter } from "../Nodemailer/nodemailer.config.js";

export const sendVerificationEmail = async (email, otp) => {
  // All mail data
  const mailOptions = {
    from: '"AI Writerly" <foradsonly98@gmail.com>',
    to: email,
    subject: "Verify your email",
    // text: "This is a test email using Nodemailer!", // use text if want to send only text
    html: VERIFICATION_EMAIL_TEMPLATE.replace("123456", otp),
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

export const sendWelcomeEmail = async (email) => {
  const mailOptions = {
    from: '"AI Writerly" <foradsonly98@gmail.com>',
    to: email,
    subject: "Welcome to AI Writerly",
    html: WELCOME_TEMPLATE,
    category: "Welcome to AI Writerly",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return Promise.reject(
        new Error(`Error while sending welcome email: ${error.message}`)
      );
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const mailOptions = {
    from: '"AI Writerly" <foradsonly98@gmail.com>',
    to: email,
    subject: "Reset Password",
    html: RESET_PASSWORD_TEMPLATE.replace("{resetURL}", resetURL),
    category: "Reset Password",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return Promise.reject(
        new Error(`Error while sending welcome email: ${error.message}`)
      );
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

export const sendResetPasswordSuccessEmail = async (email) => {
  const mailOptions = {
    from: '"AI Writerly" <foradsonly98@gmail.com>',
    to: email,
    subject: "Reset Password Success",
    html: RESET_PASSWORD_TEMPLATE,
    category: "Reset Password Success",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return Promise.reject(
        new Error(`Error while sending email: ${error.message}`)
      );
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
