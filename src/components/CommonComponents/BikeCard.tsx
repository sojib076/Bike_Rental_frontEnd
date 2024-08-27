
import { FC } from "react";
import { FaCog, FaMotorcycle, FaRegCalendarAlt, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BikeCardProps {
  id: string;
  bikeName: string;
  imgageurl: string;
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
  imgageurl,
  availability,
  description,
  brand,
  model, year, maxSpeed, price,  }
) => {


 

  return (
    <div className="  relative w-full lg:h-[580px] bg-black cursor-pointer lg:p-5 px-3">
      <div className="grid grid-cols-1 items-center px-5 pt-1">
        <h1 className="text-white lg:text-xl text-sm font-extrabold">{bikeName}</h1>
      </div>
      <div className="relative my-2 overflow-hidden">
        <img src={imgageurl} alt={bikeName} className="w-full" />
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
          description.length > 10
            ? description.substring(0, 50) + '...'
            : description
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
      <Link to={`/bike/${id}`} 
      
      className=" text-on-dark  bg-green-600  text-center text-sm font-bold py-2 px-4 
        smoothingAnimation hover:bg-green-700 transition-colors duration-300
      "
      > 
      
          View Details
        </Link>



      </div>
    </div>
  );
};

export default BikeCard;
