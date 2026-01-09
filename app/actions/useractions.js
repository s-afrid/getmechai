"use server"

import Razorpay from "razorpay"

import Payment from "../models/Payment"
import connectDB from "../db/ConnectDb"
import User from "../models/User"

// initiation
export const initiate = async (amount, to_username, paymentform)=> {
    await connectDB();

    var instance = new Razorpay({ key_id: process.env.RAZORPAY_ID, key_secret: process.env.RAZORPAY_SECRET })
    let options = {
        amount: Number.parseInt(amount),
        currency: 'INR',
    }

    let x = await instance.orders.create(options);

    // create a payment object which shows a pending payment in the database
    let pay = await Payment({
        oid: x.id,
        amount: amount,
        to_username: to_username,
        name: paymentform.name,
        message: paymentform.message
    })

    return x
}