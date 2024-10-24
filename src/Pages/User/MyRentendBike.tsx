import { useGetAllRentalsQuery } from "@/redux/api/api";
import { Rental } from "./Rentals";


const MyRentendBike = () => {
    const { data = [], isLoading } = useGetAllRentalsQuery(undefined,
        { refetchOnMountOrArgChange: true }

    );
    const paidRentals = data?.data?.filter((rental: Rental) => rental.totalPaid);

    return (
        <div>

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">My Rentals</h1>
                <div className="grid grid-cols-2">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Paid Rentals</h2>
                        <div className="grid lg:gap-4">
                            {paidRentals?.map((rental: Rental) => (
                                <div key={rental?.id} className="bg-gray-100 p-4 rounded-md">
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">{rental.bikeName}</p>
                                        <p className="text-lg font-semibold">${rental.totalCost}</p>
                                    </div>
                                    <p className="text-gray-600">
                                        Booking Date :
                                        <span> 
                                            {new Date(rental.startTime).toLocaleDateString()}
                                        
                                        </span>
                                    </p>

                                    <p className="text-gray-600">
                                        Return Date :
                                        <span>
                                            {new Date(rental.returnTime).toLocaleDateString()}
                                        </span>
                                    </p>


                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default MyRentendBike;