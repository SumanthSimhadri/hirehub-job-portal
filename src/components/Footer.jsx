function Footer() {

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white mt-20"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>

            <h1 className="text-4xl font-bold text-blue-400 mb-4">
              HireHub
            </h1>

            <p className="text-gray-400 leading-7">
              Find your dream jobs, internships,
              and career opportunities with HireHub.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-2xl font-semibold mb-5">
              Quick Links
            </h2>

            <div className="space-y-3 text-gray-400">

              <p className="hover:text-white cursor-pointer transition">
                Home
              </p>

              <p className="hover:text-white cursor-pointer transition">
                About
              </p>

              <p className="hover:text-white cursor-pointer transition">
                Jobs
              </p>

              <p className="hover:text-white cursor-pointer transition">
                Companies
              </p>

            </div>

          </div>

          {/* Support */}
          <div>

            <h2 className="text-2xl font-semibold mb-5">
              Support
            </h2>

            <div className="space-y-3 text-gray-400">

              <p>Email: support@hirehub.com</p>

              <p>Phone: +91 9876543210</p>

              <p>Help Center</p>

              <p>Privacy Policy</p>

            </div>

          </div>

          {/* Social */}
          <div>

            <h2 className="text-2xl font-semibold mb-5">
              Follow Us
            </h2>

            <div className="space-y-3 text-gray-400">

              <p>LinkedIn</p>

              <p>GitHub</p>

              <p>Instagram</p>

              <p>Twitter</p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-500">

          © 2026 HireHub. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;