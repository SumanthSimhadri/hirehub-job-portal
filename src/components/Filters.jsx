function Filters({
  filters,
  setFilters,
  applyFilters,
  resetJobs,
}) {

  const skillsList = [
    "React",
    "JavaScript",
    "Python",
    "SQL",
    "AWS",
    "Docker",
    "UI/UX",
    "Node.js",
  ];

  const jobTitles = [
    "Frontend Developer",
    "React Developer",
    "Python Developer",
    "Cloud Engineer",
    "UI/UX Designer",
    "Data Analyst",
  ];

  const locationsList = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Pune",
    "Mumbai",
    "Remote",
  ];

  const handleSkillChange = (skill) => {

    if (filters.skills.includes(skill)) {

      setFilters({
        ...filters,
        skills: filters.skills.filter(
          (item) => item !== skill
        ),
      });

    } else {

      setFilters({
        ...filters,
        skills: [...filters.skills, skill],
      });

    }

  };

  const clearFilters = () => {

  const clearedFilters = {
    title: "",
    location: "",
    experience: "",
    type: "",
    salary: 20,
    skills: [],
  };

  setFilters(clearedFilters);

  resetJobs();

};
  return (

    <div className="bg-white p-6 rounded-3xl shadow-xl">

      {/* Heading */}
      <h2 className="text-xl font-bold text-gray-800 mb-5">

        Filters

      </h2>

      <div className="space-y-5">

        {/* Job Title */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Job Title

          </label>

          <input
            type="text"
            list="jobTitles"
            value={filters.title}
            onChange={(e) =>
              setFilters({
                ...filters,
                title: e.target.value,
              })
            }
            placeholder="Frontend Developer"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />

          <datalist id="jobTitles">

            {jobTitles.map((job, index) => (

              <option
                key={index}
                value={job}
              />

            ))}

          </datalist>

        </div>

        {/* Location */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Location

          </label>

          <input
            type="text"
            list="locations"
            value={filters.location}
            onChange={(e) =>
              setFilters({
                ...filters,
                location: e.target.value,
              })
            }
            placeholder="Hyderabad"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />

          <datalist id="locations">

            {locationsList.map((location, index) => (

              <option
                key={index}
                value={location}
              />

            ))}

          </datalist>

        </div>

        {/* Experience */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Experience

          </label>

          <select
            value={filters.experience}
            onChange={(e) =>
              setFilters({
                ...filters,
                experience: e.target.value,
              })
            }
            className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
          >

            <option value="">
              Select Experience
            </option>

            <option value="Fresher">
              Fresher
            </option>

            <option value="1 Year">
              1 Year
            </option>

            <option value="2 Years">
              2 Years
            </option>

            <option value="3 Years">
              3 Years
            </option>

          </select>

        </div>

        {/* Job Type */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Job Type

          </label>

          <select
            value={filters.type}
            onChange={(e) =>
              setFilters({
                ...filters,
                type: e.target.value,
              })
            }
            className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
          >

            <option value="">
              Select Job Type
            </option>

            <option value="Full Time Job">
              Full Time Job
            </option>

            <option value="Internship">
              Internship
            </option>

            <option value="Remote Job">
              Remote Job
            </option>

          </select>

        </div>

        {/* Salary Range */}
<div>

  <label className="block text-sm font-semibold text-gray-700 mb-2">

    Salary Range

  </label>

  <input
    type="range"
    min="0"
    max="20"
    step="1"
    value={filters.salary || 20}
    onChange={(e) =>
      setFilters({
        ...filters,
        salary: Number(e.target.value),
      })
    }
    className="w-full cursor-pointer"
  />

  <div className="flex justify-between text-xs text-gray-500 mt-2">

    <span>0 LPA</span>

    <span className="font-semibold text-blue-600">

      {filters.salary === 20
        ? "Any Salary"
        : `Up to ₹${filters.salary} LPA`}

    </span>

    <span>20+ LPA</span>

  </div>

</div>

{/* Skills */}
<div>

  <label className="block text-sm font-semibold text-gray-700 mb-3">

    Skills

  </label>

  <div className="flex flex-wrap gap-2">

    {skillsList.map((skill, index) => (

      <button
        type="button"
        key={index}
        onClick={() => handleSkillChange(skill)}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
          filters.skills.includes(skill)
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >

        {skill}

      </button>

    ))}

  </div>

</div>

      

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-2">

          <button
            type="button"
            onClick={applyFilters}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition"
          >

            Apply Filters

          </button>

          <button
            type="button"
            onClick={clearFilters}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl text-sm font-semibold transition"
          >

            Clear Filters

          </button>

        </div>

      </div>

    </div>

  );
}

export default Filters;