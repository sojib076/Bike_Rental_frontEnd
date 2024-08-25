
import { Link } from "react-router-dom";

const Welcome = () => {
    return (

    <div> 
        <div className="lg:px-20 p-5 font-[Oswald]  mt-5 lg:mt-0">
            <h1 className= " bgRed lg:w-fit w-[50%] lg:mx-0 mx-auto py-2 px-4 text-sm font-bold lg:text-left text-center  "> Welcome</h1>

            <div className="lg:flex  mt-5 items-center ">
                <div className="">
                    <h1 className="lg:text-[40px] text-xl lg:text-left text-center lg:leading-[48px] font-semibold uppercase 
                     headerColor  ">
                        Helps you to find your next motorbike easily
                    </h1>
                    <Link to={'about'} className="text-[#FFA15A] font-bold text-lg  w-fit hover:translate-y-[-10px]      hover:border-b-2 hover:border-red-500 
                smoothingAnimation h-7 lg:mt-5 lg:block hidden
                "> Learn  More About Us </Link>
                </div>

                <p className="lg:w-[80%] lg:h-[100px] text-justify lg:my-0 my-2  ">
                    Whether offering organized motorcycling trips to the most beautiful places in the world, or training on world championship circuits: BMW is your starting point for unique motorcycling experiences. On the other side of the world or right outside your front door. Always passionate, inspiring and outstanding in quality and service – just like you expect from BMW. Get ready to explore endless possibilities.
                </p>
                
                <Link to={'about'} className="text-[#FFA15A] font-bold text-lg  w-fit hover:translate-y-[-10px]     hover:border-b-2 hover:border-red-500 
                smoothingAnimation h-7  md:hidden  
                "> Learn  More About Us </Link>
            </div>
        </div>
        <img src="https://autobike.templaza.net/wp-content/uploads/2023/05/bg-video.jpg" alt="" />
    </div>
    );
};

export default Welcome;