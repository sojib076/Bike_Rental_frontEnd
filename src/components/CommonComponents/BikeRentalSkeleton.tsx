

const BikeRentalSkeleton = () => {
  return (
    <div className="text-center my-20">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Bike Rental Summary</h1>
      <div className="grid grid-cols-3 justify-center items-center gap-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="py-10 bg-gray-300 shadow-inner shadow-white text-center rounded-2xl shimmer-animation"
          >
            <div className="h-6 w-24 bg-gray-400 rounded mx-auto mb-4 shimmer-animation"></div>
            <div className="h-8 w-16 bg-gray-400 rounded mx-auto shimmer-animation"></div>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full h-64 bg-gray-300 rounded-lg shimmer-animation"></div>
    </div>
  );
};

export default BikeRentalSkeleton;
