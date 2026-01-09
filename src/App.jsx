import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WelcomePage from './components/WelcomePage'
import IntroPage from './components/IntroPage'
import TimelinePage from './components/TimelinePage'
import GalleryPage from './components/GalleryPage'
import WishesPage from './components/WishesPage'
import InteractivePage from './components/InteractivePage'
import FinalePage from './components/FinalePage'
import PremiumBookDemo from './components/PremiumBookDemo'
import Background from './components/Background'
import Navigation from './components/Navigation'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 8

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Changed to instant for immediate effect
    })
  }, [currentPage])

  // Prevent scroll restoration on page reload
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  const pages = [
    <WelcomePage key="welcome" onNext={() => {
      window.scrollTo(0, 0)
      setCurrentPage(1)
    }} />,
    <IntroPage key="intro" />,
    <TimelinePage key="timeline" />,
    <GalleryPage key="gallery" />,
    <WishesPage key="wishes" />,
    <InteractivePage key="interactive" />,
    <PremiumBookDemo key="book" />,
    <FinalePage key="finale" />
  ]

  const nextPage = () => {
    // Immediately scroll to top
    window.scrollTo(0, 0)
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    // Immediately scroll to top
    window.scrollTo(0, 0)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black page-container">
      <Background />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="relative z-10 scroll-top"
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>

      {currentPage > 0 && (
        <Navigation 
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={nextPage}
          onPrev={prevPage}
        />
      )}

      <MusicPlayer />
    </div>
  )
}

export default App
