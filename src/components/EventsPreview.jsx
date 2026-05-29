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

function EventsPreview() {

  const [events, setEvents] = useState([])

  useEffect(() => {

    const q = query(
      collection(db, "events"),
      orderBy("createdAt", "desc"),
      limit(3)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const eventsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setEvents(eventsArray)

    })

    return () => unsubscribe()

  }, [])

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-widest text-blue-900 font-semibold">
            School Activities
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Latest Events
          </h2>

        </div>

        {/* Events */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {events.map((event) => (

            <div
              key={event.id}
              className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition"
            >

              <h3 className="text-2xl font-bold text-gray-900">
                {event.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {event.description.slice(0, 120)}...
              </p>

            </div>

          ))}

        </div>

        {/* Button */}
        <div className="mt-16 text-center">

          <Link
            to="/events"
            className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
          >
            View All Events
          </Link>

        </div>

      </div>

    </section>
  )
}

export default EventsPreview