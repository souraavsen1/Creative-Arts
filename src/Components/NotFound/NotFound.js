import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col items-center w-7/12 py-24 mx-auto mt-28 rounded-md bg-gray-200'>
                <h1 className='text-6xl text-green-500 font-bold pb-8 animate-bounce'>Oops!</h1>
                <h1 className='text-lg text-gray-900'>404! The Page you ar looking for is not found.</h1>
                <Link to='/' className='bg-green-500 py-2 px-5 mt-6 rounded-full text-white font-semibold'>Go back to Home</Link>
            </div>
        </div>
    )
}

export default NotFound
