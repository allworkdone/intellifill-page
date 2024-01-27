import { IoIosArrowBack, IoIosArrowForward, IoMdWallet } from "react-icons/io";
import { IoBookmarkOutline,IoPeopleSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
    return (
        <>
            <div className="bg-[#F8F9FA]">
                <div className="p-4 py-2 mx-auto w-full max-w-screen-xl lg:py-4">
                    {/* Card Layout */}
                    <div className="py-2 mx-auto main-div bg-gradient-to-r from-black to-gray-800 h-[180px] rounded-xl flex justify-between shadow-lg">
                        <div className="button-div-back my-auto">
                            <button className="bg-white h-16">
                                <IoIosArrowBack className="text-2xl" />
                            </button>
                        </div>
                        <div className="image-div my-auto flex xl:gap-16 lg:gap-16 sm:gap-8">
                            <div className="image-1 ">
                                <Image
                                    src={"/image-12.png"}
                                    width={102}
                                    height={102}
                                />
                            </div>
                            <div className="image-2 flex flex-col justify-center items-center uppercase">
                                <h1 className="text-white font-bold text-5xl ">Gate</h1>
                                <h3 className="text-white text-3xl">Result</h3>
                                <div className="flex flex-row justify-center items-center">
                                    <hr className=" bg-white h-[1px] sm:mx-auto w-6" />
                                    <div className="bg-white rounded-lg h-4 w-10 justify-center flex item-center">
                                        <h6 className="text-black text-xs font-bold">2022</h6>
                                    </div>
                                    <hr className="bg-white h-[1px] sm:mx-auto w-6" />
                                </div>
                            </div>
                        </div>
                        <div className="button-div-fwd my-auto">
                            <button className="bg-white h-16">
                                <IoIosArrowForward className="text-2xl" />
                            </button>
                        </div>
                    </div>
                    {/* Recommended exam section layout part-1*/}
                    <div className="py-2 lg:py-4 mx-auto flex justify-between text-2xl font-bold">
                        <h3 className="text-black">Recommended exams</h3>
                        <h3 className="text-blue-500 hover:text-blue-900 transition delay-150"><Link href={"/homepage"}>See All</Link></h3>
                    </div>
                    {/* Recommended exam section layout all cards part-2*/}
                    <div className="card-main-div h-[300px] w-auto flex gap-4 space-x-4 overflow-x-auto scrollbar-hide">
                        {/* First card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image">
                                        <Image
                                            src={"/JEE.svg"}
                                            alt="JEE"
                                            height={70}
                                            width={70}
                                            className="border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">JEE Mains 2023</h1>
                                        <h3 className="text-sm text-gray-500">National Testing Agency</h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 20 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1200</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">IIT</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image h-[70px]">
                                        <Image
                                            src={"/upsc.svg"}
                                            alt="UPSC"
                                            height={70}
                                            width={70}
                                            className="h-full border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">Civil Services 2023</h1>
                                        <h3 className="text-sm text-gray-500">Union Public Service Commission</h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="" />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 15 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1500</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* third card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image h-[70px]">
                                        <Image
                                            src={"/ssc.svg"}
                                            alt="JEE"
                                            height={70}
                                            width={70}
                                            className="h-full border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">SSC CGL 2023</h1>
                                        <h3 className="text-sm text-gray-500">Staff Selection </h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="" />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 10 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1000</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* fourth card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image h-[70px]">
                                        <Image
                                            src={"/ssc.svg"}
                                            alt="JEE"
                                            height={70}
                                            width={70}
                                            className="h-full border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">SSC CGL 2023</h1>
                                        <h3 className="text-sm text-gray-500">Staff Selection </h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="" />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 15 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1500</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* fifth card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image h-[70px]">
                                        <Image
                                            src={"/ssc.svg"}
                                            alt="JEE"
                                            height={70}
                                            width={70}
                                            className="h-full border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">SSC CGL 2023</h1>
                                        <h3 className="text-sm text-gray-500">Staff Selection </h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="" />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 15 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1500</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* sixth card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image h-[70px]">
                                        <Image
                                            src={"/ssc.svg"}
                                            alt="JEE"
                                            height={70}
                                            width={70}
                                            className="h-full border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">SSC CGL 2023</h1>
                                        <h3 className="text-sm text-gray-500">Staff Selection </h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="" />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 15 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1500</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* seventh card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image h-[70px]">
                                        <Image
                                            src={"/ssc.svg"}
                                            alt="JEE"
                                            height={70}
                                            width={70}
                                            className="h-full border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">SSC CGL 2023</h1>
                                        <h3 className="text-sm text-gray-500">Staff Selection </h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="" />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 15 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1500</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* eighth card */}
                        <div className="card-1 h-[280px] w-[370px] border border-black rounded-xl flex-shrink-0">
                            <div className="1st-section flex justify-between py-4 px-4">
                                <div className="Image-and-text flex gap-4">
                                    <div className="image h-[70px]">
                                        <Image
                                            src={"/ssc.svg"}
                                            alt="JEE"
                                            height={70}
                                            width={70}
                                            className="h-full border border-black rounded-xl"
                                        />
                                    </div>
                                    <div className="texts- py-2">
                                        <h1 className="text-lg font-bold">SSC CGL 2023</h1>
                                        <h3 className="text-sm text-gray-500">Staff Selection </h3>
                                    </div>
                                </div>
                                <div className="icon py-2">
                                    <IoBookmarkOutline className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <div className="px-4">
                                <hr className="" />
                            </div>
                            <div className="2nd-section flex justify-center items-center my-2">
                                <div>
                                    <div className="icon-and-text">
                                        <ul className="people flex flex-row gap-2">
                                            <li>
                                                <IoPeopleSharp className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">
                                                More than 15 Lakhs
                                            </li>
                                        </ul>
                                        <ul className="cost flex flex-row gap-2">
                                            <li>
                                                <IoMdWallet className="text-4xl"/>
                                            </li>
                                            <li className="text-xl py-1">&#8377; 1500</li>
                                        </ul>
                                    </div>
                                    <div className="section-card">
                                        <ul className="flex flex-row gap-2 my-2 text-gray-500">
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">Engineering</li>
                                            <li className="border border-gray-500 rounded-xl py-2 px-2">PCM</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="flex flex-row text-blue-500">
                                            <li className="text-lg font-bold">View details</li>
                                            <li>
                                                <IoIosArrowForward className="text-xl my-1"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Recent exam section layout buttons tags part-1*/}
                    <div className="py-2 lg:py-2 mx-auto flex justify-between text-2xl font-bold">
                        <h3 className="text-black">Recent exams</h3>
                        <h3 className="text-blue-500 hover:text-blue-900 transition delay-150"><Link href="/homepage">See All</Link></h3>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Content;