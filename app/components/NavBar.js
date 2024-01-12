import React from 'react';
import Image from 'next/image';
import { RiSearch2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <header className='absolute z-50 justify-center w-full align-middle duration-300 bg-white left-1 top-1 navbar border-stroke'>
                <div className='container relative max-w-[1400px] ml-20'>
                    <div className='flex items-center justify-between ml-2'>
                        <a href="/" className='block max-w-[145px] sm:max-w-[180px] m-8 mt-8 '>
                            <Image
                                src="/logo.png"
                                alt='logo'
                                className='block'
                                height={300}
                                width={300}
                            />
                        </a>
                        <div className='relative justify-between hidden menu-wrapper lg:flex'>
                            <nav className='fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none lg:dark:bg-transparent'>
                                <ul className='items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10'>
                                    <li className='menu-item'><a href='/' className='inline-flex items-center text-lg font-medium text-black hover:text-primary dark:hover:text-primary lg:py-7'>Home</a></li>
                                    <li><a href='/' className='inline-flex items-center text-lg font-medium text-black hover:text-primary dark:hover:text-primary lg:py-7'>Request</a></li>
                                    <li><a href='/' className='inline-flex items-center text-lg font-medium text-black hover:text-primary dark:hover:text-primary lg:py-7'>FAQ</a></li>
                                    <li><a href='/' className='inline-flex items-center text-lg font-medium text-black hover:text-primary dark:hover:text-primary lg:py-7'>About Us</a></li>
                                    <li><a href='/' className='inline-flex items-center text-lg font-medium text-black hover:text-primary dark:hover:text-primary lg:py-7'>Contact Us</a></li>
                                    <li className='border-black'>
                                        <div className='flex justify-center px-2 py-1 text-gray-800 bg-white border border-blue-500 rounded-3xl focus:outline-none'>
                                            <RiSearch2Line className='w-6 h-6' />
                                            <input type="text" placeholder="Enter your text" className='px-2 ml-5 focus:outline-none' />
                                        </div>
                                    </li>
                                    <li>
                                        <FaRegBell className='ml-5 text-blue-500 h-7 w-7' />
                                    </li>
                                    <li>
                                        <Image
                                            src={"/profile.jpg"}
                                            alt='profile'
                                            width={20}
                                            height={20}
                                            className='object-contain w-20 h-20 rounded-full over'

                                        />
                                    </li>
                                </ul>
                                <div>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
