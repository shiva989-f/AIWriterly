import express from 'express'
import { verifyToken } from '../Middleware/VerifyToken.js'
import { createPlan, isUserSubscribed, savePaymentData } from '../Controllers/PaymentController.js'

const paymentRoute = express.Router()

paymentRoute.post("/create-plan", verifyToken, createPlan)
paymentRoute.post("/save-payment", verifyToken, savePaymentData)

paymentRoute.post("/user-subscription", verifyToken, isUserSubscribed)

export default paymentRoute