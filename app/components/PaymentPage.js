"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { initiate, fetchpayments, fetchuser } from '../actions/useractions'
import { useSearchParams, useRouter } from 'next/navigation'
import { ToastContainer, toast, Bounce } from 'react-toastify'

const PaymentPage = ({username}) => {

  const { data: session } = useSession();

  let [paymentform, setPaymentform] = useState({})
  const [currentUser, setcurrentUser] = useState({})
  const [Payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  let router = useRouter();

  useEffect(()=>{
    getData();
  },[])

  useEffect(()=>{
      if (searchParams.get("paymentdone") == "true") {
        toast.success('Payment has been made', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce
});
      }
      router.push(`/${username}`)
  },[])

    const handlechange = (e)=>{
      setPaymentform({...paymentform, [e.target.name]: e.target.value})
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)

        console.log(u, dbpayments)
    }

  const pay = async (amount)=> {
      // Get payment ID
  
      let a = await initiate(amount, username, paymentform)
      let orderId = a.id
        var options = {
      "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. 
    "currency": "INR",
    "name": "Get Me Chai", //your business name
    "description": "Test Transaction",
    "image": `${process.env.NEXT_PUBLIC_URL}/tea.png`,
    "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
        };

    var rzp1 = new Razorpay(options);
    rzp1.open();
    
    }
  return (
    <>

      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>

      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


<div className='cover w-full relative'>
      <img className='object-cover w-full h-[350px]' src={currentUser.coverpic} alt="cover" />
      <div className="profilepic absolute top-[79%] right-[46%] overflow-hidden rounded-full bg-white size-32">
        <img className='border-2 border-white rounded-full size-32 object-contain' src={currentUser.profilepic} alt="profilepic" />
      </div>
    </div>

    <div className="info flex items-center justify-center my-24 flex-col gap-2">
      <div className='font-bold text-lg'>
      @{username}
      </div>
      <div className='text-slate-300'>
        Creating Guitar lessons, YouTube videos, music, and more!
      </div>
      <div className='text-slate-300'>
        16,004 members • 758 posts
      </div>

      <div className="payment flex gap-3 w-[80%] mt-11">
      <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
        {/* Show list of all the supports as a leaderboard */}
        <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
        <ul className='mx-5 text-lg'>
          {Payments.length == 0 && <li>No payments yet</li>}
          {Payments.map((p,i) => {
              return (
                <li key={i} className='mb-2 flex gap-2 items-center'>
            <img width={33} height={33} src="/avatar.gif" alt="avatar" />
            <span>
            {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"
            </span>
          </li>
              )
            })}
        </ul>
      </div>
      <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10 flex flex-col gap-2">
        <h2 className='text-2xl font-bold mb-5'>Make a Payment</h2>
        <div className='flex flex-col gap-2'>
          <input onChange={handlechange} value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' name="name" />
          <input onChange={handlechange} value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' name="message" />
        </div>
        <div className='flex gap-2'>
          <input onChange={handlechange} value={paymentform.amount} type="text" className='w-1/2 p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' name="amount" />
          <button type="button" onClick={()=>{pay(parseFloat(paymentform.amount)*100)}} className="text-white bg-linear-to-br from-purple-800 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 disabled:bg-slate-600 disabled:from-slate-600 disabled:to-slate-400" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4}>Pay</button>
        </div>
        {/* Or choose from these amounts */}
        <div className='flex gap-2 mt-5'>
          <button type="button" onClick={()=>{pay(1000)}} className="text-white bg-linear-to-br from-purple-500 to-blue-300 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Pay ₹10</button>
          <button type="button" onClick={()=>{pay(2000)}} className="text-white bg-linear-to-br from-purple-500 to-blue-300 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Pay ₹20</button>
          <button type="button" onClick={()=>{pay(3000)}} className="text-white bg-linear-to-br from-purple-500 to-blue-300 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Pay ₹30</button>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default PaymentPage
