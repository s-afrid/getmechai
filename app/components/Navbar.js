"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
        <div className="logo font-bold text-lg flex gap-3 items-center justify-center">
          <span>
            <img width={44} src="/tea.png" alt="tea" />
          </span>
          
          Get Me Chai
          
          </div>
        <div>
          {session && <Link href={"/dashboard"}>
          <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl me-2 b-2'>
            Login
          </button>
          </Link>}
          <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-3xl me-2 b-2'>
            Login
          </button>
          </Link>
          
        </div>
    </nav>
  )
}

export default Navbar