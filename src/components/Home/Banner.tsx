import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

import SearchBar from "./Seacrchform";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: false,
        });
      }, []);
    
    return (
        <div className=" " id="top">
           
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div
                            className="relative w-full lg:h-[70vh] h-[80vh]   bg-cover bg-center bg-no-repeat lg:mt-5"
                            style={{ backgroundImage: "url('https://autobike.templaza.net/wp-content/uploads/2023/05/paul-kansonkho-1920.jpg')" }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40 dark:bg-black dark:opacity-70"></div>
                            <div className="relative lg:container mx-auto h-full flex items-center">
                                <div className="lg:max-w-[90%] lg:p-6 p-5">
                                    <div className="lg:w-[70%]">
                                        <h1 
                                            data-aos="fade-up"
                                        
                                        className=" btn-shine lg:text-xl text-sm font-extrabold text-center lg:text-left text-white dark:text-gray-300">
                                            Need Bike For Short Time?
                                        </h1>
                                        <h2 
                                            data-aos="fade-up"
                                            data-aos-delay="200"
                                            data-aos-duration="800"
                                          
                                        className="lg:text-5xl text-3xl font-extrabold text-center lg:text-left text-white dark:text-gray-300">
                                            Rent A Bike Now ! 
                                        </h2>
                                        <p 
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                            data-aos-duration="800"
                                          
                                        className="mt-4 text-lg text-center lg:text-left lg:w-[60%] text-white dark:text-gray-300">
                                            Please call us for any kind of bike renting, we have 100+ bikes available for renting. Feel free to call us about any kind of information.
                                        </p>

                                      
                                        <SearchBar
                                        data-aos="fade-up"
                                        data-aos-delay="600"
                                        />

                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="ml-[50px] text-white dark:text-gray-300" />
                <CarouselNext className="mr-[50px] text-white dark:text-gray-300" />
            </Carousel>
        </div>

    );
};

export default Banner;
