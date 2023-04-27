import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
        return (
                <div className='max-w-96 max-h-96'>
                        <div className='h-ful w-full py-28'>
                                <p className='text-gray-700 text-5xl font-black	text-center '>404</p>
                                <p className='text-gray-600 text-2xl text-center uppercase'>we are sorry, page not found!</p>
                                <p className='uppercase text-gray-600 text-center'>the page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                <div className='text-center my-8'>
                                        <Link
                                                to="/"
                                                type="submit"
                                                className=" rounded-md bg-gray-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                        >
                                                Back to Home
                                        </Link>
                                </div>
                        </div>
                </div>
        );
};

export default NotFound;