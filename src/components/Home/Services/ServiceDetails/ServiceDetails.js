import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAllContext from '../../../../hooks/useAllContext';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const { services } = useAllContext();
    const service = services.find(item => item.id === serviceId);
    const { name, img, price, id } = service;

    return (
        <div className=' w-full pt-[100px] px-5 '>
            <div className='flex flex-wrap gap-5 justify-center'>
                <img className='rounded-md' src={img} alt="" />
                <div>
                    <h1 className='text-4xl'>{name}</h1>
                    <p>${price}/night</p>
                    <Link to={`/booking/${id}`}><button className='bg-purple-900 p-2 rounded text-gray-50'>Book Now</button></Link>
                </div>
            </div>
            <div className=''>
            </div>
        </div>
    )
}

export default ServiceDetails