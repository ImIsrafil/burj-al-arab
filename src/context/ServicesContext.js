import React, { createContext } from 'react'
import useServices from '../hooks/useServices';

export const SVSContext = createContext([]);

const ServicesContext = ({ children }) => {
    const { services } = useServices();
    return (
        <SVSContext.Provider value={{ services }}>
            {children}
        </SVSContext.Provider>
    )
}

export default ServicesContext