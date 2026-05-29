import { motion } from "framer-motion"
import heroImage from "../assets/hero1.jpeg"
function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="School"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl"
          >
            Empowering Students for a Better Tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Excellence in academics, leadership, and character building
            through modern education and holistic development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 flex gap-4"
          >

            <button className="bg-blue-900 hover:bg-blue-800 text-white px-7 py-3 rounded-full font-medium transition">
              Explore More
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-full font-medium transition">
              Contact Us
            </button>

          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Hero