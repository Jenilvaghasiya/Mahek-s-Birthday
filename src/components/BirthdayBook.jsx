import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart, Gift, Sparkles, X } from 'lucide-react'

const BirthdayBook = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)

  // Romantic pages with love messages
  const pages = [
    {
      image: "/images/1.jpeg",
      wish: "Happy Birthday My Beautiful Mahek! 💕 You are the light of my life, the beat of my heart, and the love of my soul. Every day with you is a blessing that makes me the happiest boyfriend in the world.",
      pageNumber: 1
    },
    {
      image: "/images/10.jpeg",
      wish: "My Sweet Mahek, you make every moment magical just by being you. Your smile, your laugh, your gentle touch - everything about you fills my heart with pure joy and endless love. 💖",
      pageNumber: 2
    },
    {
      image: "/images/7.jpeg",
      wish: "To my darling Mahek, my best friend, my everything - may this birthday bring you all the happiness you bring to my life every single day. You deserve the entire universe, my love. ✨",
      pageNumber: 3
    },
    {
      image: "/images/6.jpeg",
      wish: "My Love Mahek, watching you grow more beautiful with each passing year fills me with wonder. You are my greatest adventure and my safest home, my perfect girlfriend. 🌹",
      pageNumber: 4
    },
    {
      image: "/images/5.jpeg",
      wish: "Happy Birthday to the girl who stole my heart and made it her home. Mahek, I love you more than words can express, more than time can measure. Forever your devoted boyfriend. 💝",
      pageNumber: 5
    }
  ]

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + 1)
        setIsFlipping(false)
      }, 800)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev - 1)
        setIsFlipping(false)
      }, 800)
    }
  }

  const openBook = () => {
    setIsOpen(true)
  }

  const closeBook = () => {
    setIsOpen(false)
    setCurrentPage(0)
  }

  if (!isOpen) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">

        {/* Closed Book */}
        <motion.div
          className="relative cursor-pointer"
          onClick={openBook}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 50px rgba(255, 182, 193, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-72 h-96 md:w-80 md:h-[420px] bg-gradient-to-r from-pink-900 via-red-800 to-pink-900 rounded-lg shadow-2xl relative overflow-hidden border border-pink-300/40">
            {/* Book cover design */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            
            {/* Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-8"
              >
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-pink-300 mx-auto" fill="currentColor" />
              </motion.div>
              
              <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-4 tracking-wide text-white glow-text">
                My Love
              </h1>
              <h2 className="text-xl md:text-2xl font-playfair text-pink-300 mb-8">
                Memories
              </h2>
              
              <div className="flex items-center gap-3 text-pink-200">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-pink-300 animate-pulse" />
                <span className="text-xs md:text-sm font-light">Click to open our story</span>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-pink-300 animate-pulse" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <Gift className="w-6 h-6 md:w-8 md:h-8 text-pink-400/60" />
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-pink-300/40 rounded-full flex items-center justify-center">
                <span className="text-pink-300 text-xs font-bold">{pages.length}</span>
              </div>
            </div>

            {/* Romantic shine effect */}
            <motion.div
              animate={{ x: [-100, 400] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200/20 to-transparent transform -skew-x-12"
            />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-2 md:p-4 relative overflow-hidden">

      {/* Open Book */}
      <div className="relative w-full max-w-6xl">
        <div className="book-container relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] perspective-1000">
          {/* Book base */}
          <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-pink-100 rounded-lg shadow-2xl transform-gpu">
            
            {/* Left page - Image */}
            <div className="absolute left-0 top-0 w-1/2 h-full bg-white rounded-l-lg shadow-inner overflow-hidden">
              <div className="p-1 sm:p-2 md:p-4 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  {pages[currentPage].image ? (
                    <img
                      src={pages[currentPage].image}
                      alt={`Memory ${currentPage + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      style={{ objectPosition: 'center' }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center border border-pink-200/50">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" fill="currentColor" />
                        </div>
                        <span className="text-pink-600 text-xs sm:text-sm font-light">Our Beautiful Memories</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-center text-pink-400 text-xs md:text-sm font-serif mt-1 sm:mt-2">
                  {pages[currentPage].pageNumber}
                </div>
              </div>
            </div>

            {/* Right page - Love Message */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white rounded-r-lg shadow-inner overflow-hidden">
              <div className="p-2 sm:p-3 md:p-6 h-full flex flex-col">
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-center mb-2 sm:mb-3 md:mb-4">
                    <div className="inline-flex items-center gap-1 md:gap-2 bg-gradient-to-r from-pink-500 to-red-400 text-white px-2 md:px-3 py-1 rounded-full text-xs mb-2 sm:mb-3 md:mb-4">
                      <Heart className="w-2 h-2 md:w-3 md:h-3" fill="currentColor" />
                      <span className="text-xs">Love Note {currentPage + 1}</span>
                    </div>
                  </div>

                  <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-xs sm:text-sm md:text-lg font-playfair text-pink-800 mb-2 md:mb-3">
                      From My Heart to Yours
                    </h3>
                    
                    <p className="text-xs sm:text-xs md:text-sm text-gray-700 leading-relaxed px-1 md:px-2 font-light">
                      {pages[currentPage].wish}
                    </p>

                    <div className="flex justify-center gap-1 md:gap-2 mt-3 sm:mt-4 md:mt-6">
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-pink-400 animate-pulse" />
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 animate-pulse" fill="currentColor" />
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-pink-400 animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="text-center text-pink-400 text-xs md:text-sm font-serif">
                  {pages[currentPage].pageNumber}
                </div>
              </div>
            </div>

            {/* Center spine */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-pink-300 to-pink-500 transform -translate-x-1/2 shadow-lg z-10"></div>

            {/* Page flip animation overlay */}
            {isFlipping && (
              <div className="absolute inset-0 pointer-events-none z-20">
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flip-page absolute right-0 top-0 w-1/2 h-full bg-white rounded-r-lg shadow-2xl transform-gpu origin-left overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1 md:left-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-500/80 transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed border border-pink-200/30"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-1 md:right-4">
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1 || isFlipping}
            className="w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-500/80 transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed border border-pink-200/30"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={closeBook}
          className="absolute top-2 md:top-4 right-2 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-500/80 transition-all duration-500 border border-pink-200/30"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Page Counter */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-1 md:py-2 text-white text-xs md:text-sm border border-pink-200/30">
          {currentPage + 1} / {pages.length}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-200/30 rounded-b-lg">
          <div 
            className="h-full bg-gradient-to-r from-pink-400 to-red-400 transition-all duration-700 rounded-b-lg"
            style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default BirthdayBook