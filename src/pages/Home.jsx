import Hero from "../components/Hero"
import ImportantNotice from "../components/ImportantNotice"
import About from "../components/About"
import Highlights from "../components/Highlights"

import EventsPreview from "../components/EventsPreview"
import CTA from "../components/CTA"
import NoticesPreview from "../components/NoticesPreview"
function Home() {
  return (
    <>
      <Hero />
      <ImportantNotice />
      <About />
      <Highlights />
    
      <EventsPreview />
      <CTA />
      <NoticesPreview />
    </>
  )
}

export default Home