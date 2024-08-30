/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { useCreateRentalMutation } from "@/redux/api/api";
import { HeartIcon } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import CustomModal from "./CustomModal"; // Adjust the path if needed
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";

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
};

const BikeDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loaderData = useLoaderData() as any;
  const bike = loaderData.data as BikeDetailsType;
  const { auth } = useAppSelector((state) => state.userAuth);
  const [createRental,{isLoading}] = useCreateRentalMutation();

  const handleRentNow = async (startTime: string) => {
    try {
      const result = await createRental({
        bikeId: bike._id,
        startTime,
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

  return (
    <div className="px-4 py-12 md:py-16 lg:py-20 lg:px-20 lg:mt-10 mt-0 dark:bg-black  ">
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
            <div className="flex gap-4">
              {bike.isAvailable && auth ?(
    
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
      </div>

      {/* Custom Modal */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleRentNow}
        isLoading={isLoading}
      />
    </div>
  );
};

export default BikeDetails;
