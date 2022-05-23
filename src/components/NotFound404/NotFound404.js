import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-wrap'>
      <img src={'https://i.ibb.co/DkMFWyP/oops.webp'} className="min-w-[300px]" alt="" />
      <Link to='/home'><button className='bg-purple-700 p-2 rounded text-gray-50'>Go to Home</button></Link>
    </div>
  )
}

export default NotFound404

