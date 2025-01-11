/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { useAddtoFavoritesMutation, useCreateRentalMutation, useGetProfileQuery, useGetSinglebikeReviewQuery } from "@/redux/api/api";
import { HeartIcon } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import CustomModal from "./CustomModal";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";

import PlusMinusButton from "@/components/Home/PlusMinusButton";
import BikeSection from "@/components/CommonComponents/BikeSection";
import { ReviewSection } from "@/components/CommonComponents/ReviewSection";


type BikeDetailsType = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
  quantity: number;
};

const BikeDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loaderData = useLoaderData() as any;
  const bike = loaderData.data as BikeDetailsType;
  const { auth } = useAppSelector((state) => state.userAuth);
  const [createRental, { isLoading }] = useCreateRentalMutation();
  const [createfav , {isLoading:isFavLoading}] = useAddtoFavoritesMutation()
  const [count, setCount] = useState(1);
  const { data:adminData } = useGetProfileQuery(undefined);

  const handleRentNow = async (startTime: string) => {
    try {
      const result = await createRental({
        bikeId: bike._id,
        startTime,
        quantity: count,

      });
      if (result.data) {
        toast.success("Go to the payment page to complete the rental process.");
        window.location.href = result.data.data.payment_url;
      } else if (result.error) {
        toast.error("Bike is already rented");
      }
    } catch (error) {
      console.error("Error renting the bike:", error);
      toast.error("An error occurred during the rental process.");
    }
  };


  const { data, isLoading: reviewLoading } = useGetSinglebikeReviewQuery(bike._id)


  const reviews = data?.data || [];

  const handleAddToFav = async () => {
    try {
      const result = await createfav({
        bikeId: bike._id
      });
      if (result?.data?.success) {
        toast.success(result?.data?.message);
      }
    } catch (error) {
      console.error("Error adding to Favorites:", error);
      toast.error("An error occurred during the process.");
    }
  }

 


  return (
    <div className="px-4 py-12 md:py-16 lg:py-20 lg:px-20 lg:mt-10 mt-0 dark:bg-black  flex flex-col lg:gap-20 gap-10  ">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="mt-10 lg:mt-0">
          <img
            src="https://autobike.templaza.net/wp-content/uploads/2023/06/roadster.jpg"
            alt="Bike"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
            style={{ aspectRatio: "800/600", objectFit: "cover" }}
          />
        </div>
        <div className="order-1">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{bike.name}</h1>
            <p className="text-muted-foreground text-lg">{bike.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">Price per Hour</p>
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(bike.pricePerHour)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Availability</p>
                <p className="text-2xl font-bold">
                  {bike.isAvailable ? "Available" : "Not Available"}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Engine Displacement</p>
                <p className="text-2xl font-bold">{bike.cc + " cc"}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Year</p>
                <p className="text-2xl font-bold">{bike.year}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Model</p>
                <p className="text-2xl font-bold">{bike.model}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Brand</p>
                <p className="text-2xl font-bold">{bike.brand}</p>
              </div>
            </div>
            <div className="flex items-center gap-20 ">
              <p className="text-muted-foreground font-extrabold">

                Bike Quantity : {bike.quantity}
              </p>
              <PlusMinusButton count={count} setCount={setCount}
                max={bike.quantity}
                min={1}
              />
            </div>

            <div className="flex gap-4">
              {bike.quantity > 0 && auth ? (

                <Button size="lg" onClick={() => setIsModalOpen(true)}
                  disabled={isLoading}
                >
                  Rent Now
                </Button>


              ) :

                <Button size="lg">
                  {
                    auth ? "Bike is not available" : <Link to="/login">Login to Rent</Link>
                  }
                </Button>



              }


              <Button size="lg" variant="outline" onClick={handleAddToFav} disabled={isFavLoading || !auth || adminData?.data?.role==='admin'}>
                <HeartIcon className="w-5 h-5 mr-2" />
             Add to Favorites
              </Button>

            </div>

          </div>
        </div>

        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleRentNow}
          isLoading={isLoading}
        />
      </div>





      <div className=" ">
        <div className="  px-4 sm:px-6 lg:px-8 py-5">
          
          {
            reviewLoading && <>

              {

                Array.from({ length: 5 }).map((_, ) => <div className="border dark:border-gray-300 border-black p-5 rounded-lg pb-8 mb-8 animate-pulse">
                  <div className="flex items-center mb-4 gap-5">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"></div>
                    <div>
                      <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="mb-2 flex">
                   
                    <div className="flex space-x-1">
                      {[...Array(2)].map((_, index) => (
                        <div key={index} className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="ml-auto h-4 w-36 bg-gray-200 rounded"></div>
                  </div>
                </div>)



              }
            </>
          }


          

        </div>
        <ReviewSection reviews={reviews} />
        <BikeSection bikeid={bike._id} />
      </div>






    </div>
  );
};

export default BikeDetails;
