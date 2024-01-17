import React from 'react';
import Image from 'next/image';
import { RiSearch2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <header className="bg-white">
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    <div className='flex flex-row gap-6 justify-between'>
                        <div logo>
                            <Image src="/logo.png" alt="logo" width={150} height={50} />
                        </div>
                        <div lists>
                            <ul className="text-lg my-2 gap-4">
                                <li className="inline-block mr-4">
                                    <a href="#" >Home</a>
                                </li>
                                <li className="inline-block mr-4">
                                    <a href="#" >Resul</a>
                                </li>
                                <li className="inline-block mr-4">
                                    <a href="#" >FAQ</a>
                                </li>
                                <li className="inline-block mr-4">
                                    <a href="#" >About</a>
                                </li>
                                <li className="inline-block mr-4">
                                    <a href="#" >Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div searchbar>
                            <div className="flex items-center justify-center w-full h-10 pl-3 pr-2 my-1 text-gray-500 border rounded-full bg-gray-50 border-blue-500 focus:outline-none focus:border-blue-500">
                                <button type="submit" className="inline-flex items-center justify-center w-10 h-10 text-gray-400 hover:bg-gray-100 focus:outline-none">
                                    <RiSearch2Line className="w-5 h-5" />
                                </button>
                                <input type="search" name="search" placeholder="Search exams here" className="w-full pl-2 bg-transparent outline-none" />
                            </div>
                        </div>
                        <div bell>
                            <button className="flex justify-center my-3 gap-2">
                                <FaRegBell className="text-2xl text-blue-500" />
                            </button>
                        </div>
                        <div profile>
                            <button className="flex justify-center gap-2 ">
                                <Image src="/profile.png" alt="profile" width={50} height={50} className='rounded-full'/>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
