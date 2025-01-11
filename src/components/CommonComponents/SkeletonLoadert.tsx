export function SkeletonLoader() {
    return (
      <div className="animate-pulse bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-64 sm:h-80 bg-gray-300" />
        <div className="p-6">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
      </div>
    )
  }
  
  