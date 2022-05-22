import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className=" max-w-screen-lg m-auto z-20 absolute top-6 left-0 right-0 drop-shadow-md hover:scale-[1.01] duration-500 transition-all">
            <nav>
                <ul className='flex px-8 gap-4 rounded-md bg-white'>
                    <Link to="/home"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Home</li></Link>
                    <Link to="/lifestyle"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Life Style</li></Link>
                    <Link to="/mybooking"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>My Booking</li></Link>
                    <Link to="/stories"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Stories</li></Link>
                    <Link to="/signup"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Sign Up</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header
