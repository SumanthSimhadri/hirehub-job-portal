import Sidebar from "../components/Sidebar";

function Notifications() {

  const notifications = [

    {
      title: "Google viewed your profile",
      time: "2 mins ago",
      color: "bg-blue-50",
    },

    {
      title: "Amazon shortlisted your application",
      time: "10 mins ago",
      color: "bg-green-50",
    },

    {
      title: "Microsoft posted a new UI/UX role",
      time: "1 hour ago",
      color: "bg-purple-50",
    },

    {
      title: "Your profile strength increased to 85%",
      time: "3 hours ago",
      color: "bg-orange-50",
    },

    {
      title: "New internships available near Hyderabad",
      time: "Today",
      color: "bg-pink-50",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-[320px] hidden lg:block">

        <Sidebar />

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        {/* Heading */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-800">
            🔔 Notifications
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Stay updated with your latest activities
          </p>

        </div>

        {/* Notifications */}
        <div className="space-y-6">

          {notifications.map((item, index) => (

            <div
              key={index}
              className={`${item.color} rounded-3xl p-6 shadow-sm hover:shadow-lg transition`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.time}
                  </p>

                </div>

                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Notifications;