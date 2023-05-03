import React from 'react';
import './Volunteer.css'
import { useState } from 'react';
import { useEffect } from 'react';
import VolunteerData from '../Hooks/VolunteerData';

const Volunteer = () => {

        const [volunteers] = VolunteerData();
        const [index, setIndex] = useState(0);

        useEffect(() => {
                const lastIndex = volunteers.length - 1;
                if (index < 0) {
                        setIndex(lastIndex);
                }
                if (index > lastIndex) {
                        setIndex(0);
                }
        }, [index, volunteers]);

        useEffect(() => {
                let slider = setInterval(() => {
                        setIndex(index + 1);
                }, 3000);
                return () => clearInterval(slider);
        }, [index]);
        return (
                <div>
                        <div className="volunteer-image">
                                <div className=' md:ml-8 ml-2'>
                                        <div className='pt-5'>
                                                <h1 className='text-gray-700 text-right pr-8 text-2xl font-bold'>Volunteer </h1>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Volunteer;