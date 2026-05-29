import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* School Info */}
          <div>

            <h2 className="text-3xl font-bold">
              Royal Oak School
            </h2>

            <p className="mt-6 text-gray-300 leading-7">
              Empowering students through quality education,
              discipline, innovation, and holistic development.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-300">

              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/faculty" className="hover:text-white transition">
                Faculty
              </Link>

              <Link to="/events" className="hover:text-white transition">
                Events
              </Link>

              <Link to="/achievements" className="hover:text-white transition">
                Achievements
              </Link>

              <Link to="/history" className="hover:text-white transition">
                History
              </Link>

              <Link to="/notices" className="hover:text-white transition">
                Notices
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 flex flex-col gap-5 text-gray-300">

              <p>📞 +91 98765 43210</p>

              <p>✉️ info@royaloakschool.com</p>

              <p>
                📍 Royal Oak School Campus,
                Assam, India
              </p>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-xl font-semibold">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-4">

              <button className="bg-white/10 px-5 py-3 rounded-full hover:bg-white hover:text-blue-950 transition">
                Facebook
              </button>

              <button className="bg-white/10 px-5 py-3 rounded-full hover:bg-white hover:text-blue-950 transition">
                Instagram
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">

          <p>
            © 2026 Royal Oak School. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer