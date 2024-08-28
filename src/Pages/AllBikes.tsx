/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetBikesQuery } from "@/redux/api/api";
import BikeCard from "@/components/CommonComponents/BikeCard";
import BikeCardSkeleton from "@/components/CommonComponents/BikeCardSkeleton";
import { FaSearch, FaMotorcycle } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { useState } from "react";


const BikeList = () => {
    const { data, isLoading, refetch } = useGetBikesQuery(undefined);
    const   bikes = data?.data;

   

    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        availability: "",
    });

    const handleFilterChange = (e:any) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const filteredBikes = bikes?.filter((bike:any) => {
        return (
            (filters.brand === "" || bike.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
            (filters.model === "" || bike.model.toLowerCase().includes(filters.model.toLowerCase())) &&
            (filters.availability === "" || bike.isAvailable.toString() === filters.availability)
        );
    });

    return (
        <div className="mt-20 dark:mt-[65px]  dark:bg-black bg-white ">
            <h1 className="lg:text-[40px] leading-[48px] font-semibold uppercase 
            dark:mt-0
            lg:mt-5 
            dark:text-white 
            headerColor text-center">
                Available Bikes
            </h1>

            {/* Modern Filter Section */}
            <div className="flex flex-col 
            md:flex-row justify-center lg:space-x-4 mt-4 lg:mt-10 flex-wrap 
            gap-4 w-[70%] mx-auto
            ">
                <div className="relative w-full md:w-auto">
                    <FaMotorcycle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="brand"
                        value={filters.brand}
                        onChange={handleFilterChange}
                        placeholder="Filter by Brand"
                        className="input-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative w-full md:w-auto">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="model"
                        value={filters.model}
                        onChange={handleFilterChange}
                        placeholder="Filter by Model"
                        className="input-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="relative w-[100%] md:w-auto">
                    <BsCheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <select
                        name="availability"
                        value={filters.availability}
                        onChange={handleFilterChange}
                        className="select-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All</option>
                        <option value="true">Available</option>
                        <option value="false">Unavailable</option>
                    </select>
                </div>
            </div>


            {/* Bike List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:p-20 p-5">
                {isLoading
                    ? Array(5)
                        .fill(0)
                        .map((_, index) => <BikeCardSkeleton key={index} />)
                    : filteredBikes?.map((bike:any) => (
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
                                            price={bike.pricePerHour} refetch={refetch}
                                        />
                    ))}
            </div>
        </div>
    );
};

export default BikeList;
