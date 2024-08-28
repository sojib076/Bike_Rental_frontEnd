import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from "../ui/button";
import SearchBar from "./Seacrchform";

const Banner = () => {
    return (
        <div className="w-full lg:h-screen mx-auto" id="top">
            {/* Search Bar */}


            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div
                            className="relative w-full h-screen bg-cover bg-center bg-no-repeat lg:mt-5"
                            style={{ backgroundImage: "url('https://autobike.templaza.net/wp-content/uploads/2023/05/paul-kansonkho-1920.jpg')" }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40 dark:bg-black dark:opacity-70"></div>
                            <div className="relative lg:container mx-auto h-full flex items-center">
                                <div className="lg:max-w-[90%] lg:p-6">
                                    <div className="lg:w-[70%]">
                                        <h1 className="lg:text-xl text-sm font-extrabold text-center lg:text-left text-white dark:text-gray-300">
                                            Need Bike For Short Time?
                                        </h1>
                                        <h1 data-aos="fade-up" className="lg:text-left text-center lg:text-7xl text-4xl font-sans font-extrabold text-white dark:text-gray-100 mt-2">
                                            100 Bikes Available For Renting
                                        </h1>
                                        <p className="mt-4 text-lg text-center lg:text-left lg:w-[60%] text-white dark:text-gray-300">
                                            Please call us for any kind of bike renting, we have 100+ bikes available for renting. Feel free to call us about any kind of information.
                                        </p>

                                        {/* Search Bar with Button */}
                                        <SearchBar />

                                        <Button variant='outline' className="text-black dark:text-white hover:scale-90 w-fit smoothingAnimation mt-5 lg:ml-0 ml-[40%] border-black dark:border-white">
                                            Book Now
                                        </Button>
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
