
import { FC } from "react";
import { FaCog, FaMotorcycle, FaRegCalendarAlt, FaTachometerAlt } from "react-icons/fa";

import { Button } from "../ui/button";
import { useCreateRentalMutation } from "@/redux/api/api";
import { toast } from "sonner";
import ButtonLoadin from "./ButtonLoadin";

interface BikeCardProps {
  id: string;
  bikeName: string;
  imageUrl: string;
  availability: boolean;
  description: string;
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  price: number;
  refetch: () => void;

}

const BikeCard: FC<BikeCardProps> = ({
  id,
  bikeName,
  imageUrl,
  availability,
  description,
  brand,
  model, year, maxSpeed, price ,refetch}
) => {


  const [createRental, { isLoading }] = useCreateRentalMutation();

  const handleRentNow = async () => {
    try {
        const result =  await createRental({
           bikeId: id ,
          startTime: new Date().toISOString(),
          
         });
          if(result.data){
            toast.success('Bike rented successfully');
             refetch()
          }else if (result.error){
            toast.error('Bike is Already Rented');
          }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  relative w-full lg:h-[580px] bg-black cursor-pointer lg:p-5 px-3">
      <div className="grid grid-cols-1 items-center px-5 pt-1">
        <h1 className="text-white lg:text-xl text-sm font-extrabold">{bikeName}</h1>
      </div>
      <div className="relative my-2 overflow-hidden">
        <img src={imageUrl} alt={bikeName} className="w-full" />
        <div className={`absolute top-[10%] right-[-65px] transform rotate-45 text-white text-sm font-bold py-2 px-20 text-center ${availability ? 'bg-green-600' : 'bg-red-600'}`}>
          {availability ? 'Available' : 'Not Available'}
        </div>
      </div>
      <p className="text-white lg:hidden ">{
        description.length > 35
          ? description.substring(0, 35) + '...'
          : description
      } 
      </p>
      <p className="text-white lg:flex hidden"> 
        {
          description
        }
      </p>
      <div className="bg-black text-white mt-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-4 items-center">
            <FaMotorcycle className="text-red-600 text-xl mr-2" />
            <div className="ml-[-10px]">
              <p className="font-bold">{brand}</p>
              <p className="text-gray-400 text-sm">Brand</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCog className="text-red-600 text-xl mr-3" />
            <div>
              <p className="font-bold">{model}</p>
              <p className="text-gray-400 text-sm">Model</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-red-600 text-xl mr-3" />
            <div>
              <p className="font-bold">{year}</p>
              <p className="text-gray-400 text-sm">Year</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaTachometerAlt className="text-red-600 text-xl mr-3" />
            <div>
              <p className="font-bold">{maxSpeed}</p>
              <p className="text-gray-400 text-sm">CC</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="bg-black text-white p-4 grid grid-cols-2 items-center">
        <div>
          <p className="text-gray-400 text-xs">Hourly Price</p>
          <p className="text-2xl font-bold">${price}</p>
          <p className="text-red-600 text-sm">Price can be changed</p>
        </div>
<Button onClick={handleRentNow} className=" text-on-dark  bg-red-400 text-center text-sm font-bold py-2 px-4">
  {
    isLoading ? <ButtonLoadin/> : 'Rent Now'
  }
</Button>



      </div>
    </div>
  );
};

export default BikeCard;
