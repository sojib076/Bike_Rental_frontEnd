

const DashboardSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-40">
      <div className="w-48 h-8 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md mb-4 shimmer"></div>
      <div className="w-64 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md shimmer mt-2"></div>
      
      <div className="w-32 h-10 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 rounded-md shimmer mt-4"></div>
      
      <div className="w-40 h-6 bg-gradient-to-r from-red-300 via-red-200 to-red-300 rounded-lg shimmer my-4"></div>
      
      <div className="w-full grid grid-cols-2 gap-4 mt-6 px-8">
        {/* Placeholder for CardsAdmin */}
        <div className="h-40 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-lg shimmer col-span-1"></div>
        <div className="h-40 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-lg shimmer col-span-1"></div>
      </div>
      
      <div className="w-full h-64 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-lg shimmer mt-6"></div> {/* Placeholder for AdminUsersChart */}
    </div>
  );
};

export default DashboardSkeleton;
