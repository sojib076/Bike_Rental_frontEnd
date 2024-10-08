import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import BikeCard from "../CommonComponents/BikeCard";
import { useGetBikesQuery } from "@/redux/api/api";
import BikeCardSkeleton from "../CommonComponents/BikeCardSkeleton";

type FeaturedBikesProps = {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
    isAvailable: boolean;
    cc: number;
    year: number,
    model: string,
    brand: string,
    imgageurl: string
};

const FeaturedBikes = () => {
    const { data, isLoading, refetch } = useGetBikesQuery(undefined);
    const bikes = data?.data as FeaturedBikesProps[];

    const availableBikes = bikes?.filter((bike) => bike.isAvailable);

    return (
        <div className="lg:p-20 dark:pt-10 p-2 font-[Oswald] overflow-hidden my-5 dark:my-0 bg-background dark:bg-dark-background">
            <div>
                <h1
                data-aos="fade-up"
                className="bg-green-500

                
                    
                lg:w-fit w-[50%] lg:mx-0  mx-auto py-2 px-4 text-sm font-bold lg:text-left text-center text-black dark:text-black">
                    Featured Bikes
                </h1>
                <h1 
                 data-aos="fade-up"
                 data-aos-delay="200"
                 data-aos-duration="800"
                className="lg:text-[40px] text-center text-2xl
                lg:text-left
                 leading-[48px] font-semibold uppercase lg:mt-5 text-primary dark:text-white
                lg:mb-7
                 ">
                    Available Bikes
                </h1>
            </div>

            <div>
                <Carousel className="lg:w-full w-[90%] mx-auto">
                    <CarouselContent className="-ml-1">
                        {isLoading
                            ? Array(3)
                                .fill(0)
                                .map((_, index) => (
                                    <CarouselItem 
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    
                                    
                                        key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                        <BikeCardSkeleton />
                                    </CarouselItem>
                                ))
                            : availableBikes && availableBikes.map((bike) => (
                                <CarouselItem
                                
                                
                                key={bike._id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <BikeCard
                                        id={bike._id}
                                        bikeName={bike.name}
                                        imgageurl={bike.imgageurl}
                                        availability={bike.isAvailable}
                                        description={bike.description}
                                        brand={bike.brand}
                                        model={bike.model}
                                        year={bike.year}
                                        maxSpeed={bike.cc}
                                        price={bike.pricePerHour}
                                        refetch={refetch}
                                    />
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className="ml-7 lg:ml-3 text-black dark:text-gray-300" />
                    <CarouselNext className="mr-7 lg:mr-3 text-black dark:text-gray-300" />
                </Carousel>
            </div>
        </div>
    );
};

export default FeaturedBikes;
