import { motion } from "framer-motion"
import heroImage from "../assets/classroom.jpeg"
function About() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
          src={heroImage}
            alt="School Building"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            About Our School
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building Future Leaders Through Quality Education
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            Our institution is committed to academic excellence,
            character development, and holistic growth. We provide
            students with a nurturing environment that encourages
            creativity, discipline, leadership, and lifelong learning.
          </p>

          <button className="mt-8 bg-blue-900 text-white px-7 py-3 rounded-full hover:bg-blue-800 transition">
            Learn More
          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default About