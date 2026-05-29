import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import logo from "../assets/logo.png"
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-3">

      <img
        src={logo}
        alt="School Logo"
        className="w-12 h-12 object-contain"
      />

      <div>
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          Royal Oak School
        </h1>

        <p className="text-xs text-gray-500">
          Excellence & Discipline
        </p>
      </div>

    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

    <Link
  to="/"
  className={`transition hover:text-blue-900 ${
    location.pathname === "/"
      ? "text-blue-900 font-semibold"
      : "text-gray-700"
  }`}
>
        Home
      </Link>

      <Link
  to="/faculty"
  className={`transition hover:text-blue-900 ${
    location.pathname === "/"
      ? "text-blue-900 font-semibold"
      : "text-gray-700"
  }`}
>
        Faculty
      </Link>

      <Link
  to="/events"
  className={`transition hover:text-blue-900 ${
    location.pathname === "/"
      ? "text-blue-900 font-semibold"
      : "text-gray-700"
  }`}
>
        Events
      </Link>

      <Link
  to="/achievements"
  className={`transition hover:text-blue-900 ${
    location.pathname === "/"
      ? "text-blue-900 font-semibold"
      : "text-gray-700"
  }`}
>
        Achievements
      </Link>

      <Link
  to="/history"
  className={`transition hover:text-blue-900 ${
    location.pathname === "/"
      ? "text-blue-900 font-semibold"
      : "text-gray-700"
  }`}
>
        History
      </Link>

      <Link
  to="/notices"
  className={`transition hover:text-blue-900 ${
    location.pathname === "/"
      ? "text-blue-900 font-semibold"
      : "text-gray-700"
  }`}
>
        Notices
      </Link>

    </div>

    {/* Desktop Button */}
    <button className="hidden md:block bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
      Contact
    </button>

    {/* Mobile Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden"
    >
      {menuOpen ? <X size={30} /> : <Menu size={30} />}
    </button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (

    <div className="md:hidden bg-white border-t shadow-lg">

      <div className="flex flex-col px-6 py-6 gap-5 text-lg font-medium text-gray-700">

        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/faculty" onClick={() => setMenuOpen(false)}>
          Faculty
        </Link>

        <Link to="/events" onClick={() => setMenuOpen(false)}>
          Events
        </Link>

        <Link to="/achievements" onClick={() => setMenuOpen(false)}>
          Achievements
        </Link>

        <Link to="/history" onClick={() => setMenuOpen(false)}>
          History
        </Link>

        <Link to="/notices" onClick={() => setMenuOpen(false)}>
          Notices
        </Link>

      </div>

    </div>

  )}

</nav>
  )
}

export default Navbar