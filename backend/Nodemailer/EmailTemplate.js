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
