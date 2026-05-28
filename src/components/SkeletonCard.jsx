function SkeletonCard() {

  return (
    <div className="bg-white rounded-3xl shadow-lg p-7 animate-pulse">

      {/* Top */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="w-16 h-16 rounded-2xl bg-gray-200"></div>

          {/* Text */}
          <div>

            <div className="w-40 h-5 bg-gray-200 rounded mb-3"></div>

            <div className="w-28 h-4 bg-gray-200 rounded"></div>

          </div>

        </div>

        {/* Match */}
        <div className="w-24 h-10 bg-gray-200 rounded-full"></div>

      </div>

      {/* Details */}
      <div className="space-y-4 mb-8">

        <div className="w-48 h-4 bg-gray-200 rounded"></div>

        <div className="w-32 h-4 bg-gray-200 rounded"></div>

        <div className="w-40 h-4 bg-gray-200 rounded"></div>

      </div>

      {/* Skills */}
      <div className="flex gap-3 mb-8">

        <div className="w-20 h-10 bg-gray-200 rounded-full"></div>

        <div className="w-24 h-10 bg-gray-200 rounded-full"></div>

        <div className="w-16 h-10 bg-gray-200 rounded-full"></div>

      </div>

      {/* Buttons */}
      <div className="flex gap-4">

        <div className="flex-1 h-12 bg-gray-200 rounded-2xl"></div>

        <div className="flex-1 h-12 bg-gray-200 rounded-2xl"></div>

      </div>

    </div>
  );
}

export default SkeletonCard;