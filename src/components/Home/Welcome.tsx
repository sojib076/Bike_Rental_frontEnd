import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className=" dark:bg-black dark:text-white text-black dark:py-10">
            <div className="lg:px-20 p-5 font-[Oswald] mt-5 dark:mt-0 lg:mt-0">
                <h1 className="bgRed 
                lg:w-fit w-[50%] lg:mx-0 mx-auto py-2 px-4 text-sm font-bold lg:text-left text-center
                 dark:text-white text-black">
                    Why Choose Us
                </h1>

                <div className="lg:grid grid-cols-2 mt-5 items-center">
                    <div className="">
                        <h1 className="lg:text-[40px] text-xl lg:text-left text-center lg:leading-[48px] font-semibold uppercase dark:text-white">
                            Helps you to find your next motorbike easily
                        </h1>
                    </div>
                    <p className="lg:w-[80%] lg:h-[90px] text-justify lg:my-0 my-2 dark:text-white">
                        We have the best price to help you find bikes easily. We have the best prices on the market and are the best in the industry.
                    </p>
                </div>
                <div>
                    {/* List of our best keys */}
                    <div className="grid grid-cols-3 lg:gap-5 gap-4 mt-5">
                        <div className="text-center border-2 border-white rounded-md hover:scale-90 cursor-pointer smoothingAnimation bg-black text-white">
                            <p>Best Price</p>
                        </div>
                        <div className="text-center border-2 border-white rounded-md hover:scale-90 cursor-pointer smoothingAnimation bg-black text-white">
                            <p>100+ Bikes</p>
                        </div>
                        <div className="text-center border-2 border-white rounded-md hover:scale-90 cursor-pointer smoothingAnimation bg-black text-white">
                            <p>Best Quality</p>
                        </div>
                    </div>
                </div>

                <Link
                    to={'/about'}
                    className="text-[#FFA15A] font-bold text-lg w-fit hover:translate-y-[-10px] hover:border-b-2 hover:border-red-500 smoothingAnimation h-7 lg:mt-5 lg:block hidden"
                >
                    Learn More About Us
                </Link>
            </div>
            <img src="https://autobike.templaza.net/wp-content/uploads/2023/05/bg-video.jpg" alt="" />
        </div>
    );
};

export default Welcome;
