import React from 'react'
import { FaBed } from 'react-icons/fa'

const StatusSection = () => {
    return (

        <div className=' max-w-screen-xl m-auto relative top-[-30px] flex tablet:flex-wrap justify-center gap-8 mb-8'>
            <div style={{ background: 'none' }} className='flex justify-center bg-slate-200 hover:scale-[1.1] duration-500 transition-all'>
                <div className='p-4 bg-slate-900'><FaBed className='text-slate-300' fontSize="20px"></FaBed></div>
                <div className='border-slate-500 border-[1px] border-solid'></div>
                <div className=' bg-gray-300 p-4'><span className='text-slate-600'>1000+ VIP Bed Rooms</span></div>
            </div>
            <div className='bg-transparent flex justify-center bg-slate-200 hover:scale-[1.1] duration-500 transition-all'>
                <div className='p-4 bg-slate-900'><FaBed className='text-slate-300' fontSize="20px"></FaBed></div>
                <div className='border-slate-500 border-[1px] border-solid'></div>
                <div className='bg-gray-300 p-4'><span className='text-slate-600'>1000+ VIP Bed Rooms</span></div>
            </div>
            <div className='bg-transparent flex justify-center bg-slate-200 hover:scale-[1.1] duration-500 transition-all'>
                <div className='p-4 bg-slate-900'><FaBed className='text-slate-300' fontSize="20px"></FaBed></div>
                <div className='border-slate-500 border-[1px] border-solid'></div>
                <div className='bg-gray-300 p-4'><span className='text-slate-600'>1000+ VIP Bed Rooms</span></div>
            </div>
            <div className='absolute top-0 left-0 w-full h-40 origin-left -skew-y-[7deg] bg-gradient-to-r from-pink-500 to-purple-500 -z-20 '></div>
        </div>
    )
}

export default StatusSection
