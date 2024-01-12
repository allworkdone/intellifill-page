import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>


            <footer className="bg-white ">
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="/" class="flex items-center">
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    <Image
                                        src="/logo.png"
                                        alt="logo"
                                        width={200}
                                        height={200}

                                    />
                                    <ul className="flex mt-2 ml-4">
                                        <li className="pr-4">
                                            <FaFacebook className="text-black " />

                                        </li>
                                        <li className="pr-4">
                                            <FaInstagram className="text-black " />

                                        </li>
                                        <li className="pr-4">
                                            <FaXTwitter className="text-black " />
                                        </li>
                                        <li className="pr-4">
                                            <FaLinkedin className="text-black " />
                                        </li>


                                    </ul>

                                </span>

                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="">
                                        <a href="#" class="hover:underline">About Us</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline">Sitemap</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline">Credits</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline">Help Center</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline">Community Guidelines</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li >
                                        <a href="#" class="hover:underline ">Accessibility</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline ">Mobile</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline ">Marketing</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline ">Advertising</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline ">Report Issue</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" class="hover:underline">Trust &amp; Safety</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="flex flex-col sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            All trademarks are the property of their respective owners.
                        </span>
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved © 2024 Intellifill Tech Pvt. Ltd
                        </span>

                    </div>

                </div>
            </footer>

        </div>
    );
}

export default Footer;