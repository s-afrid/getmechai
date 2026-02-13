import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold text-center my-7'>About Us</h1>
        <div className='flex flex-col items-center justify-center gap-5 text-center w-[90%]'>
            <p className='text-lg'>We are a team of passionate individuals who believe in the power of community and creativity. Our mission is to empower creators by providing them with a platform to connect with their fans and receive support for their work.</p>
            <p className='text-lg'>Our platform allows creators to share their projects, ideas, and content with their audience, while also giving fans the opportunity to contribute and show their appreciation. We believe that by fostering a supportive environment, we can help creators thrive and bring their visions to life.</p>
            <p className='text-lg'>Whether you're an artist, musician, writer, or any type of creator, we are here to help you connect with your fans and achieve your goals. Join us on this journey and let's create something amazing together!</p>
        </div>
    </div>
  )
}

export default About

export const metadata = {
  title: 'About Us'
}