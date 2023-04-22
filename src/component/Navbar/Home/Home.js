import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Home.css';
// import {hero1} from './../../../image/hero-page/hero-page1.jpg';
// import {hero2} from './../../../image/hero-page/hero-page2.jpg';
// import {hero3} from './../../../image/hero-page/hero-page3.jpg';

const Home = () => {
        const AutoplaySlider = withAutoplay(AwesomeSlider);
        return (
                <AutoplaySlider className="aws-btn"
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={6000}
                >
                        <div data-src="https://i.ibb.co/nwfJjG6/hero-page2.jpg" />
                        <div data-src="https://i.ibb.co/3W97rpw/hero-page1.jpg" />
                        <div data-src="https://i.ibb.co/FD5ScvY/hero-page3.jpg" />
                        {/* <div data-src={hero1} />
                        <div data-src={hero2} />
                        <div data-src={hero3} /> */}
                </AutoplaySlider>
        );
};

export default Home;