/* eslint-disable @typescript-eslint/no-explicit-any */
import BikeCard from "@/components/CommonComponents/BikeCard";
import BikeCardSkeleton from "@/components/CommonComponents/BikeCardSkeleton";
import { useGetBikesQuery } from "@/redux/api/api";
import {  useState } from "react";
import { FaMotorcycle,  FaSearch } from "react-icons/fa";

const BikeList = () => {
    const [filters, setFilters] = useState({
        brand: "",
        model: "",
        availability: "",
        recentlyAdded:"" ,
    });
    const [searchFilters, setSearchFilters] = useState(filters); 
    const [page, setPage] = useState(1);
    
    const limit = 10;

    const { data, isLoading, refetch } = useGetBikesQuery({
        page,
        limit,
        brand: searchFilters.brand,
        model: searchFilters.model,
        recentlyAdded: filters.recentlyAdded,

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

    const [activeTab, setActiveTab] = useState("All");
    

    const handleTabChange = (tab: string) => {
        
        setFilters({
            ...filters,
            recentlyAdded: tab === "Recently" ? "true" : "false", 
        });
        console.log(filters.recentlyAdded);

        setActiveTab(tab);
   
    };
    

    return (
        <div className="pb-10  dark:bg-black ">
            <h1 className="lg:text-[40px] leading-[48px] font-semibold uppercase dark:text-white text-center">
                Available Bikes
            </h1>

           <div className="lg:flex justify-between p-10"> 
            
           <div className="flex flex-col lg:w-[30%] bg-white dark:bg-gray-800 p-6 gap-6 h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">Filter Motorcycles</h3>

            {/* Filter Tabs */}
            <div className="flex justify-around mb-4">
                {["All", "Recently"].map((tab) => (
                    <button
                        key={tab}
                       
                        onClick={() => handleTabChange(tab)}

                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                            activeTab === tab
                                ? "bg-blue-900 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        } hover:bg-blue-500 hover:text-white`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Filter Inputs */}
            <div className="relative w-full md:w-auto">
                <FaMotorcycle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <input
                    type="text"
                    name="brand"
                    value={filters.brand}
                    onChange={handleFilterChange}
                    placeholder="Filter by Brand"
                    className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="relative w-full md:w-auto">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <input
                    type="text"
                    name="model"
                    value={filters.model}
                    onChange={handleFilterChange}
                    placeholder="Filter by Model"
                    className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                onClick={handleSearchClick}
                className="w-full md:w-64 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
                Search
            </button>

        
        </div>

           
          <div className="lg:w-[80%] mt-10 md:mt-10"> 

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10  lg:w-[90%] mx-auto ">
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
            <div className="flex justify-center mt-5">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="px-4 py-2 mx-2 bg-gray-200  hover:bg-gray-300 rounded

                     disabled:opacity-50
                     dark:bg-gray-800 dark:text-white
                     
                     "
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    
                    className="px-4 py-2 mx-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50
                    dark:bg-gray-800 dark:text-white
                    
                    
                    "
                >
                    Next
                </button>
            </div>
          
          </div>
           </div>

        
          
        </div>
    );
};

export default BikeList;
