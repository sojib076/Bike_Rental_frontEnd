import { FaMotorcycle } from "react-icons/fa";


const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <FaMotorcycle
              size={100}
                className=" text-green-600 animate-sideToSide"
            />
        </div>
    );
};

export default Loading;
