import achievementsData from "../data/achievementsData"
import { Trophy } from "lucide-react"
import { motion } from "framer-motion"

function Achievements() {
  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            Achievements
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Excellence Beyond Academics
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our students and institution consistently achieve
            milestones in academics, sports, leadership,
            and extracurricular excellence.
          </p>

        </div>

        {/* Achievement Cards */}
        <div className="mt-20 space-y-8">

          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg flex items-center gap-6 hover:-translate-y-1 transition"
            >

              {/* Icon */}
              <div className="bg-blue-900 text-white p-5 rounded-2xl">
                <Trophy size={32} />
              </div>

              {/* Content */}
              <div className="flex-1">

                <h2 className="text-2xl font-bold text-gray-900">
                  {achievement.title}
                </h2>

                <p className="mt-2 text-gray-500 font-medium">
                  Achievement Year: {achievement.year}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Achievements