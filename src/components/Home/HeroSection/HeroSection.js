import React from 'react'
import './HeroSection.css';
import heroVideo from '../../../assets/pexels-yash-rao-8464868.mp4';

const HeroSection = () => {
    return (
        <div className='max-w-screen-xl m-auto h-[70vh] relative'>
            <video autoPlay loop className="w-full h-full object-cover">
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="content absolute top-0 left-0 h-full w-full z-10 flex items-center justify-center">
                <div className='text-center'>
                    <h1 className='text-gray-200 tablet:text-4xl lg:text-7xl  transition-all font-extrabold block mb-5'>Burj Al Arab</h1>
                    <p className=' text-white lg:text-3xl tablet:text-2xl transition-all font-bold block'>A Global Icon Of Arabian Luxury</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
