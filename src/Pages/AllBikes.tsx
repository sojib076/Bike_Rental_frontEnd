
import { useGetBikesQuery } from "@/redux/api/api";
import BikeCard from "@/components/CommonComponents/BikeCard";
import BikeCardSkeleton from "@/components/CommonComponents/BikeCardSkeleton";


const BikeList = () => {
    const { data, isLoading ,refetch} = useGetBikesQuery(undefined);
    const bikes = data?.data;


    return (
        <div className="mt-20">
            <h1 className="lg:text-[40px] leading-[48px] font-semibold uppercase  lg:mt-5 headerColor text-center ">
                Available Bikes
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 p-20">
                {
                    isLoading
                        ? Array(3)
                            .fill(0)
                            .map((_, index) => (
                                <BikeCardSkeleton key={index} />
                            ))
                        : bikes?.map((bike) => (
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
                                price={bike.pricePerHour} refetch={refetch}
                            />
                        ))
                }
            </div>




        </div>
    );
};

export default BikeList;
