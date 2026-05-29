import { motion } from "framer-motion"

const stats = [
  {
    number: "37+",
    title: "Years of Excellence",
  },
  {
    number: "300+",
    title: "Students",
  },
  {
    number: "80+",
    title: "Qualified Teachers",
  },
  {
    number: "98%",
    title: "Board Results",
  },
]

function Highlights() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            Our Highlights
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Excellence in Every Step
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition"
            >

              <h3 className="text-4xl md:text-5xl font-bold text-blue-900">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-600 font-medium">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Highlights