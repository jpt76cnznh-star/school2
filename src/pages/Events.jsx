import { useEffect, useState } from "react"

import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore"

import { db } from "../firebase"

// Import Event Images
import event1 from "../assets/event1.jpg"
import event2 from "../assets/event2.jpg"
import event3 from "../assets/event3.jpg"

// Image Array
const eventImages = [
  event1,
  event2,
  event3,
]

function Events() {

  const [events, setEvents] = useState([])

  useEffect(() => {

    const q = query(
      collection(db, "events"),
      orderBy("createdAt", "desc")
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

    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-widest text-blue-900 font-semibold">
            School Events
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Events & Activities
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore school activities, programs,
            competitions, celebrations, and upcoming events.
          </p>

        </div>

        {/* Events */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">

          {events.map((event, index) => (

            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1 transition"
            >

              {/* Event Image */}
              <img
                src={eventImages[index % eventImages.length]}
                alt={event.title}
                className="w-full h-64 object-cover"
              />

              {/* Event Content */}
              <div className="p-8">

                <h2 className="text-3xl font-bold text-gray-900">
                  {event.title}
                </h2>

                <p className="mt-6 text-gray-600 leading-7">
                  {event.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Events