/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { useCreateRentalMutation, useGetSinglebikeReviewQuery } from "@/redux/api/api";
import { HeartIcon } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import CustomModal from "./CustomModal";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import renderStars from "@/lib/renderStars";
import PlusMinusButton from "@/components/Home/PlusMinusButton";


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
  const [count, setCount] = useState(1);

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


              <Button size="lg" variant="outline">
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
        <div className="  px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center dark:text-gray-200">Customer Reviews</h1>
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
                    {/* Placeholder for stars */}
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


          {reviews.map((review: any) => (
            <div key={review._id} className=" border dark:border-gray-300 border-black p-5 rounded-lg pb-8 mb-8">
              <div className="flex items-center mb-4 gap-5">

                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <p className="text-2xl text-gray-800">{review.userId.name[0].toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800
                  dark:text-gray-200
                  
                  ">{review.userId.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-200">{

                    new Date(review.date).toLocaleDateString()
                  }</p>
                </div>
              </div>
              <div className="mb-2 flex">

                {
                  renderStars(review.rating)

                }
              </div>

              <p className="text-gray-800 mb-4">{review.comment}</p>
              <div className="flex items-center text-sm text-gray-600">
                <p className="mr-2">Was this review helpful?</p>
                <button className="flex items-center mr-4 text-blue-600 hover:underline">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a2 2 0 012-2h6V4a2 2 0 114 0v4h6a2 2 0 110 4h-6v4a2 2 0 11-4 0v-4H4a2 2 0 01-2-2z" />
                  </svg>
                  Yes
                </button>
                <button className="flex items-center text-blue-600 hover:underline">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 10a2 2 0 01-2 2h-6v4a2 2 0 11-4 0v-4H2a2 2 0 110-4h6V4a2 2 0 114 0v4h6a2 2 0 012 2z" />
                  </svg>
                  No
                </button>
                <p className="ml-auto">{review.helpful} people found this helpful</p>
              </div>
            </div>
          ))}
        </div>
      </div>






    </div>
  );
};

export default BikeDetails;
