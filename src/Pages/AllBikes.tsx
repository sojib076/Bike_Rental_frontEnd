/* eslint-disable @typescript-eslint/no-explicit-any */
import BikeCard from "@/components/CommonComponents/BikeCard";
import BikeCardSkeleton from "@/components/CommonComponents/BikeCardSkeleton";
import { useGetBikesQuery } from "@/redux/api/api";
import { useState } from "react";
import { FaMotorcycle, FaSearch } from "react-icons/fa";

const BikeList = () => {
    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        availability: "",
    });
    const [searchFilters, setSearchFilters] = useState(filters); 
    const [page, setPage] = useState(1);
    console.log(page);
    const limit = 10;

    const { data, isLoading, refetch } = useGetBikesQuery({
        page,
        limit,
        brand: searchFilters.brand,
        model: searchFilters.model,
    });

    const bikes = data?.data?.bikes;
   
    
    const currentPage = data?.data?.currentPage || 1;
    const totalPages = data?.data?.totalPages || 1;

    const handleFilterChange = (e: any) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearchClick = () => {
        setSearchFilters(filters);
        setPage(1); 
        refetch();
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setPage((prev) => prev + 1);
            refetch();
        }
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setPage((prev) => Math.max(prev - 1, 1));
            refetch();
        }
    };

    return (
        <div className="pb-10  dark:bg-black">
            <h1 className="lg:text-[40px] leading-[48px] font-semibold uppercase dark:text-white text-center">
                Available Bikes
            </h1>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-center gap-4 w-[70%] mx-auto mt-4 lg:mt-10">
                <div className="relative w-full md:w-auto">
                    <FaMotorcycle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="brand"
                        value={filters.brand}
                        onChange={handleFilterChange}
                        placeholder="Filter by Brand"
                        className="input-filter
                         w-full md:w-64 
                         
                         pl-10 pr-4 py-2 border border-gray-300
                         dark:bg-gray-800 dark:text-white
                          rounded-lg focus:ring-2
                           focus:ring-blue-500 
                            
                           "
                           

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
                        className="input-filter     dark:bg-gray-800 dark:text-white w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={handleSearchClick}
                    className="px-4 py-2 bg-blue-500     dark:bg-gray-800 dark:text-white text-white rounded-md hover:bg-blue-600"
                >
                    Search
                </button>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-20 p-5">
                {isLoading
                    ? Array(5)
                          .fill(0)
                          .map((_, index) => <BikeCardSkeleton key={index} />)
                    : bikes?.map((bike: any) => (
                          <BikeCard
                              key={bike._id}
                              id={bike._id}
                              bikeName={bike.name}
                              imgageurl={bike.imgageurl}
                              quantity={bike.quantity}
                              description={bike.description}
                              brand={bike.brand}
                              model={bike.model}
                              year={bike.year}
                              maxSpeed={bike.cc}
                              price={bike.pricePerHour}
                              refetch={refetch}
                          />
                      ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mb-5">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    
                    className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BikeList;
