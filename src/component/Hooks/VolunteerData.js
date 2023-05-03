import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const VolunteerData = () => {
        const [volunteers, setVolunteers] = useState([]);
        useEffect(() => {
                fetch("https://raw.githubusercontent.com/mostakshahariyar/tarunno-application-data/main/data.JSON")
                .then(res => res.json())
                .then(data => setVolunteers(data))
        }, [])
        console.log(volunteers);
        return ([volunteers]);
};

export default VolunteerData;