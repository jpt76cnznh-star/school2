import { Routes, Route, useLocation } from "react-router-dom"

import { AnimatePresence, motion } from "framer-motion"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

import Home from "./pages/Home"
import Faculty from "./pages/Faculty"
import Events from "./pages/Events"
import Achievements from "./pages/Achievements"
import History from "./pages/History"
import Notices from "./pages/Notices"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  const location = useLocation()

  return (
    <div>

      <Navbar />

      <AnimatePresence mode="wait">

        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >

          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />

            <Route path="/faculty" element={<Faculty />} />

            <Route path="/events" element={<Events />} />

            <Route
              path="/achievements"
              element={<Achievements />}
            />

            <Route path="/history" element={<History />} />

            <Route path="/notices" element={<Notices />} />
           <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
            <Route path="/login" element={<Login />} />

          </Routes>

        </motion.div>

      </AnimatePresence>

      <BackToTop />

      <Footer />

    </div>
  )
}

export default App