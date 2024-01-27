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
                </div>
            </div>
        </>
    )
};
export default Content;