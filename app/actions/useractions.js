"use server"

import Razorpay from "razorpay"

import Payment from "../models/Payment"
import connectDB from "../db/ConnectDb"
import User from "../models/User"


// initiation
export const initiate = async (amount, to_username, paymentform)=> {
    await connectDB();

     // fetch razor pay id and secret from database
    let user = await User.findOne({username: to_username})
    const id = user.razorpayid
    const secret = user.razorpaysecret
    
    var instance = new Razorpay({ key_id: id, key_secret: secret })
    let options = {
        amount: Number.parseInt(amount),
        currency: 'INR',
    }

    let x = await instance.orders.create(options);

    // create a payment object which shows a pending payment in the database
    let pay = new Payment({
        oid: x.id,
        amount: parseInt(amount/100),
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

export const updateProfile = async (data, oldusername) => {
    await connectDB();
    let ndata = Object.fromEntries(data)
    // if username is being updated check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({username: ndata.username})
        if (u) {
            return { error: "Username already exists" }
        }
    }
    await User.updateOne({email: ndata.email, username: ndata.username}, ndata)
}

export const fetchpayments = async (username) => {
    await connectDB();
    // find all payments in decresing order of amount and flatten object ids
    let p = await Payment.find({to_user: username, done: true}).sort({amount: -1})
    let payments = p.map(doc => doc.toObject({flattenObjectIds: true}))
    return payments
}