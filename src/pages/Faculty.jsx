import facultyData from "../data/facultyData"
import { motion } from "framer-motion"

function Faculty() {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            Our Faculty
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Meet Our Dedicated Teachers
          </h1>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Our experienced faculty members are committed to
            nurturing students through quality education,
            innovation, and mentorship.
          </p>

        </div>

        {/* Faculty Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {facultyData.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >

              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-900">
                  {teacher.name}
                </h2>

                <p className="mt-2 text-blue-900 font-medium">
                  {teacher.subject}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Faculty