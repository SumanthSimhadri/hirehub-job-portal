import { useState } from "react";
import toast from "react-hot-toast";

function Profile() {

  const [profileImage, setProfileImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  const [profile, setProfile] = useState({
    name: "Sumanth",
    email: "sumanth@gmail.com",
    phone: "9876543210",
    location: "Hyderabad",
    role: "Frontend Developer",
    experience: "Fresher",
    skills: "React, JavaScript, Tailwind",
    headline: "Passionate Frontend Developer",
  });

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setProfileImage(imageUrl);

      toast.success("Profile Photo Updated");

    }

  };

  const handleSave = () => {

    toast.success("Profile Updated Successfully");

  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-52 relative">

          {/* Profile Image */}
          <div className="absolute -bottom-20 left-10">

            <div className="relative">

              <div className="w-40 h-40 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">

                <img
                  src={profileImage}
                  alt="profile"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Upload Button */}
              <label className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full cursor-pointer shadow-lg transition">

                📷

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

              </label>

            </div>

          </div>

        </div>

        {/* Content */}
        <div className="pt-28 px-6 md:px-10 pb-10">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-4xl font-bold text-gray-800">
              {profile.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {profile.headline}
            </p>

          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Name */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Phone */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Mobile Number
              </label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Location */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Role */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Role
              </label>

              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* Experience */}
            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Experience
              </label>

              <select
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option>Fresher</option>
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>
                <option>4+ Years</option>

              </select>

            </div>

            {/* Skills */}
            <div className="md:col-span-2">

              <label className="block mb-2 font-semibold text-gray-700">
                Skills
              </label>

              <textarea
                rows="4"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

            </div>

            {/* Headline */}
            <div className="md:col-span-2">

              <label className="block mb-2 font-semibold text-gray-700">
                Professional Headline
              </label>

              <textarea
                rows="3"
                name="headline"
                value={profile.headline}
                onChange={handleChange}
                className="w-full border p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

            </div>

          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold transition"
          >

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;