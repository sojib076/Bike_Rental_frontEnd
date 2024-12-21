/* eslint-disable @typescript-eslint/no-explicit-any */


import { Button } from "@/components/ui/button";
import { useGetfavBikesQuery, useRemoveFavbikeMutation } from "@/redux/api/api";

import { Bike, Calendar, Gauge, DollarSign } from 'lucide-react'
import { Link } from "react-router-dom";
import { toast } from "sonner";


const Favoritebikes = () => {
  
    const  {data,isLoading ,refetch}= useGetfavBikesQuery(undefined,{
      refetchOnFocus: true ,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true,
    });
    const [removeFavbike ,{isLoading:removeLoading}] = useRemoveFavbikeMutation();

  
    const bikes = data?.data;

    const handleDelete =async (bikeId:string) => {

    const result = await  removeFavbike(bikeId)
  
    if(result?.data){
      refetch(); 
      toast.success("Bike removed from favorites") 
    }

    
    

    };

  
   
    return (
        <div>
            <section className="py-16  dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Favorite Rides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isLoading ? Array(6).fill(null) : bikes).map((bike:any, index:number) => (
            <div
              key={bike?._id || index}
              className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="h-48 bg-gray-200 relative overflow-hidden ">
                    <img
                      src={bike.bikeId.imgageurl}
                      alt={bike.bikeId.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <span
                      className={`absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full dark:text-gray-900 ${
                        bike.bikeId.quantity > 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-gree-800'
                      }`}
                    >
                      {bike.bikeId.quantity > 0 ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-200">{bike.bikeId.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 dark:text-gray-200">{
                      
                    // make this short 
                    bike.bikeId.description > 20 ? bike.bikeId.description.substring(0,20) : bike.bikeId.description
                      }</p>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-200">
                        <Bike className="w-5 h-5 mr-2 text-blue-900" />
                        <span>{bike.bikeId.brand} {bike.bikeId.model}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-200">
                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                        <span>{bike.bikeId.year}</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-200">
                        <Gauge className="w-5 h-5 mr-2 text-blue-900" />
                        <span>{bike.bikeId.cc} CC</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-200">
                        <DollarSign className="w-5 h-5 mr-2 text-blue-900" />
                        <span>${bike.bikeId.pricePerHour}/hour</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10" > 
                    <Button className="w-full">
                     <Link to={`/bike/${bike?.bikeId?._id}`}> View Details</Link>
                    </Button>
                    <Button className="w-full bg-red-500"
                    
                    onClick={() => handleDelete(bike?.bikeId?._id)}
                    disabled={removeLoading}
                    >
                    Remove 
                    </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Favoritebikes;