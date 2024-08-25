import { ArrowBigRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";



const Categories = () => {
    return (
        <div className="sectionPadding font-[Oswald] mt-10">
          <h1 className= " bgRed lg:w-fit w-[50%] lg:mx-0 mx-auto py-2 px-4 text-sm font-bold lg:text-left text-center  "> Categories</h1>
            <div className="flex justify-between my-2 items-center ">
                <h1 className="lg:text-[40px] leading-[48px] font-semibold uppercase  headerColor mt-0 ">
                    Inventory Types
                </h1>
                <a href="#" className="text-[#FFA15A] font-bold text-lg lg:mt-5 hover:translate-y-[-10px]   flex  items-center hover:border-b-2 hover:border-red-500 
                transition-all duration-300 ease-in-out h-10
                ">View Inventory <span className="lg:mt-1 mt-2"><ArrowBigRight /></span></a>
            </div>

            <div className="lg:mt-10 mt-5">
                
                
                <Carousel className="lg:w-full w-[90%] mx-auto   " 
                
                >
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <div className="relative group w-full lg:h-[450px] h-[300px] bg-black cursor-pointer">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center smoothingAnimation group-hover:-translate-y-32"
                                            style={{
                                                backgroundImage: `url('https://autobike.templaza.net/wp-content/uploads/2023/06/roadster.jpg')`,
                                            }}
                                        />
                                        <h1 className="absolute left-28 bottom-4 text-white text-xl group-hover:text-red-500 group-hover:scale-150 smoothingAnimation">
                                            Road Ruster
                                        </h1>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-3" />
                    <CarouselNext  className="mr-3"/>
                </Carousel>

            </div>



        </div>
    );
};

export default Categories;