/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/SearchResultsPage.js

import { useLoaderData } from "react-router-dom";
import BikeCard from "../CommonComponents/BikeCard";
type BikeDetailsType = {
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



const SearchResultsPage = () => {

    const loaderData = useLoaderData() as any;
    const data = loaderData.data as BikeDetailsType[];
  
 
    return (
        <div className="pb-20 mt-20 dark:bg-black dark:mt-16">
            <h1 className="lg:text-[40px]
             leading-[48px] font-semibold uppercase lg:mt-5
             text-center
             text-primary dark:text-white">
                    Available Bikes
                </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 lg:px-20 px-5">
                {data.map((bike: any) => (
                      <BikeCard
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
                     
                  />
                ))}
                </div>


        </div>
    );
};

export default SearchResultsPage;
