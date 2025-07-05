const ShimmerBox = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto mb-6"></div>

      <div className="space-y-5">
        <div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        </div>

        <div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-5 bg-gray-300 rounded w-2/3"></div>
        </div>

        <div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-5 bg-gray-300 rounded w-full"></div>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>

        <div className="pt-6 text-center">
          <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerBox;
