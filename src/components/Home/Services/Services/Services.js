import React from 'react';
import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const { services } = useServices();

    return (
        <div className='max-w-screen-xl m-auto'>
            <div className='p-9'>
                <h1 className='text-purple-700 text-3xl font-bold text-center'>TO OUR SPECIAL GUEST</h1>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    )
}

export default Services
