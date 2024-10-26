import { Skeleton } from "../ui/skeleton";

const BikeCardSkeleton = () => {
  return (
    <div className="relative w-full lg:h-[580px] bg-black cursor-pointer lg:p-5 px-3">
      <div className="grid grid-cols-1 items-center px-5 pt-1">
        <Skeleton className="h-6 lg:h-8 w-1/2 bg-gray-700 shimmer" />
      </div>
      <div className="relative my-2 overflow-hidden bg-gray-700 h-56 w-full shimmer">
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="h-4 w-3/4 mt-2 bg-gray-700 shimmer" />
      <div className="bg-black text-white mt-2">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="grid grid-cols-1 items-center">
              <Skeleton className="h-4 w-16 bg-gray-700 shimmer" />
              <Skeleton className="h-3 w-12 mt-1 bg-gray-600 shimmer" />
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-5 border-gray-700" />
      <div className="bg-black text-white p-4 grid grid-cols-2 items-center">
        <div>
          <Skeleton className="h-4 w-16 bg-gray-700 shimmer" />
          <Skeleton className="h-6 w-24 mt-2 bg-gray-700 shimmer" />
          <Skeleton className="h-3 w-32 mt-1 bg-green-600 shimmer" />
        </div>
        <Skeleton className="h-8 w-full bg-green-600 shimmer" />
      </div>
    </div>
  );
};

export default BikeCardSkeleton;
