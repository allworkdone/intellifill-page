import { IoArrowBack } from "react-icons/io5";

const Button = () => {
    return (
        <>
            <div className="bg-white">
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    <button className="flex justify-center gap-2">
                        <IoArrowBack className="text-2xl text-black" />
                        <a href="#" className="font-bold">Back</a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Button;