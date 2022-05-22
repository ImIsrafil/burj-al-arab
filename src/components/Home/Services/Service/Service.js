import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, category, img, id } = service;
    return (
        <div className='w-full p-2 bg-slate-100 hover:scale-[1.07] duration-500'>
            <p className='w-9 h-9 text-2xl bg-yellow-600 text-gray-50 text-center'>{category[0].toUpperCase()}</p>
            <div className='w-full'>
                <Link to={`service/${id}`}><img className='w-full rounded' src={img} alt={name} /></Link>
            </div>
            <div className='p-3'>
                <h1 className='text-sm text-slate-800'>{name}</h1>
                <p className='text-xs text-gray-400'>${price}</p>
                <Link to={`booking/${id}`}><button className='bg-purple-800 text-base mt-2 text-gray-50 p-2 rounded'>Book Now</button></Link>
            </div>
        </div>
    )
}

export default Service
