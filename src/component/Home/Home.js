import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import VolunteerData from '../Hooks/VolunteerData';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Home = () => {
        const AutoplaySlider = withAutoplay(AwesomeSlider);
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
                        <AutoplaySlider className="aws-btn"
                                play={true}
                                cancelOnInteraction={false}
                                interval={6000}
                        >
                                <div data-src="https://i.ibb.co/nwfJjG6/hero-page2.jpg" />
                                <div data-src="https://i.ibb.co/3W97rpw/hero-page1.jpg" />
                                <div data-src="https://i.ibb.co/FD5ScvY/hero-page3.jpg" />
                        </AutoplaySlider>
                        <section className="section">
                                <div className="title">
                                        <h2 className='h2'>
                                                <span>/</span>Volunteers
                                        </h2>
                                </div>
                                <div className="section-center">
                                        {volunteers.map((person, personIndex) => {
                                                const { id, image, name, title, quote } = person;
                                                let position = "nextSlide";
                                                if (personIndex === index) {
                                                        position = "activeSlide";
                                                }
                                                if (
                                                        personIndex === index - 1 ||
                                                        (index === 0 && personIndex === volunteers.length - 1)
                                                ) {
                                                        position = "lastSlide";
                                                }
                                                return (
                                                        <article key={id} className={position}>
                                                                <img src={image} alt={name} className="person-img" />
                                                                <h4 className='h4'>{name}</h4>
                                                                <p className="title p">{title}</p>
                                                                <p className="text p">{quote}</p>
                                                                <FaQuoteRight className="icon" />
                                                        </article>
                                                );
                                        })}
                                        <button className="prev" onClick={() => setIndex(index - 1)}>
                                                <FiChevronLeft />
                                        </button>
                                        <button className="next" onClick={() => setIndex(index + 1)}>
                                                <FiChevronRight />
                                        </button>
                                </div>
                        </section>
                </div>
        );
};

export default Home;