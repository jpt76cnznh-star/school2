import { useEffect, useState } from "react"

function BackToTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener("scroll", toggleVisibility)

    return () =>
      window.removeEventListener("scroll", toggleVisibility)

  }, [])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  }

  return (
    <>
      {visible && (

        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-900 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-800 transition z-50"
        >
          ↑
        </button>

      )}
    </>
  )
}

export default BackToTop