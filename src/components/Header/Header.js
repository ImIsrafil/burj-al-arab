import React from 'react'
import { Link } from 'react-router-dom'
import useAllContext from '../../hooks/useAllContext'

const Header = () => {
    const { user, logout } = useAllContext();
    return (
        <div className=" max-w-screen-lg m-auto z-20 absolute top-6 left-0 right-0 drop-shadow-md hover:scale-[1.01] duration-500 transition-all">
            <nav className='flex rounded-md bg-white items-center w-full'>
                <ul className='flex px-8 gap-4 '>
                    <Link to="/home"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Home</li></Link>
                    <Link to="/lifestyle"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Life Style</li></Link>
                    <Link to="/mybooking"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>My Booking</li></Link>
                    <Link to="/stories"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Stories</li></Link>
                    {
                        !user.email ?
                            <Link to="/login"><li className=' text-slate-800 py-4  font-semibold hover:cursor-pointer'>Login</li></Link>
                            : <button className='bg-slate-800 p-2 text-gray-50' onClick={logout}>Logout</button>
                    }
                </ul>
                <div className='flex items-center justify-end justify-self-end'>
                    <h1>{user?.email}</h1>
                </div>
            </nav>
        </div>
    )
}

export default Header
