import React from 'react'
import useAllContext from '../../hooks/useAllContext'

const Login = () => {
    const { signInUsingGoogle } = useAllContext();
    return (
        <div className='pt-[100px] text-center'>
            <h1 className='text-center text-2xl'>Please Login</h1>
            <button className='bg-red-600 text-gray-50 p-2' onClick={signInUsingGoogle}>Google</button>
        </div>
    )
}

export default Login
