import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import './Home.css'
import Services from './Services/Services/Services'
import StatusSection from './StatusSection/StatusSection'

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <StatusSection />
            <Services></Services>
        </>
    )
}

export default Home
