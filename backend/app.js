import express  from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import { DBConnection } from "./Connection/DBConnection.js";
import authRoute from './Routers/AuthRouter.js';
import cors from 'cors'
import aiOutputRoute from './Routers/AIOutputRouter.js';
import Razorpay from 'razorpay'
import paymentRoute from './Routers/PaymentRouter.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
DBConnection();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(express.json()) // allows us to parse incoming request: req.body
app.use(cookieParser()) // allows us to parse incoming cookie: req.cookie
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true})); // credentials allows to send cookies

app.use('/api/auth', authRoute)
app.use('/api', aiOutputRoute)
app.use('/api/payment', paymentRoute)

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT} `);
});