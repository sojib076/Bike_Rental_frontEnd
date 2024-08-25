import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";



import { Button } from "../ui/button";


const Banner = () => {
    return (
        <div className="w-[100%] lg:h-[100vh]  mx-auto " id="top" >
            <Carousel>
                <CarouselContent >
                    <CarouselItem>



                        <div
                            className=" bg-white font-[Oswald] relative w-full h-[100vh] bg-cover bg-center  bg-no-repeat lg:mt-5"
                            style={{ backgroundImage: "url('https://autobike.templaza.net/wp-content/uploads/2023/05/paul-kansonkho-1920.jpg')" }}
                        >
                            <div className="absolute inset-0 bg-black  opacity-40"></div>
                            <div className="relative lg:container mx-auto h-full flex items-center">
                                <div className="lg:max-w-[90%]  lg:p-6">
                                    <div className="lg:w-[70%] ">
                                        <h1 className="lg:text-xl text-sm font-extrabold text-center lg:text-left">                         Need Bike For Short Time ?</h1>
                                        <h1 data-aos="fade-up" className=" 
                                        lg:text-left text-center lg:text-7xl text-4xl font-sans font-extrabold
                                         text-on-dark  mt-2  ">
                                            100 Bikes Avaiable For Renting
                                        </h1>

                                        <p className="mt-4 text-lg text-center lg:text-left lg:w-[60%] text-on-dark">
                                            Plase Call Us for any kind of bike renting  , we have 100+ bikes avaiable for renting .Feel free to call us about any kind of information
                                        </p>
                                        

                                            <Button variant='outline' className="text-black hover:scale-90 w-fit smoothingAnimation mt-5 lg:ml-0 ml-[40%] ">Book Now</Button>
                                           
                                     
                                    </div>
                                </div>
                            </div>
                        </div>




                    </CarouselItem>






                </CarouselContent>

                <CarouselPrevious className=" ml-[50px]" />
                <CarouselNext className=" mr-[50px] " />
            </Carousel>


        </div>
    );
};

export default Banner;