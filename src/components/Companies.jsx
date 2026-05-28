import google from "../assets/logos/google.png";
import amazon from "../assets/logos/amazon.png";
import microsoft from "../assets/logos/microsoft.png";
import infosys from "../assets/logos/infosys.png";
import tcs from "../assets/logos/tcs.jpg";
import wipro from "../assets/logos/wipro.jpg";

function Companies() {

  const companies = [

    {
      name: "Google",
      logo: google,
      jobs: "120 Openings",
      location: "Hyderabad",
    },

    {
      name: "Amazon",
      logo: amazon,
      jobs: "85 Openings",
      location: "Bangalore",
    },

    {
      name: "Microsoft",
      logo: microsoft,
      jobs: "60 Openings",
      location: "Remote",
    },

    {
      name: "Infosys",
      logo: infosys,
      jobs: "150 Openings",
      location: "Pune",
    },

    {
      name: "TCS",
      logo: tcs,
      jobs: "200 Openings",
      location: "Chennai",
    },

    {
      name: "Wipro",
      logo: wipro,
      jobs: "95 Openings",
      location: "Hyderabad",
    },

  ];

  return (
    <section
      id="companies"
      className="py-20"
    >

      {/* Heading */}
      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Top Companies
        </h1>

        <p className="text-gray-500 text-lg">
          Explore opportunities from leading companies
        </p>

      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {companies.map((company, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* Logo */}
            <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center p-4 shadow-md mb-6 mx-auto">

              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain"
              />

            </div>

            {/* Info */}
            <div className="text-center">

              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                {company.name}
              </h2>

              <p className="text-blue-600 font-semibold mb-2">
                {company.jobs}
              </p>

              <p className="text-gray-500">
                📍 {company.location}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Companies;