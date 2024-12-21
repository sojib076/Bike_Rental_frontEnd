import { FC } from "react";
import { FaCog, FaMotorcycle, FaRegCalendarAlt, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface BikeCardProps {
  id: string;
  bikeName: string;
  imgageurl: string;
  quantity: number;
  description: string;
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  price: number;
  refetch?: () => void;
}

const BikeCard: FC<BikeCardProps> = ({
  id,
  bikeName,
  imgageurl,
  quantity,
  description,
  brand,
  model,
  year,
  maxSpeed,
  price,
}) => {



  return (
    <div className="relative lg:max-w-[420px] pb-2 lg:h-[550px] bg-black cursor-pointer lg:p-5 px-3 
    border border-gray-800 dark:border-gray-700
     rounded-lg shadow-lg 
     transition-transform duration-300 
     transform hover:scale-105
    
    ">
      <div className="grid grid-cols-1 items-center px-5 pt-1">
        <h1 className="text-white dark:text-gray-100 lg:text-xl text-sm font-extrabold">{bikeName}</h1>
      </div>
      <div className="relative my-2 overflow-hidden">
        <img src={imgageurl} alt={bikeName} className=" 
        w-full h-[180px] object-cover rounded-lg 
        shadow-lg transition-transform duration-300 transform hover:scale-105
        
        " />
        <div className={`absolute top-[10%] right-[-65px] transform rotate-45 text-white text-sm font-bold py-2 px-20 text-center ${quantity > 0 ? 'bg-green-600' : 'bg-red-600'}`}>
          {quantity > 1 ? 'Available' : 'Not Available'}
        </div>
      </div>
      <p className="text-white dark:text-gray-300 lg:hidden">
        {description.length > 35 ? description.substring(0, 35) + '...' : description}
      </p>
      <p className="text-white dark:text-gray-300 lg:flex hidden">
        {description.length > 50 ? description.substring(0, 50) + '...' : description}
      </p>
      <div className="bg-black  text-white dark:bg-gray-800 dark:text-gray-300 mt-2 
        p-5
      ">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-4 items-center">
            <FaMotorcycle className="text-red-600 text-xl mr-2" />
            <div className="ml-[-10px]">
              <p className="font-bold text-white dark:text-gray-100">{brand}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">Brand</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCog className="text-red-600 text-xl mr-3" />
            <div>
              <p className="font-bold text-white dark:text-gray-100">{model}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">Model</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-red-600 text-xl mr-3" />
            <div>
              <p className="font-bold text-white dark:text-gray-100">{year}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">Year</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaTachometerAlt className="text-red-600 text-xl mr-3" />
            <div>
              <p className="font-bold text-white dark:text-gray-100">{maxSpeed}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">CC</p>
            </div>
          </div>
        </div>
      </div>
      <hr className=" mt-1 rounded-full border-gray-200 dark:border-gray-700" />
      <div className="bg-black dark:bg-gray-800 text-white dark:text-gray-300 p-4 grid grid-cols-2 items-center">
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-xs">Hourly Price</p>
          <p className="text-2xl font-bold">${price}</p>
          <p className="text-red-600 text-sm">Price can be changed</p>
        </div>
        <Link
          to={`/bike/${id}`}

          className="bg-green-600 hover:bg-green-700 text-center text-sm font-bold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          View Details
        </Link>
      </div>


    </div>
  );
};

export default BikeCard;
