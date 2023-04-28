import React from 'react';
import './Contact.css'
import { GrLocation } from "react-icons/gr";
import { MdOutlineTouchApp, MdOutlineAttachEmail, MdOutlineContactless } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { Link } from 'react-router-dom';


const Contact = () => {
        return (
                <div>
                        <div
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="10"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className="contact-image">
                                <div className=' md:ml-8 ml-2 backdrop-blur-sm'>
                                        <div
                                                data-aos="fade-up"
                                                data-aos-offset="200"
                                                data-aos-delay="50"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-out"
                                                data-aos-mirror="true"
                                                data-aos-once="false"
                                                data-aos-anchor-placement="top-center"
                                                className='pt-5'>
                                                <h1 className='text-white text-5xl font-bold'>Get in touch</h1>
                                                <p className='text-white text-xl font-mono p-2 md:w-1/2 mt-6'>If you have and problem contact us. Or if you have any quarry touch us or sent email. Thank you very much.
                                                </p>
                                        </div>
                                </div>
                        </div>

                        {/* address section & social media link */}

                        <section className='address my-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-24'>

                                        <div
                                                data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                        >
                                                <p
                                                        className='flex items-center mb-8 sm:mb-0 font-bold tracking-widest text-2xl font-mono'><span className='px-2'><GrLocation /></span> Location</p>
                                        </div>
                                        <div
                                                data-aos="fade-left"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                                className='grid gap-y-2 sm:mx-0 mx-8'>
                                                <p className='font-bold tracking-widest text-2xl font-mono'>Bangladesh</p>
                                                <p className='font-medium text-base indent-2'>Road 10, Sector 10</p>
                                                <p className='font-medium text-base indent-2'>Uttara, Dhaka-1230</p>

                                        </div>
                                </div>
                                <hr className='my-4' />
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-24 my-4'>
                                        <div
                                                data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine">
                                                <p className='flex items-center font-bold tracking-widest text-2xl font-mono mb-8 sm:mb-0'> <span className='px-2'><MdOutlineTouchApp /></span> Get In Touch
                                                </p>
                                        </div>
                                        <div
                                                data-aos="fade-left"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                                className='grid gap-y-2 sm:mx-0 mx-8'>
                                                <p className='font-bold tracking-widest text-2xl font-mono'>Bangladesh</p>
                                                <p className='flex items-center font-medium text-base indent-2'><span><AiOutlinePhone /></span>+880 1728-370093</p>
                                                <p className='flex items-center font-medium text-base indent-2'><span><MdOutlineAttachEmail /></span>tarunnosocitey.bd@gmail.com</p>
                                        </div>
                                </div>
                                <hr className='my-4' />
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-24 my-4'>
                                        <div
                                                data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                        >
                                                <p className='flex items-center font-bold tracking-widest text-2xl font-mono mb-8 sm:mb-0'> <span className='px-2'><MdOutlineContactless /></span> Contact Us</p>
                                        </div>
                                        <div
                                                data-aos="fade-left"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine"
                                                className='grid gap-y-2 sm:mx-0 mx-8'>
                                                <p className='font-bold tracking-widest text-2xl font-mono'>Bangladesh</p>
                                                <p>
                                                        <Link to="https://www.facebook.com/tarunnosocietybd" className='flex items-center font-medium text-base indent-2 underline hover:no-underline hover:text-green-700'>
                                                                <span className='text-xl'><RiFacebookCircleLine />
                                                                </span>
                                                                Tarunno Society
                                                        </Link>
                                                </p>
                                                <p>
                                                        <Link to="https://wa.me/8801761208866/" className='flex items-center font-medium text-base indent-2 underline hover:no-underline hover:text-green-700'>
                                                                <span><ImWhatsapp />
                                                                </span>
                                                                What's App
                                                        </Link>
                                                </p>
                                        </div>
                                </div>

                        </section>

                        {/* contact form */}
                        <section
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="10"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center" className='rounded-xl contact-form my-6 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 bg-[#9bc4e2]'>
                                <form>
                                        <div className="space-y-12">
                                                <div className="border-b border-gray-900/10 pb-12">
                                                        <p className="mt-1 text-2xl font-semibold leading-6">Use a permanent address where you can receive mail.</p>

                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                <div className="sm:col-span-3">
                                                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                Full name
                                                                        </label>
                                                                        <div className="mt-2">
                                                                                <input
                                                                                        type="text"
                                                                                        name="first-name"
                                                                                        id="first-name"
                                                                                        autoComplete="given-name"
                                                                                        className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                />
                                                                        </div>
                                                                </div>

                                                                <div className="sm:col-span-3">
                                                                        <label htmlFor="contact-phone" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                Phone Number
                                                                        </label>
                                                                        <div className="mt-2">
                                                                                <input
                                                                                        type="text"
                                                                                        name="contact-phone"
                                                                                        id="contact-phone"
                                                                                        autoComplete="family-name"
                                                                                        className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                />
                                                                        </div>
                                                                </div>

                                                                <div className="sm:col-span-3">
                                                                        <label htmlFor="contact-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                Email address
                                                                        </label>
                                                                        <div className="mt-2">
                                                                                <input
                                                                                        id="contact-email"
                                                                                        name="contact-email"
                                                                                        type="email"
                                                                                        autoComplete="family-name"
                                                                                        className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                />
                                                                        </div>
                                                                </div>

                                                                <div className="sm:col-span-3">
                                                                        <label htmlFor="contact-subject" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                Subject
                                                                        </label>
                                                                        <div className="mt-2">
                                                                                <input
                                                                                        id="contact-subject"
                                                                                        name="contact-subject"
                                                                                        type="text"
                                                                                        autoComplete="email"
                                                                                        className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="border-b border-gray-900/10 pb-12">
                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                        <div className="col-span-full">
                                                                <label htmlFor="contact-message" className="block text-sm font-medium leading-6 text-gray-900">
                                                                        Message
                                                                </label>
                                                                <div className="mt-2">
                                                                        <textarea
                                                                                id="contact-message"
                                                                                name="contact-message"
                                                                                rows={3}
                                                                                className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                defaultValue={''}
                                                                        />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button
                                                        type="submit"
                                                        className="rounded-md bg-gray-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                                >
                                                        Sent
                                                </button>
                                        </div>
                                </form>
                        </section>

                </div>
        );
};

export default Contact;