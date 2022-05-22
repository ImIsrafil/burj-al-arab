import React from 'react'
import { useParams } from 'react-router-dom'

const Booking = () => {
    const { bookingId } = useParams();
    return (
        <div>
            <h1 className='text-xl'>This is Booking{bookingId}</h1>
        </div>
    )
}

export default Booking
