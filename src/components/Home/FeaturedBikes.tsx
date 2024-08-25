import { Tabs as ExternalTabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      
};



const FeaturedBikes = () => {
    const { data, isLoading,refetch } = useGetBikesQuery(undefined);
    const bikes = data?.data  as FeaturedBikesProps[];



    return (

        <div className="lg:p-20 p-2 font-[Oswald] overflow-hidden my-5">
            <ExternalTabs defaultValue="hero" className=" w-[100%]  mx-auto grid lg:grid-cols-2 ">
                <div>
                    <h1 className=" bgRed lg:w-fit w-[50%] lg:mx-0 mx-auto py-2 px-4 text-sm font-bold lg:text-left text-center  "> Featured Bikes</h1>
                    <h1 className="lg:text-[40px] leading-[48px] font-semibold uppercase  lg:mt-5 headerColor ">
                        Inventory Types
                    </h1>
                </div>
                <TabsList className="lg:w-full  flex justify-between  w-[70%] lg:mt-16 h-10 ">

                    <TabsTrigger value="hero">Hero</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="SuperBikes">SuperBikes</TabsTrigger>
                </TabsList>
                <div className="lg:mt-10 mt-5  ">


                    <TabsContent value="hero" className=" lg:w-[1100px] w-[78%]">
                        <Carousel  className="lg:w-full w-[90%] mx-auto    ">

                            <CarouselContent className="-ml-1">
                              {
                                isLoading
                                    ? Array(6)
                                        .fill(0)
                                        .map((_, index) => (
                                          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                            <BikeCardSkeleton />
                                          </CarouselItem>
                                        )) :
                                
                               bikes &&  bikes.map((bike )  => (
                                    <CarouselItem key={bike._id} className="pl-1 md:basis-1/2 lg:basis-1/3">

                                        <BikeCard
                                            id={bike._id}
                                            bikeName={bike.name}
                                            imageUrl={'https://autobike.templaza.net/wp-content/uploads/2023/04/baptiste-david-XfbjTaxSnuw-unsplash.jpg'}
                                            availability={bike.isAvailable}
                                            description={bike.description}
                                            brand={bike.brand}
                                            model={bike.model}
                                            year={bike.year}
                                            maxSpeed={bike.cc}
                                            price={bike.pricePerHour}  refetch={refetch} 
                                         
                                           
                                        />

                                    </CarouselItem>

                                ))
                              }
                            </CarouselContent>
                            <CarouselPrevious className="ml-7 lg:ml-3" />
                            <CarouselNext className="mr-7 lg:mr-3" />
                        </Carousel>
                    </TabsContent>
                    <TabsContent value="password" className=" lg:w-[1100px] w-[78%]">
                        <Carousel  className="lg:w-full w-[90%] mx-auto    ">

                            <CarouselContent className="-ml-1">
                               
                              {
                               bikes &&  bikes.map((bike )  => (
                                    <CarouselItem key={bike._id} className="pl-1 md:basis-1/2 lg:basis-1/3">

                                        <BikeCard
                                            id={bike._id}
                                            bikeName={bike.name}
                                            imageUrl={'https://autobike.templaza.net/wp-content/uploads/2023/04/baptiste-david-XfbjTaxSnuw-unsplash.jpg'}
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
                            <CarouselPrevious className="ml-7 lg:ml-3" />
                            <CarouselNext className="mr-7 lg:mr-3" />
                        </Carousel>
                    </TabsContent>


                </div>
            </ExternalTabs>


        </div>
    );
};

export default FeaturedBikes;