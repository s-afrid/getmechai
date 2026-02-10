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
    let pay = new Payment({
        oid: x.id,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message
    });
    await pay.save()

    return x
}

export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({username: username})
    if (!u) {
        return null;
    }
    let user = u.toObject({flattenObjectIds: true})
    return user
}

export const fetchpayments = async (username) => {
    await connectDB();
    // find all payments in decresing order of amount and flatten object ids
    let p = await Payment.find({to_user: username}).sort({amount: -1})
    let payments = p.map(doc => doc.toObject({flattenObjectIds: true}))
    return payments
}