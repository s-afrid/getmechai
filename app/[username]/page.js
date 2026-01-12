import React from 'react'
import PaymentPage from '../components/PaymentPage'

const Username = async ({params}) => {
let getparams = await params
let username = getparams.username
  return (
    <>

    <PaymentPage username={username}/>
    </>
  )
}

export default Username
