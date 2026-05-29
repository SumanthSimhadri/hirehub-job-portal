import { useState } from "react";

import { motion } from "framer-motion";

import Filters from "../components/Filters";
import RecommendedJobs from "../components/RecommendedJobs";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

import google from "../assets/logos/google.png";
import amazon from "../assets/logos/amazon.png";
import microsoft from "../assets/logos/microsoft.png";
import infosys from "../assets/logos/infosys.png";
import tcs from "../assets/logos/tcs.jpg";
import wipro from "../assets/logos/wipro.jpg";

function Home({ activeSection, setActiveSection }) {

  const jobsData = [

  {
    id: 1,
    company: "Google",
    logo: google,
    role: "Frontend Developer",
    location: "Hyderabad",
    salary: "💰 Salary: 10 LPA",
    experience: " Minimum Experience: 2 Years",
    type: "Full Time Job",
    skills: ["React", "JavaScript"],
  },

  {
    id: 2,
    company: "Amazon",
    logo: amazon,
    role: "React Developer",
    location: "Bangalore",
    salary: "💰 Salary: 8 LPA",
    experience: " Minimum Experience: 1 Year",
    type: "Full Time Job",
    skills: ["React", "Node.js"],
  },

  {
    id: 3,
    company: "Microsoft",
    logo: microsoft,
    role: "UI/UX Designer",
    location: "Remote",
    salary: "💰 Salary: 7 LPA",
    experience: " Minimum Experience: Fresher",
    type: "Internship",
    skills: ["Figma", "UI Design"],
  },

  {
    id: 4,
    company: "Infosys",
    logo: infosys,
    role: "Python Developer",
    location: "Pune",
    salary: "💰 Salary: 6 LPA",
    experience: " Minimum Experience: 2 Years",
    type: "Full Time Job",
    skills: ["Python", "SQL"],
  },

  {
    id: 5,
    company: "TCS",
    logo: tcs,
    role: "Cloud Engineer",
    location: "Chennai",
    salary: "💰 Salary: 9 LPA",
    experience: " Minimum Experience: 3 Years",
    type: "Remote Job",
    skills: ["AWS", "Docker"],
  },

  {
    id: 6,
    company: "Wipro",
    logo: wipro,
    role: "Data Analyst",
    location: "Hyderabad",
    salary: "💰 Salary: 5 LPA",
    experience: " Minimum Experience: Fresher",
    type: "Internship",
    skills: ["Power BI", "Excel"],
  },

];
  const [filters, setFilters] = useState({
  title: "",
  location: "",
  experience: "",
  type: "",
  salary: 20,
  skills: [],
});

  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const applyFilters = () => {

    const filtered = jobsData.filter((job) => {

      const titleMatch =
        filters.title === "" ||
        job.role.toLowerCase().includes(
          filters.title.toLowerCase()
        );

      const locationMatch =
        filters.location === "" ||
        job.location.toLowerCase().includes(
          filters.location.toLowerCase()
        );

      const experienceMatch =
        filters.experience === "" ||
        job.experience === filters.experience;

      const typeMatch =
        filters.type === "" ||
        job.type === filters.type;

      return (
        titleMatch &&
        locationMatch &&
        experienceMatch &&
        typeMatch
      );

    });

    setFilteredJobs(filtered);

  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="px-6 md:px-12 py-8">

        {/* HOME */}
        {activeSection === "home" && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-[85vh] bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl flex items-center"
          >

            <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

              <div>

                <h1 className="text-6xl font-bold leading-tight mb-8">

                  Find Your <br />

                  <span className="text-yellow-300">
                    Dream Job
                  </span>

                </h1>

                <p className="text-xl text-blue-100 leading-9 mb-10">

                  Discover thousands of internships,
                  remote jobs, and career opportunities
                  from top companies around the world.

                </p>

                <button
                  onClick={() => setActiveSection("jobs")}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
                >

                  Explore Jobs

                </button>

              </div>

              <div className="hidden lg:flex justify-center">

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-lg">

                  <h2 className="text-4xl font-bold mb-10">
                    Trending Skills
                  </h2>

                  <div className="flex flex-wrap gap-5">

                    {[
                      "React",
                      "AI/ML",
                      "Python",
                      "AWS",
                      "UI/UX",
                      "Java",
                    ].map((skill, index) => (

                      <span
                        key={index}
                        className="bg-white/20 px-5 py-4 rounded-2xl"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        )}

        {/* JOBS */}
        {activeSection === "jobs" && (

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8">

            <div className="grid lg:grid-cols-4 gap-8">

              <div className="lg:col-span-1">

                <div className="sticky top-24 max-h-[90vh] overflow-y-auto pr-2">

                  <Filters
                    filters={filters}
                    setFilters={setFilters}
                    applyFilters={applyFilters}
                  />

                </div>

              </div>

              <div className="lg:col-span-3 mt-10 lg:mt-0">

              <div className="mb-8">

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">

               Recommended for You

               </h1>

               <p className="text-gray-500 text-lg">

                Matched jobs based on your selected filters

              </p>

             </div>

              <RecommendedJobs
              jobs={filteredJobs}
  />

             </div>

            </div>

          </div>

        )}

        {/* COMPANIES */}
        {activeSection === "companies" && (

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-6 md:p-8">

            <Companies />

          </div>

        )}

        {/* ABOUT */}
        {activeSection === "about" && (

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-[85vh] flex items-center bg-white rounded-3xl p-6 md:p-10 shadow-sm"
          >

            <div className="w-full text-center">

              <h1 className="text-6xl font-bold text-gray-800 mb-8">

                About <span className="text-blue-600">
                  HireHub
                </span>

              </h1>

              <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-10 mb-14">

                HireHub is a modern AI-powered job portal helping students and professionals discover internships and jobs from top companies.

              </p>

              <div className="grid md:grid-cols-3 gap-8">

                {[
                  {
                    title: "AI Recommendations",
                    icon: "✦",
                    description:
                      "Smart AI-powered job suggestions based on your skills and interests.",
                  },

                  {
                    title: "Verified Companies",
                    icon: "◉",
                    description:
                      "Explore trusted companies with verified job opportunities and profiles.",
                  },

                  {
                    title: "Career Growth",
                    icon: "⬈",
                    description:
                      "Build your professional journey with internships, jobs, and learning paths.",
                  },

                ].map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 p-10 rounded-3xl shadow-lg"
                  >

                    <div className="text-6xl mb-6 text-blue-600">

                      {item.icon}

                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-5">

                      {item.title}

                    </h2>

                    <p className="text-gray-500 leading-8">

                      {item.description}

                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.section>

        )}

        {/* CONTACT */}
        {activeSection === "contact" && (

          <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">

            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-2xl w-full">

              <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">

                Contact Us

              </h1>

              <div className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-4 rounded-2xl"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-4 rounded-2xl"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border p-4 rounded-2xl"
                ></textarea>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition">

                  Send Message

                </button>

              </div>

            </div>

          </div>

        )}

      </div>

      <Footer />

    </div>
  );
}

export default Home;