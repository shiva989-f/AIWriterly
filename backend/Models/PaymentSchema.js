import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
    startingDate: {
        type: Date,
        default: Date.now
    },
}, {timestamps: true})

export const paymentModel = mongoose.model("Payment", paymentSchema)