"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setshowdropdown] = useState(false)
  
  return (
    <nav className='bg-gray-900 text-white flex flex-col md:flex-row justify-center gap-5 md:justify-between py-3 md:py-0 px-4 md:h-16 items-center'>
        <Link href='/' className="logo font-bold text-lg flex gap-3 items-center justify-center">
          <span>
            <img width={44} src="/tea.png" alt="tea" />
          </span>
          
          Get Me Chai
          
          </Link>
        <div className='relative'>
  {session && (
    <>
      <button
        onClick={() => setshowdropdown(!showdropdown)}
        onBlur={() => setshowdropdown(false)} // ✅ Clean onBlur (no timeout needed)
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white cursor-pointer mx-2 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Welcome {session.user.name}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* ✅ Added onMouseDown here to prevent blur */}
      <div
        id="dropdown"
        onMouseDown={(e) => e.preventDefault()} 
        className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[20px] top-[50px] bg-white divide-y divide-gray-100 rounded-lg shadow w-30 dark:bg-gray-700 cursor-pointer`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <Link 
              href="/dashboard" 
              onClick={() => setshowdropdown(false)}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href={`/${session.user.username}`} 
              onClick={() => setshowdropdown(false)}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Your Page
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => {
                signOut();
                setshowdropdown(false); 
              }}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </>
  )}

  {!session && (
    <Link href={"/login"}>
      <button className='text-white cursor-pointer bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl me-2 b-2'>
        Login
      </button>
    </Link>
  )}
</div>
    </nav>
  )
}

export default Navbar