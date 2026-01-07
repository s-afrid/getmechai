import React from 'react'

const Username = async ({params}) => {
let getparams = await params
let username = getparams.username
  return (
    <>

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
        <ul className='mx-5'>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
          <li className='mb-2'>Shubham donated $30 with a message ""</li>
        </ul>
      </div>
      <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">

      </div>
    </div>
    </div>
    </>
  )
}

export default Username
