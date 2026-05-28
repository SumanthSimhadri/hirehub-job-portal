function Stats() {
  return (
    <section className="py-20 px-6 md:px-16">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            10K+
          </h1>

          <p className="text-gray-500 mt-2">
            Active Jobs
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-purple-600">
            5K+
          </h1>

          <p className="text-gray-500 mt-2">
            Companies
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-pink-600">
            20K+
          </h1>

          <p className="text-gray-500 mt-2">
            Candidates
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-green-600">
            95%
          </h1>

          <p className="text-gray-500 mt-2">
            Success Rate
          </p>
        </div>

      </div>

    </section>
  );
}

export default Stats;