/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBikesQuery } from "@/redux/api/api";

import BikeChart from "./bikeChart";
import BikeRentalSkeleton from "@/components/CommonComponents/BikeRentalSkeleton";

const CardsAdmin = () => {
    const { data, isLoading, isError } = useGetAllBikesQuery(undefined, { refetchOnMountOrArgChange: true });

    if (isError) return <div className="flex items-center justify-center h-screen text-red-500 text-lg">Error loading data.</div>;
    if (isLoading) return <div className="">

    <BikeRentalSkeleton />
    </div>;

    const bikes = data?.data || [];
    const totalearn = bikes.reduce((acc: any, bike: { totalCost: any; }) => acc + (bike.totalCost || 0), 0);
    const totalBikes = bikes.reduce((acc: any, bike: { quantity: any; }) => acc + (bike.quantity || 0), 0);

   

    return (
      
            <div className="  text-center my-20">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Bike Rental Summary</h1>
                <div className="grid grid-cols-3 justify-center items-center gap-4">
                    <div className="  py-10   bg-gray-500/50 shadow-inner shadow-white text-center rounded-2xl hover:scale-110 transition-all ">
                       
                        <p className=" text-3xl font-[Cantarell]">Total Rented</p>
                        <h2 className="text-2xl font-semibold">{totalBikes}</h2>
                    </div>
                    <div className="  py-10   bg-gray-500/50 shadow-inner shadow-white text-center rounded-2xl ">
                       
                        <p className=" text-3xl font-[Cantarell]">Total Earn </p>
                        <h2 className="text-2xl font-semibold">{totalearn}</h2>
                    </div>
                    <div className=" py-10   bg-gray-500/50 shadow-inner shadow-white text-center rounded-2xl ">
                       
                        <p className=" text-3xl font-[Cantarell]">Total Bikes</p>
                        <h2 className="text-2xl font-semibold">{totalBikes}</h2>
                    </div>

                   
                    </div>

                    <BikeChart rentalDataArray={bikes} />

            
                
            </div>
      
    );
};

export default CardsAdmin;
