import Image from 'next/image'
import { MdShare } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegCalendarAlt, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoIosPeople, IoIosArrowForward } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { RiWallet3Fill } from "react-icons/ri";


const Content = () => {
    return (
        <>
            <div className="">
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    {/* Parent grid */}
                    <div className="grid gap-10 grid-auto-fit-xs">

                        {/* First Grid */}
                        <div className="col-span-3 row-span-2 bg-white shadow-2xl rounded-xl">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <ul className='flex flex-row gap-2'>
                                        <li className='px-4 mt-1'>
                                            <Image
                                                src={"/NTA.svg"}
                                                height={30}
                                                width={30}
                                                className='rounded-full'

                                            />
                                        </li>
                                        <li >
                                            <div className='text-2xl font-bold'>JEE Mains 2023</div>
                                            <div className='px-2 text-sm font-bold text-blue-500'>National Testing Agency</div>

                                        </li>
                                    </ul>
                                </div>
                                <div className='flex flex-row gap-2 px-4 py-2 text-3xl font-bold'>
                                    <a href=''>
                                        <IoBookmarkOutline className='text-blue-500' />
                                    </a>
                                    <a href=''>
                                        <MdShare />
                                    </a>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div className='my-2'>
                                    <ul className='flex flex-row gap-4 mx-4'>
                                        <li>
                                            <FaRegCalendarAlt className='text-2xl text-blue-500' />
                                        </li>
                                        <li className='text-sm font-bold'>
                                            Exam Date: 23 March 2023
                                        </li>
                                    </ul>
                                </div>
                                <div className='my-2'>
                                    <ul className='flex flex-row gap-4 mx-4'>
                                        <li>
                                            <IoIosPeople className='text-2xl text-blue-500' />
                                        </li>
                                        <li className='text-sm font-bold'>
                                            Applicants: 20Lakh+
                                        </li>
                                    </ul>
                                </div>
                                <div className='mx-4'>
                                    <hr className="px-2 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-2" />
                                </div>
                                <div className='flex justify-between mx-4 my-4 '>
                                    <div className='mx-2 my-2 text-gray-400'>
                                        Posted 50 days ago, ends on 31 Dec
                                    </div>
                                    <button className='px-4 py-3 text-sm bg-blue-500 rounded-3xl'>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Second Grid */}
                        <div className="col-span-3 xl:col-start-1 xl:row-start-3 md:col-start-1 md:row-start-3 bg-white shadow-2xl xl:row-span-5 rounded-xl">
                            <div className='mx-4 my-4'>
                                <div>
                                    <h1 className='text-xl font-bold'>Exam Description:</h1>
                                    <ul className='mx-8 my-2 list-disc'>
                                        <li>
                                            <p>
                                                JEE Main is a standardized test conducted across different states in India.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                The exam is held at an undergraduate level to offer admissions to some of the best engineering and techinical institutions that are Government funded or privately-owned.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                The exam conducting authority considers the best NTA score in preparing the ranks/merits list.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Eligibility:</h1>
                                    <ul className='mx-8 my-2 list-disc'>
                                        <li>
                                            <p>
                                                Age Limit - No age limit
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Qualifying Exam - Class 12/Equivalent Exam
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Percentage - At least 75% in class 12/equivalent exam
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Year of Passing - 2021, 2022 or appearing in 2023
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Number of attempts - Candidate can appear in JEE Main for 3 consecutive years after passing their class 12/equivalent exam
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Important Details:</h1>
                                    <ul className='mx-8 my-2 list-disc'>
                                        <li>
                                            <p>
                                                JEE Main 2023 January Session: NTA released the JEE Main 2023 session 1 will be conducted between 24th January and 1st February 2023.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                JEE Main 2023 April Session: NTA released the JEE Main 2023 session 1 will be conducted between 1st April, 2023 and 15th April, 2023.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='mx-4 my-4'>
                                    <hr className="px-2 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-2" />
                                </div>
                                <div className='flex flex-row justify-between mx-4'>
                                    <ul className='flex flex-row gap-2 text-3xl'>
                                        <li className='text-blue-500'><a href=''><FaFacebookSquare /></a></li>
                                        <li className='text-white bg-black rounded-lg '><a href=''><FaXTwitter /></a></li>
                                        <li className='text-blue-500'><a href=''><FaLinkedin /></a></li>
                                    </ul>
                                    <div className='text-blue-500'><a href=''>Report this job</a></div>
                                </div>

                            </div>
                        </div>

                        {/* Third Grid */}
                        <div className="col-span-2 row-span-4 xl:col-start-4 xl:row-start-1 bg-white shadow-2xl rounded-xl sm:col-start-4 md:col-start-1">
                            <div className='mx-4 my-4'>
                                <h1 className='font-bold text-2xl'>Exams you might be intrested in</h1>
                                <div className='px-2 py-4'>
                                    <div className='justify-between'>
                                        <div className='flex flex-row'>
                                            <div>
                                                <Image
                                                    src={"/bharat-university.svg"}
                                                    alt='bharat-university'
                                                    height={30}
                                                    width={30}
                                                    className='py-2'
                                                />
                                            </div>
                                            <div className='px-4'>
                                                <div className='text-lg font-bold'>BEEE 2023</div>
                                                <div className='text-xs font-bold text-gray-400'>Bharat university</div>
                                            </div>
                                        </div>
                                        <div className='px-2 py-2 '>
                                            <ul className='flex flex-row gap-4'>
                                                <li className='text-xl'><IoIosPeople /></li>
                                                <li className='text-sm font-bold text-gray-400'>More than 5 Lakhs</li>
                                            </ul>
                                        </div>
                                        <div className='px-2 justify-between flex'>
                                            <ul className='flex flex-row gap-5'>
                                                <li><RiWallet3Fill /></li>
                                                <li className='text-sm text-gray-400 font-bold'>&#8377; 1600</li>
                                            </ul>
                                            <div>
                                                <ul className='flex  text-blue-500 gap-2'>
                                                    <li className='text-sm shadow-sm font-bold'>View Details</li>
                                                    <li className='text-lg'><IoIosArrowForward /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='mx-4 my-4'>
                                            <hr className="px-2 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-2" />
                                        </div>
                                    </div>
                                    <div className='justify-between'>
                                        <div className='flex flex-row'>
                                            <div>
                                                <Image
                                                    src={"/TSCHE.svg"}
                                                    alt='TSCHE logo'
                                                    height={30}
                                                    width={30}
                                                    className='py-2'
                                                />
                                            </div>
                                            <div className='px-4'>
                                                <div className='text-lg font-bold'>TS-EAMCET 2023</div>
                                                <div className='text-xs font-bold text-gray-400'>TSCHE</div>
                                            </div>
                                        </div>
                                        <div className='px-2 py-2 '>
                                            <ul className='flex flex-row gap-4'>
                                                <li className='text-xl'><IoIosPeople /></li>
                                                <li className='text-sm font-bold text-gray-400'>More than 15 Lakhs</li>
                                            </ul>
                                        </div>
                                        <div className='px-2 justify-between flex'>
                                            <ul className='flex flex-row gap-5'>
                                                <li><RiWallet3Fill /></li>
                                                <li className='text-sm text-gray-400 font-bold'>&#8377; 1000</li>
                                            </ul>
                                            <div>
                                                <ul className='flex  text-blue-500 gap-2'>
                                                    <li className='text-sm shadow-sm font-bold'>View Details</li>
                                                    <li className='text-lg'><IoIosArrowForward /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='mx-4 my-4'>
                                            <hr className="px-2 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-2" />
                                        </div>
                                    </div>
                                    <div className='justify-between'>
                                        <div className='flex flex-row'>
                                            <div>
                                                <Image
                                                    src={"/SRMJEEE.svg"}
                                                    alt='SRMJEE logo'
                                                    height={30}
                                                    width={30}
                                                    className='py-2'
                                                />
                                            </div>
                                            <div className='px-4'>
                                                <div className='text-lg font-bold'>SRMJEE 2023</div>
                                                <div className='text-xs font-bold text-gray-400'>SRMST</div>
                                            </div>
                                        </div>
                                        <div className='px-2 py-2 '>
                                            <ul className='flex flex-row gap-4'>
                                                <li className='text-xl'><IoIosPeople /></li>
                                                <li className='text-sm font-bold text-gray-400'>More than 10 Lakhs</li>
                                            </ul>
                                        </div>
                                        <div className='px-2 justify-between flex'>
                                            <ul className='flex flex-row gap-5'>
                                                <li><RiWallet3Fill /></li>
                                                <li className='text-sm text-gray-400 font-bold'>&#8377; 1000</li>
                                            </ul>
                                            <div>
                                                <ul className='flex  text-blue-500 gap-2'>
                                                    <li className='text-sm shadow-sm font-bold'>View Details</li>
                                                    <li className='text-lg'><IoIosArrowForward /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='mx-4 my-4'>
                                            <hr className="px-2 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-2" />
                                        </div>
                                    </div>
                                    <div className='justify-between'>
                                        <div className='flex flex-row'>
                                            <div>
                                                <Image
                                                    src={"/VITJEE.svg"}
                                                    alt='VITJEE logo'
                                                    height={30}
                                                    width={30}
                                                    className='py-2'
                                                />
                                            </div>
                                            <div className='px-4'>
                                                <div className='text-lg font-bold'>VITJEE 2023</div>
                                                <div className='text-xs font-bold text-gray-400'>Vellore Institute of Technology</div>
                                            </div>
                                        </div>
                                        <div className='px-2 py-2 '>
                                            <ul className='flex flex-row gap-4'>
                                                <li className='text-xl'><IoIosPeople /></li>
                                                <li className='text-sm font-bold text-gray-400'>More than 10 Lakhs</li>
                                            </ul>
                                        </div>
                                        <div className='px-2 justify-between flex'>
                                            <ul className='flex flex-row gap-5'>
                                                <li><RiWallet3Fill /></li>
                                                <li className='text-sm text-gray-400 font-bold'>&#8377; 1500</li>
                                            </ul>
                                            <div>
                                                <ul className='flex  text-blue-500 gap-2'>
                                                    <li className='text-sm shadow-sm font-bold'>View Details</li>
                                                    <li className='text-lg'><IoIosArrowForward /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='mx-4 my-4'>
                                            <hr className="px-2 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-2" />
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <button href="#" className='rounded-3xl'>
                                                <div className='my-2 mx-4'>
                                                    <div className='text-lg font-bold text-blue-500'>View All</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Content;