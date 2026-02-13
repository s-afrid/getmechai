import React from 'react'
import PaymentPage from '../components/PaymentPage'
import { notFound } from "next/navigation"
import { fetchuser } from '../actions/useractions'

const Username = async ({params}) => {
let getparams = await params
let username = getparams.username
let user = await fetchuser(username)

if(!user) {
  return notFound()
} else {
 return (
    <>

    <PaymentPage username={username}/>
    </>
  )
}
 
}

export default Username

export async function generateMetadata({params}) {
  let getparams = await params
  let username = getparams.username
  return {
    title: `${username}`
  }
}