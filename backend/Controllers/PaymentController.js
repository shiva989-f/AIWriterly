import { instance } from "../app.js";
import { paymentModel } from "../Models/PaymentSchema.js";

export const createPlan = async (req, res) => {
  try {

    const subscription = await instance.subscriptions.create({
      plan_id: process.env.SUBSCRIPTION_PLAN_ID,
      customer_notify: 1,
      quantity: 1,
      total_count: 1, 
      addons: [],
      notes: {
        key1: 'Premium Plan'
      }
    });

    res.json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
};

export const savePaymentData = async (req, res) => {
    console.log("Reached Here");
    
    const {name, email, active, paymentId} = req.body;
    if (!name || !email || !active || !paymentId) {
        throw new Error("Invalid Credentials");
    }
  try {
    const payment = await paymentModel.create({
        name,
        email,
        active, 
        paymentId
    })

    await payment.save()
    res.status(200).json({message: 'Upgraded to premium', success: true})
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
};


export const isUserSubscribed = async (req, res)=> {
  const {email} = req.body;
  if (!email) {
    throw new Error("No email provided!")
  }
  try {
    const isUserSubscribed = await paymentModel.find({email});
    if (!isUserSubscribed) {
      return res.status(404).json({message: "User is not subscribed", success: false})
    }
    
    res
      .status(200)
      .json({ message: "User is subscribed", isUserSubscribed, success: true });
  } catch (error) {
    res.status(500).json({message: "Something went wrong", success: false})
  }
}