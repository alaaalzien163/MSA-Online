import Hero from '../components/sections/Hero.jsx'
import About from '../components/sections/About.jsx'
import Jobs from '../components/sections/Jobs.jsx'

/**
 * Home page.
 *
 * Assembles the homepage sections. "Build Your CV" and "Contact" navigate to
 * the dedicated /contact page rather than on-page anchors.
 */
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Jobs />
    </>
  )
}

export default Home
