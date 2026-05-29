import { motion } from "framer-motion"

const notices = [
  {
    title: "Summer Vacation Begins From 15th May",
    date: "08 May 2026",
  },
  {
    title: "Annual Sports Week Registration Open",
    date: "05 May 2026",
  },
  {
    title: "Parent-Teacher Meeting on Saturday",
    date: "02 May 2026",
  },
  {
    title: "Science Exhibition Next Month",
    date: "28 April 2026",
  },
]

function NoticeBoard() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-blue-900 font-semibold uppercase tracking-widest">
            Latest Updates
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Notice Board
          </h2>

        </div>

        {/* Notices */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition"
            >

              <p className="text-sm text-blue-900 font-semibold">
                {notice.date}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-relaxed">
                {notice.title}
              </h3>

              <button className="mt-6 text-blue-900 font-semibold hover:underline">
                Read More →
              </button>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default NoticeBoard