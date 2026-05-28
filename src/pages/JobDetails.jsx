import { useParams } from "react-router-dom";

function JobDetails() {

  const { id } = useParams();

  const jobs = [

    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Hyderabad",
      experience: "Fresher",
      packageLPA: "₹3.5 LPA",
      skills: ["React", "JavaScript"],
      description:
        "We are looking for a passionate frontend developer to build responsive modern web applications.",
    },

    {
      id: 2,
      title: "Backend Developer",
      company: "Infosys",
      location: "Bangalore",
      experience: "2 Years",
      packageLPA: "₹6 LPA",
      skills: ["Node.js", "MongoDB"],
      description:
        "Develop scalable backend APIs and cloud-based systems.",
    },

    {
      id: 3,
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Pune",
      experience: "1 Year",
      packageLPA: "₹4 LPA",
      skills: ["Figma", "UI/UX"],
      description:
        "Design modern interfaces and improve user experience for web applications.",
    },

  ];

  const job = jobs.find((job) => job.id === Number(id));

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-16">

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <div className="flex items-center gap-6 mb-8">

          <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
            {job.company.charAt(0)}
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              {job.title}
            </h1>

            <p className="text-gray-500 text-xl mt-2">
              {job.company}
            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-4 mb-8">

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full">
            {job.packageLPA}
          </span>

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full">
            {job.location}
          </span>

          <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full">
            {job.experience}
          </span>

        </div>

        <h2 className="text-3xl font-bold mb-4">
          Job Description
        </h2>

        <p className="text-gray-600 leading-8 mb-10">
          {job.description}
        </p>

        <h2 className="text-3xl font-bold mb-5">
          Required Skills
        </h2>

        <div className="flex flex-wrap gap-4 mb-10">

          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 px-5 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}

        </div>

        <h2 className="text-3xl font-bold mb-5">
          Responsibilities
        </h2>

        <ul className="list-disc ml-8 text-gray-600 space-y-3 mb-10">
          <li>Develop scalable applications</li>
          <li>Collaborate with team members</li>
          <li>Write clean reusable code</li>
          <li>Improve UI performance</li>
        </ul>

        <h2 className="text-3xl font-bold mb-5">
          Benefits
        </h2>

        <ul className="list-disc ml-8 text-gray-600 space-y-3 mb-10">
          <li>Flexible work environment</li>
          <li>Health insurance</li>
          <li>Remote opportunities</li>
          <li>Learning programs</li>
        </ul>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition">
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobDetails;