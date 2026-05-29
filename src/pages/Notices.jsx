import { useEffect, useState } from "react"

import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore"

import { db } from "../firebase"

function Notices() {

  const [notices, setNotices] = useState([])

  useEffect(() => {

    const q = query(
      collection(db, "notices"),
      orderBy("createdAt", "desc")
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

    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-widest text-blue-900 font-semibold">
            School Notices
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Notices & Announcements
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest school announcements,
            events, academic updates, and important information.
          </p>

        </div>

        {/* Notices */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">

          {notices.map((notice) => (

            <div
              key={notice.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition"
            >

              {/* Top */}
              <div className="flex items-center justify-between">

                <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                  {notice.category}
                </span>

              </div>

              {/* Content */}
              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                {notice.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {notice.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Notices