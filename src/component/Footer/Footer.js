import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { TbBrandGoogleHome } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineCopyright } from "react-icons/ai";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
        return (
                <div
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className='py-8 mt-10 bg-gray-400'>
                        <div
                                className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  content-center'>
                                <div class="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-8 items-center">
                                        {/* logo  */}
                                        <div>
                                                <div className="logo list-outside">
                                                        <div className='mb-2 max-w-[32%]'>
                                                                <Link to="/">
                                                                        <img src="https://i.ibb.co/y6dGbmP/trunno-logo.png" alt="your company logo" />
                                                                </Link>
                                                        </div>
                                                        <p className='font-sans hover:font-serif  text-justify'>An organization that aims to help disadvantaged and neglected youth.</p>
                                                </div>
                                        </div>
                                        {/* Quick link */}
                                        <div className='grid gap-y-4 lg:mx-auto'>
                                                <div className="herder">
                                                        <p className='font-mono text-xl font-bold tracking-wide'>Quick Link</p>
                                                </div>
                                                <div className='grid gap-y-3'>
                                                        <Link to='/about' className='flex items-center underline font-medium transition duration-700 hover:no-underline hover:text-green-700'><span><IoIosArrowForward /></span> About Us</Link>
                                                        <Link to='/' className='flex items-center underline font-medium transition duration-700 hover:no-underline hover:text-green-700'><span><IoIosArrowForward /></span>Causes</Link>
                                                        <Link to='/volunteer' className='flex items-center underline font-medium transition duration-700 hover:no-underline hover:text-green-700'><span><IoIosArrowForward /></span>Volunteer</Link>
                                                        <Link to='/contact' className='flex items-center underline font-medium transition duration-700 hover:no-underline hover:text-green-700'><span><IoIosArrowForward /></span>Contact</Link>
                                                </div>
                                        </div>
                                        {/* contact */}
                                        <div className='grid gap-y-4'>
                                                <div className="herder">
                                                        <p className='font-mono text-xl font-bold tracking-wide'>Contact Us</p>
                                                </div>
                                                <div className='grid gap-y-3'>
                                                        <p className='flex items-center font-medium'><span className='px-3'><TbBrandGoogleHome /></span>Road #10, Sector 10, Uttara, Dhaka-1230</p>
                                                        <p className='flex items-center  font-medium'><span className='px-3'><AiOutlinePhone /></span>+880 1728-370093</p>
                                                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmlkCMcQCNskWxlVCXTZkkRCsVsbWFTQQPBQZgXGzfqXctBCKlZJHZcLmsKXsDJcntPQCP' className='flex items-center font-medium underline transition duration-700 hover:no-underline hover:text-green-700'><span className='px-3'><MdOutlineAttachEmail /></span>tarunnosocitey.bd@gmail.com</a>
                                                </div>
                                        </div>
                                        {/* gallery */}
                                        <div>
                                                <div className='grid gap-y-4'>
                                                        <div className="herder">
                                                                <p className='font-mono text-xl font-bold tracking-wide'>Gallery</p>
                                                        </div>
                                                        <div class="grid grid-cols-3 gap-8 items-center">
                                                                <div className='shadow-lg shadow-white-500 cursor-pointer'>
                                                                        <img src="https://i.ibb.co/D42bKDR/gallery1-5.jpg" alt="image" />
                                                                </div>
                                                                <div className='shadow-lg shadow-white-500 cursor-pointer'>
                                                                        <img src="https://i.ibb.co/sySQ5nn/gallery1-4.jpg" alt="image" />
                                                                </div>

                                                                <div className='shadow-lg shadow-white-500 cursor-pointer'>
                                                                        <img src="https://i.ibb.co/QmvzCqB/gallery1-2.jpg" alt="image" />
                                                                </div>
                                                                <div className='shadow-lg shadow-white-500 cursor-pointer'>
                                                                        <img src="https://i.ibb.co/F39wsHx/gallery1-1.jpg" alt="image" />
                                                                </div>
                                                                <div className='shadow-lg shadow-white-500 cursor-pointer'>
                                                                        <img src="https://i.ibb.co/VHkKHwL/gallery1-6.jpg" alt="image" />
                                                                </div>
                                                                <div className='shadow-lg shadow-white-500 cursor-pointer'>
                                                                        <img src="https://i.ibb.co/42sPmMq/gallery1-3.jpg" alt="image" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <hr className='my-4' />
                        <div className='flex items-center justify-center'>
                                <p
                                        className='flex items-center font-medium'>copyright <span><AiOutlineCopyright /></span> tarunnosocitey2023</p>
                        </div>
                </div>
        );
};

export default Footer;