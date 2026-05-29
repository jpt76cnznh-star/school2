import { useEffect, useState } from "react"

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore"

import { db } from "../firebase"

function ImportantNotice() {

  const [latestNotice, setLatestNotice] = useState("")

  useEffect(() => {

    const q = query(
      collection(db, "notices"),
      orderBy("createdAt", "desc"),
      limit(1)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const notice = snapshot.docs[0]?.data()

      if (notice) {
        setLatestNotice(notice.title)
      }

    })

    return () => unsubscribe()

  }, [])

  return (

    <div className="bg-yellow-400 py-3 overflow-hidden">

      <div className="whitespace-nowrap animate-marquee text-black font-semibold text-lg">

        📢 Important Notice:
        {latestNotice || " No notices available right now."}

      </div>

    </div>
  )
}

export default ImportantNotice