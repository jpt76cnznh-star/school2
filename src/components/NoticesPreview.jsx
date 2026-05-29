import { useEffect, useState } from "react"

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore"

import { db } from "../firebase"

import { Link } from "react-router-dom"

function NoticesPreview() {

  const [notices, setNotices] = useState([])

  useEffect(() => {

    const q = query(
      collection(db, "notices"),
      orderBy("createdAt", "desc"),
      limit(3)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const noticesArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setNotices(noticesArray)

    })

    return () => unsubscribe()

  }, [])

  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-widest text-blue-900 font-semibold">
            Latest Updates
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Notice Board
          </h2>

        </div>

        {/* Notices */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {notices.map((notice) => (

            <div
              key={notice.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition"
            >

              <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                {notice.category}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {notice.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {notice.description.slice(0, 120)}...
              </p>

            </div>

          ))}

        </div>

        {/* Button */}
        <div className="mt-16 text-center">

          <Link
            to="/notices"
            className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
          >
            View All Notices
          </Link>

        </div>

      </div>

    </section>
  )
}

export default NoticesPreview