import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import User from "@/app/models/User";
import Razorpay from "razorpay";
import connectDB from "@/app/db/ConnectDb";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)
    // Check razorpay id present in server
    let p = await Payment.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success: false, message: "Order Id not found"})
    }

    // fetch razor pay secret from database
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    // verify the payment
    let xx = validatePaymentVerification({"order_id":body.razorpay_order_id, "payment_id":body.razorpay_payment_id}, body.razorpay_signature, secret)

    if(xx) {
        // Update payment status
        const updatedPayment = await Payment.findOneAndUpdate({
            oid: body.razorpay_order_id
        },{
            done: true
        },{new: true});

        

        return NextResponse.redirect(`${process.env.URL}/${updatedPayment.to_user}?paymentdone=true`)
    } else {
        return NextResponse.error("Payment verification failed")
    }
}