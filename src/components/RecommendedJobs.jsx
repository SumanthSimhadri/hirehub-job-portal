import { useEffect, useState } from "react";

import JobCard from "./JobCard";
import SkeletonCard from "./SkeletonCard";

function RecommendedJobs({
  jobs,
  onSaveJob,
}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <section>

      {/* Heading */}
      <div className="mb-6">

        <h1 className="text-4xl font-bold text-gray-800">
          Recommended for You
        </h1>

        <p className="text-gray-500 mt-2">
          Matched jobs based on your selected filters
        </p>

      </div>

      {/* Loading */}
      {loading ? (

        <div className="grid md:grid-cols-2 gap-8">

          {[1, 2, 3, 4].map((item) => (

            <SkeletonCard key={item} />

          ))}

        </div>

      ) : jobs.length === 0 ? (

        <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

          <h2 className="text-3xl font-bold text-red-500 mb-4">
            No Matching Jobs Found
          </h2>

          <p className="text-gray-500">
            Try changing title, location,
            skills, experience, or job type.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-8">

          {jobs.map((job, index) => (

            <JobCard
              key={index}
              {...job}
              onSaveJob={onSaveJob}
            />

          ))}

        </div>

      )}

    </section>
  );
}

export default RecommendedJobs;