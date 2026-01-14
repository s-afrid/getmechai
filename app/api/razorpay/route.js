import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/ConnectDb";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)
    // Check razorpay id present in server
    let p = await Payment.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.error("Order id not found")
    }

    // verify the payment
    let xx = validatePaymentVerification({"order_id":body.razorpay_order_id, "razorpay_payment_id":body.razorpay_order_id, "razorpay_signature": body.razorpay_signature}, process.env.RAZORPAY_SECRET)

    if(xx) {
        // Update payment status
        const updatedPayment = await Payment.findOneAndUpdate({
            oid: body.razorpay_order_id
        },{
            done: true
        },{new: true});

        return NextResponse.redirect(`${process.env.URL}/${updatedPayment.to_username}?payment=true`)
    }
}