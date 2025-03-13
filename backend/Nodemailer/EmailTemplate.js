export const VERIFICATION_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AIWriterly OTP Verification</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); text-align: center;">
        <img src="https://your-logo-url.com/logo.png" alt="AIWriterly Logo" style="width: 120px; margin-bottom: 20px;">
        <h2 style="color: #333;">OTP Verification</h2>
        <p style="color: #555; font-size: 16px;">Hello,</p>
        <p style="color: #555; font-size: 16px;">Your One-Time Password (OTP) for AIWriterly login is:</p>
        <div style="font-size: 24px; font-weight: bold; background: #007bff; color: #fff; display: inline-block; padding: 10px 20px; border-radius: 5px; letter-spacing: 4px; margin: 15px 0;">123456</div>
        <p style="color: #555; font-size: 16px;">This OTP is valid for only 10 minutes. Do not share it with anyone.</p>
        <p style="color: #555; font-size: 16px;">If you did not request this, please ignore this email or contact support.</p>
        <div style="margin-top: 20px; font-size: 12px; color: #777;">
            <p>Need help? <a href="https://aiwriterly.com/contact" style="color: #007bff; text-decoration: none;">Contact Support</a></p>
            <p>© 2025 AIWriterly. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

`;


const welcomeTemplate = `<!DOCTYPE html>
<html>
<head>
    <title>Welcome Email</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center;">
                    <!-- Logo Section -->
                    <tr>
                        <td style="padding-bottom: 20px;">
                            <img src="[Your Logo URL]" alt="Company Logo" width="120" style="display: block; margin: 0 auto;">
                        </td>
                    </tr>
                    <!-- Welcome Message -->
                    <tr>
                        <td>
                            <h1 style="color: #333; font-size: 24px; margin: 0;">Welcome to [Your Company Name]!</h1>
                            <p style="color: #666; font-size: 16px; line-height: 1.5; margin: 10px 0 20px;">
                                We're thrilled to have you on board. Get ready to explore amazing features and be a part of our community.
                            </p>
                        </td>
                    </tr>
                    <!-- Call to Action Button -->
                    <tr>
                        <td>
                            <a href="[Your Link Here]" style="display: inline-block; padding: 12px 24px; background: #007BFF; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 5px; font-weight: bold;">
                                Get Started
                            </a>
                        </td>
                    </tr>
                    <!-- Additional Information -->
                    <tr>
                        <td style="padding-top: 20px;">
                            <p style="color: #666; font-size: 14px; line-height: 1.5; margin: 0;">
                                Need help? Feel free to reply to this email or visit our <a href="[Support Link]" style="color: #007BFF; text-decoration: none;">Support Center</a>.
                            </p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="padding-top: 30px; font-size: 12px; color: #888;">
                            <p style="margin: 0;">© [Year] [Your Company Name]. All Rights Reserved.</p>
                            <p style="margin: 5px 0;">123 Your Street, Your City, Your Country</p>
                            <p style="margin: 5px 0;">
                                <a href="[Unsubscribe Link]" style="color: #888; text-decoration: none;">Unsubscribe</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;