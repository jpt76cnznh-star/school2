import { motion } from "framer-motion"

const historyData = [
  {
    year: "1998",
    title: "Foundation of the School",
    description:
      "The school was established with a vision to provide quality education and holistic development for students.",
  },

  {
    year: "2005",
    title: "Expansion of Campus",
    description:
      "New classrooms, science laboratories, and library facilities were introduced to enhance learning.",
  },

  {
    year: "2015",
    title: "Academic Excellence Award",
    description:
      "The institution received recognition for outstanding academic performance and student achievements.",
  },

  {
    year: "2023",
    title: "Modern Digital Learning",
    description:
      "Smart classrooms and technology-driven learning methods were introduced across all departments.",
  },
]

function History() {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            Our Journey
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            History of Our Institution
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Over the years, our institution has continued
            to grow with a commitment to academic excellence,
            innovation, and character development.
          </p>

        </div>

        {/* Timeline */}
        <div className="mt-24 relative border-l-4 border-blue-900 ml-4 md:ml-0">

          {historyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 ml-8"
            >

              {/* Dot */}
              <div className="absolute -left-[14px] w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow-md"></div>

              {/* Content */}
              <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">

                <span className="text-blue-900 font-bold text-lg">
                  {item.year}
                </span>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default History