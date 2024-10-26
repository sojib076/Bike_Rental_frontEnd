import  { useState } from 'react';
import { useAddReviewMutation, useGetAllRentalsQuery } from '@/redux/api/api';
import { Rental } from './Rentals';
import { Star } from 'lucide-react';
import Rating from 'react-rating';

const MyRentedBike = () => {
  const { data = [] ,refetch } = useGetAllRentalsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [addReview, { isLoading,data:reviewdata }]  =useAddReviewMutation();
  const paidRentals = data?.data?.filter((rental: Rental) => rental.totalPaid && rental.reviewAdded===false);
  

  
 

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentRental, setCurrentRental] = useState<Rental | null>(null);
  const [ratingValue, setRatingValue] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const openModal = (rental: Rental) => {
    setCurrentRental(rental);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setRatingValue(0);
    setReviewText('');
  };

  const handleReviewSubmit = () => {

    addReview({
      bikeId: currentRental?.bikeId?._id,
      rating: ratingValue,
      comment: reviewText,
      paymentId: currentRental?.paymentId,
    });

    if (reviewdata) {
      refetch();

    }

    closeModal();
  };
  if (isLoading) {
    console.log('loading');
    
  }

 

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold mb-4 dark:text-white ">My Rentals</h1>
        <div className="grid grid-cols-1 ">
          <div className=" dark:bg-gray-800 bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Paid Rentals</h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4">
              {paidRentals?.map((rental: Rental) => (
                <div key={rental?.id} className=" dark:bg-black bg-gray-100 p-4 rounded-md">
                  <div className="flex justify-between">
                    <p className="text-lg font-semibold">{rental?.bikeId?.name}</p>
                   
                  </div>
                  <p className="text-gray-600">
                    Booking Date:
                    <span> {new Date(rental.startTime).toLocaleDateString()}</span>
                  </p>
                  <p className="text-gray-600">
                    Return Date:
                    <span> {new Date(rental.returnTime).toLocaleDateString()}</span>
                  </p>
                  <button
                    onClick={() => openModal(rental)}
                    className="mt-4 bg-blue-500/50 dark:text-white text-black px-4 py-2 rounded-md"
                  >
                    Add Review
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
         
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
         
          <div className=" dark:bg-black bg-white p-6 rounded-md z-10 w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              Add Review for {currentRental?.bikeId?.name}
            </h2>
             {/* @ts-expect-error their is no type declaration file for react rating*/}
             <Rating
                                emptySymbol={<Star size={40} color="orange" />}
                                fullSymbol={<Star size={40} color="orange" fill="orange" />}
                                fractions={2}
                                initialRating={ratingValue}
                                stop={5}
                                onClick={(value) => setRatingValue(value)}
                            />
            
                

            <textarea
              className="w-full p-2 border rounded-md mb-4"
              rows={4}
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="mr-2 bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleReviewSubmit}
                className="bg-blue-500/50 text-white px-4 py-2 rounded-md"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRentedBike;
