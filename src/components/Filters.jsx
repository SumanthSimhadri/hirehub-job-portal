import { useMemo, useState } from "react";
import toast from "react-hot-toast";

function Filters({
  filters,
  setFilters,
  applyFilters,
}) {

  const [titleOpen, setTitleOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
    "UI/UX",
    "Figma",
    "Machine Learning",
    "Data Analysis",
    "Tailwind CSS",
    "Power BI",
  ];

  const jobTitles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
    "Java Developer",
    "UI/UX Designer",
    "Data Analyst",
    "Cloud Engineer",
    "AI Engineer",
  ];

  const locations = [
    "Hyderabad",
    "Bangalore",
    "Chennai",
    "Pune",
    "Mumbai",
    "Delhi",
    "Noida",
    "Remote",
    "Kolkata",
    "Visakhapatnam",
  ];

  const filteredTitles = useMemo(() => {

    const q = (filters.title || "")
      .toLowerCase();

    if (!q) return jobTitles;

    return jobTitles.filter((title) =>
      title.toLowerCase().includes(q)
    );

  }, [filters.title]);

  const filteredLocations = useMemo(() => {

    const q = (filters.location || "")
      .toLowerCase();

    if (!q) return locations;

    return locations.filter((location) =>
      location.toLowerCase().includes(q)
    );

  }, [filters.location]);

  const toggleSkill = (skill) => {

    const currentSkills =
      filters.skills || [];

    if (currentSkills.includes(skill)) {

      setFilters({
        ...filters,
        skills: currentSkills.filter(
          (s) => s !== skill
        ),
      });

    } else {

      setFilters({
        ...filters,
        skills: [...currentSkills, skill],
      });

    }
  };

  return (
    <section className="bg-white p-8 rounded-3xl shadow-xl sticky top-6">

      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Filters
      </h2>

      <div className="space-y-6">

        {/* Job Title */}
        <div className="relative">

          <label className="block mb-2 font-semibold text-gray-700">
            Job Title
          </label>

          <input
            type="text"
            value={filters.title || ""}
            placeholder="Search job title"
            onFocus={() => setTitleOpen(true)}
            onChange={(e) => {

              setFilters({
                ...filters,
                title: e.target.value,
              });

              setTitleOpen(true);

            }}
            onBlur={() =>
              setTimeout(() => {
                setTitleOpen(false);
              }, 150)
            }
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          {titleOpen &&
            filteredTitles.length > 0 && (

            <div className="absolute top-24 left-0 w-full bg-white shadow-lg rounded-2xl p-2 z-20 max-h-52 overflow-y-auto border">

              {filteredTitles.map((title, index) => (

                <div
                  key={index}
                  onMouseDown={() => {

                    setFilters({
                      ...filters,
                      title: title,
                    });

                    setTitleOpen(false);

                  }}
                  className="p-3 rounded-xl hover:bg-blue-100 cursor-pointer"
                >
                  {title}
                </div>

              ))}

            </div>

          )}

        </div>

        {/* Location */}
        <div className="relative">

          <label className="block mb-2 font-semibold text-gray-700">
            Location
          </label>

          <input
            type="text"
            value={filters.location || ""}
            placeholder="Search location"
            onFocus={() => setLocationOpen(true)}
            onChange={(e) => {

              setFilters({
                ...filters,
                location: e.target.value,
              });

              setLocationOpen(true);

            }}
            onBlur={() =>
              setTimeout(() => {
                setLocationOpen(false);
              }, 150)
            }
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          {locationOpen &&
            filteredLocations.length > 0 && (

            <div className="absolute top-24 left-0 w-full bg-white shadow-lg rounded-2xl p-2 z-20 max-h-52 overflow-y-auto border">

              {filteredLocations.map((location, index) => (

                <div
                  key={index}
                  onMouseDown={() => {

                    setFilters({
                      ...filters,
                      location: location,
                    });

                    setLocationOpen(false);

                  }}
                  className="p-3 rounded-xl hover:bg-green-100 cursor-pointer"
                >
                  {location}
                </div>

              ))}

            </div>

          )}

        </div>

        {/* Experience */}
        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Experience
          </label>

          <select
            value={filters.experience || ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                experience: e.target.value,
              })
            }
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          >

            <option value="">
              Experience
            </option>

            <option>
              Fresher
            </option>

            <option>
              1 Year
            </option>

            <option>
              2 Years
            </option>

            <option>
              3 Years
            </option>

            <option>
              4+ Years
            </option>

          </select>

        </div>

        {/* Job Type */}
        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Internship / Job
          </label>

          <select
            value={filters.type || ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                type: e.target.value,
              })
            }
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          >

            <option value="">
              Select Type
            </option>

            <option>
              Internship
            </option>

            <option>
              Full Time Job
            </option>

            <option>
              Part Time Job
            </option>

            <option>
              Remote Job
            </option>

          </select>

        </div>

        {/* Skills */}
        <div>

          <h3 className="text-xl font-semibold mb-5 text-gray-800">
            Select Multiple Skills
          </h3>

          <div className="flex flex-wrap gap-3">

            {skills.map((skill, index) => {

              const active =
                (filters.skills || [])
                  .includes(skill);

              return (

                <button
                  type="button"
                  key={index}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    active
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  {skill}
                </button>

              );
            })}

          </div>

        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3">

          {/* Clear Filters */}
          <button
            onClick={() => {

              setFilters({
                title: "",
                location: "",
                experience: "",
                type: "",
                skills: [],
              });

              toast.success(
                "Filters Cleared"
              );

            }}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-2xl font-semibold transition"
          >
            Clear Filters
          </button>

          {/* Apply Button */}
          <button
            onClick={() => {

              applyFilters();

              toast.success(
                "Filters Applied"
              );

            }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition"
          >
            Apply Filters
          </button>

        </div>

      </div>

    </section>
  );
}

export default Filters;