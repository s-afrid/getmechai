"use client"
import React from 'react'
import Script from 'next/script'

const PaymentPage = ({username}) => {

    const pay = (amount, orderId)=> {
        var options = {
             "key": process.env.RAZORPAY_ID, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. 
    "currency": "INR",
    "name": "Get Me Chai", //your business name
    "description": "Test Transaction",
    "image": `${process.env.URL}/tea.png`,
    "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": `${process.env.URL}/api/razorpat`,
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
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


<div className='cover w-full relative'>
      <img className='object-cover w-full h-[350px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/812526/fb5da5add2ad4e41bd52d66611e0249c/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/1.JPG?token-hash=tWU41zyvAnKOa8SWj33OA0_nxl35cBso0nmDNC17CDI%3D&token-time=1770163200" alt="cover" />
      <div className="profilepic absolute top-[79%] right-[46%] rounded-lg">
        <img width={150} height={150} className='border-2 border-white rounded-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/812526/a6d12b5556f149d0aa37df5e76d2be6f/eyJoIjozNjAsInciOjM2MH0%3D/2.JPG?token-hash=EfcYEKOhWRY4UZ9xYojuo-qejcwYT_3WJwjvjWqtLvw%3D&token-time=1769040000" alt="profilepic" />
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
          <li className='mb-2 flex gap-2 items-center'>
            <img width={33} height={33} src="/avatar.gif" alt="avatar" />
            <span>
            Shubham donated <span className='font-bold'>$30</span> with a message "I support you"
            </span>
          </li>
          <li className='mb-2 flex gap-2 items-center'>
            <img width={33} height={33} src="/avatar.gif" alt="avatar" />
            <span>
            Shubham donated <span className='font-bold'>$30</span> with a message "I support you"
            </span>
          </li>
          <li className='mb-2 flex gap-2 items-center'>
            <img width={33} height={33} src="/avatar.gif" alt="avatar" />
            <span>
            Shubham donated <span className='font-bold'>$30</span> with a message "I support you"
            </span>
          </li>
          <li className='mb-2 flex gap-2 items-center'>
            <img width={33} height={33} src="/avatar.gif" alt="avatar" />
            <span>
            Shubham donated <span className='font-bold'>$30</span> with a message "I support you"
            </span>
          </li>
          
        </ul>
      </div>
      <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10 flex flex-col gap-2">
        <h2 className='text-2xl font-bold mb-5'>Make a Payment</h2>
        <div className='flex flex-col gap-2'>
          <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
          <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
        </div>
        <div className='flex gap-2'>
          <input type="text" className='w-1/2 p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
          <button type="button" className="text-white bg-gradient-to-br from-purple-800 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Pay</button>
        </div>
        {/* Or choose from these amounts */}
        <div className='flex gap-2 mt-5'>
          <button type="button" className="text-white bg-gradient-to-br from-purple-500 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Pay $10</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-500 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Pay $20</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-500 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Pay $20</button>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default PaymentPage
