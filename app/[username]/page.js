import React from 'react'

const Username = async ({params}) => {
let username = await params
username = username.username
  return (
    <div className=''>
      {username}
    </div>
  )
}

export default Username
