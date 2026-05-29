import { useEffect, useState } from "react"

import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"

import { signOut } from "firebase/auth"

import { db, auth } from "../firebase"

function Admin() {

  // Logout
  const handleLogout = async () => {

    await signOut(auth)

    alert("Logged Out")

  }

  // Notice States
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  // Notices Data
  const [notices, setNotices] = useState([])

  // Notice Edit States
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")

  // Event States
  const [eventTitle, setEventTitle] = useState("")
  const [eventDescription, setEventDescription] = useState("")

  // Events Data
  const [events, setEvents] = useState([])

  // Event Edit States
  const [editingEventId, setEditingEventId] = useState(null)

  const [editEventTitle, setEditEventTitle] = useState("")

  const [editEventDescription, setEditEventDescription] = useState("")

  // Fetch Notices
  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "notices"),
      (snapshot) => {

        const noticesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setNotices(noticesArray)

      }
    )

    return () => unsubscribe()

  }, [])

  // Fetch Events
  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "events"),
      (snapshot) => {

        const eventsArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setEvents(eventsArray)

      }
    )

    return () => unsubscribe()

  }, [])

  // Add Notice
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await addDoc(collection(db, "notices"), {

        title,
        category,
        description,
        createdAt: serverTimestamp(),

      })

      alert("Notice Added Successfully")

      setTitle("")
      setCategory("")
      setDescription("")

    } catch (error) {

      console.log(error)

      alert("Error adding notice")

    }

  }

  // Add Event
  const handleEventSubmit = async (e) => {

    e.preventDefault()

    try {

      await addDoc(collection(db, "events"), {

        title: eventTitle,
        description: eventDescription,
        createdAt: serverTimestamp(),

      })

      alert("Event Added")

      setEventTitle("")
      setEventDescription("")

    } catch (error) {

      console.log(error)

      alert("Error adding event")

    }

  }

  // Delete Notice
  const handleDelete = async (id) => {

    try {

      await deleteDoc(doc(db, "notices", id))

      alert("Notice Deleted")

    } catch (error) {

      console.log(error)

      alert("Error deleting notice")

    }

  }

  // Update Notice
  const handleUpdate = async (id) => {

    try {

      await updateDoc(doc(db, "notices", id), {

        title: editTitle,
        description: editDescription,

      })

      alert("Notice Updated")

      setEditingId(null)

    } catch (error) {

      console.log(error)

      alert("Error updating notice")

    }

  }

  // Delete Event
  const handleEventDelete = async (id) => {

    try {

      await deleteDoc(doc(db, "events", id))

      alert("Event Deleted")

    } catch (error) {

      console.log(error)

      alert("Error deleting event")

    }

  }

  // Update Event
  const handleEventUpdate = async (id) => {

    try {

      await updateDoc(doc(db, "events", id), {

        title: editEventTitle,
        description: editEventDescription,

      })

      alert("Event Updated")

      setEditingEventId(null)

    } catch (error) {

      console.log(error)

      alert("Error updating event")

    }

  }

  return (

    <section className="pt-32 pb-24 min-h-screen bg-gray-50">

      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-white shadow-xl rounded-3xl p-10">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-blue-900">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-gray-600">
            Manage notices and events.
          </p>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>

          {/* Add Notice */}
          <div className="mt-16">

            <h2 className="text-3xl font-bold text-blue-900">
              Add Notice
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-6"
            >

              <input
                type="text"
                placeholder="Notice Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-4 rounded-xl outline-none"
                required
              />

              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-4 rounded-xl outline-none"
                required
              />

              <textarea
                placeholder="Notice Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-4 rounded-xl outline-none h-40 resize-none"
                required
              />

              <button
                type="submit"
                className="bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-800 transition"
              >
                Add Notice
              </button>

            </form>

          </div>

          {/* Existing Notices */}
          <div className="mt-20">

            <h2 className="text-3xl font-bold text-blue-900">
              Existing Notices
            </h2>

            <div className="mt-8 flex flex-col gap-6">

              {notices.map((notice) => (

                <div
                  key={notice.id}
                  className="bg-gray-100 p-6 rounded-2xl"
                >

                  {editingId === notice.id ? (

                    <>

                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="border p-3 rounded-xl w-full"
                      />

                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="border p-3 rounded-xl w-full mt-4 h-32"
                      />

                      <button
                        onClick={() => handleUpdate(notice.id)}
                        className="mt-4 bg-green-600 text-white px-5 py-2 rounded-xl"
                      >
                        Save
                      </button>

                    </>

                  ) : (

                    <>

                      <h3 className="text-xl font-semibold">
                        {notice.title}
                      </h3>

                      <p className="mt-2 text-gray-600">
                        {notice.description}
                      </p>

                      <div className="flex gap-4 mt-4">

                        <button
                          onClick={() => {

                            setEditingId(notice.id)

                            setEditTitle(notice.title)

                            setEditDescription(notice.description)

                          }}
                          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(notice.id)}
                          className="bg-red-500 text-white px-5 py-2 rounded-xl"
                        >
                          Delete
                        </button>

                      </div>

                    </>

                  )}

                </div>

              ))}

            </div>

          </div>

          {/* Add Event */}
          <div className="mt-20">

            <h2 className="text-3xl font-bold text-blue-900">
              Add Event
            </h2>

            <form
              onSubmit={handleEventSubmit}
              className="mt-8 flex flex-col gap-6"
            >

              <input
                type="text"
                placeholder="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="border p-4 rounded-xl outline-none"
                required
              />

              <textarea
                placeholder="Event Description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="border p-4 rounded-xl outline-none h-40 resize-none"
                required
              />

              <button
                type="submit"
                className="bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition"
              >
                Add Event
              </button>

            </form>

          </div>

          {/* Existing Events */}
          <div className="mt-20">

            <h2 className="text-3xl font-bold text-blue-900">
              Existing Events
            </h2>

            <div className="mt-8 flex flex-col gap-6">

              {events.map((event) => (

                <div
                  key={event.id}
                  className="bg-gray-100 p-6 rounded-2xl"
                >

                  {editingEventId === event.id ? (

                    <>

                      <input
                        type="text"
                        value={editEventTitle}
                        onChange={(e) => setEditEventTitle(e.target.value)}
                        className="border p-3 rounded-xl w-full"
                      />

                      <textarea
                        value={editEventDescription}
                        onChange={(e) => setEditEventDescription(e.target.value)}
                        className="border p-3 rounded-xl w-full mt-4 h-32"
                      />

                      <button
                        onClick={() => handleEventUpdate(event.id)}
                        className="mt-4 bg-green-600 text-white px-5 py-2 rounded-xl"
                      >
                        Save
                      </button>

                    </>

                  ) : (

                    <>

                      <h3 className="text-xl font-semibold">
                        {event.title}
                      </h3>

                      <p className="mt-2 text-gray-600">
                        {event.description}
                      </p>

                      <div className="flex gap-4 mt-4">

                        <button
                          onClick={() => {

                            setEditingEventId(event.id)

                            setEditEventTitle(event.title)

                            setEditEventDescription(event.description)

                          }}
                          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleEventDelete(event.id)}
                          className="bg-red-500 text-white px-5 py-2 rounded-xl"
                        >
                          Delete
                        </button>

                      </div>

                    </>

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Admin