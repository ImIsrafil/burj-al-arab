import React, { createContext } from 'react'
import useServices from './../hooks/useServices';
import useFirebase from './../hooks/useFirebase';

export const Context = createContext({});

const AppContext = ({ children }) => {
    const { services } = useServices();
    const { signInUsingGoogle, user, logout } = useFirebase();
    return (
        <Context.Provider value={{ services, signInUsingGoogle, logout, user }}>
            {
                children
            }
        </Context.Provider>
    )
}

export default AppContext
