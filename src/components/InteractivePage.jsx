import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { Gift, Heart, Sparkles, Zap, X } from 'lucide-react'

const InteractivePage = () => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [floatingHearts, setFloatingHearts] = useState([])

  const surprises = [
    "You're the reason my heart beats with pure joy every single day, my love",
    "Your happiness means everything to me - you deserve all the love in the universe",
    "You are absolutely perfect in every way, my beautiful girlfriend",
    "My world became a paradise the moment you became mine, Mahek",
    "Being your boyfriend is the greatest blessing of my entire life"
  ]

  const specialMessages = [
    "You make the world infinitely more beautiful just by existing in it",
    "Your smile is the most gorgeous sight my eyes have ever witnessed",
    "I'm so grateful destiny brought you into my life, my darling",
    "You're the reason I believe in forever and always, sweet Mahek",
    "Every day with you feels like the most precious gift imaginable"
  ]

  const openGiftBox = () => {
    const surprise = surprises[Math.floor(Math.random() * surprises.length)]
    setModalContent(surprise)
    setShowModal(true)
    triggerGentleConfetti()
  }

  const showSpecialMessage = () => {
    const message = specialMessages[Math.floor(Math.random() * specialMessages.length)]
    setModalContent(message)
    setShowModal(true)
  }

  const triggerGentleConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000) // Reduced from 8000
  }

  const createGentleHeartFloat = () => {
    const newHearts = Array.from({ length: 6 }, (_, i) => ({ // Reduced from 12
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
      delay: i * 300 // Increased delay
    }))
    
    setFloatingHearts(prev => [...prev, ...newHearts])
    
    // Remove hearts after animation
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(heart => !newHearts.includes(heart)))
    }, 4000) // Reduced from 6000
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={['#FFB6C1', '#FFC0CB', '#FF69B4']}
          numberOfPieces={50} // Reduced from 100
          recycle={false}
          gravity={0.2} // Reduced from 0.3
          wind={0.005} // Reduced from 0.01
        />
      )}

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <AnimatePresence>
          {floatingHearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ 
                x: heart.x, 
                y: heart.y, 
                opacity: 0, 
                scale: 0.5 
              }}
              animate={{ 
                y: heart.y - 400, 
                opacity: [0, 1, 1, 0], 
                scale: [0.5, 1, 1, 0.8],
                x: heart.x + (Math.random() - 0.5) * 100
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 4, 
                delay: heart.delay / 1000,
                ease: "easeOut" 
              }}
              className="absolute"
            >
              <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6 glow-text animate-romantic-float"
          >
            Special Surprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="text-pink-300 text-lg font-light"
          >
            Touch to reveal the magic of our love
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/15"
        >
          {/* Gift Box */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 50px rgba(255, 182, 193, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openGiftBox}
              className="inline-block rounded-3xl overflow-hidden border-4 border-pink-300/50 hover:border-pink-400/70 transition-all duration-700 shadow-2xl"
            >
              <img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2k4bXFiYWh2MzRjNm9uZmdqM3ZnaHRmendyanJ3eTVmdHA3OGh4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gjHkRHSuHqu99y9Yjt/giphy.gif"
                alt="Gift Box"
                className="w-48 h-48 md:w-64 md:h-64 object-cover"
              />
            </motion.button>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1.5 }}
              className="mt-8 text-pink-200 font-light"
            >
              Click the gift to open your surprise
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                x: 5,
                boxShadow: "0 0 30px rgba(255, 182, 193, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={createGentleHeartFloat}
              className="group flex items-center justify-center gap-4 p-8 rounded-2xl bg-white/8 border border-pink-200/20 hover:border-pink-300/40 transition-all duration-700"
            >
              <Heart className="w-6 h-6 text-pink-300 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-lg font-light text-gray-200">Floating Hearts</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                x: -5,
                boxShadow: "0 0 30px rgba(255, 182, 193, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={showSpecialMessage}
              className="group flex items-center justify-center gap-4 p-8 rounded-2xl bg-white/8 border border-pink-200/20 hover:border-pink-300/40 transition-all duration-700"
            >
              <Sparkles className="w-6 h-6 text-pink-300 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-lg font-light text-gray-200">Love Message</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                x: 5,
                boxShadow: "0 0 30px rgba(255, 182, 193, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={triggerGentleConfetti}
              className="group flex items-center justify-center gap-4 p-8 rounded-2xl bg-white/8 border border-pink-200/20 hover:border-pink-300/40 transition-all duration-700"
            >
              <Zap className="w-6 h-6 text-pink-300 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-lg font-light text-gray-200">Celebration</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02, 
                x: -5,
                boxShadow: "0 0 40px rgba(255, 182, 193, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                openGiftBox()
                createGentleHeartFloat()
              }}
              className="group flex items-center justify-center gap-4 p-8 rounded-2xl bg-pink-400/20 border border-pink-300/40 hover:border-pink-400/60 transition-all duration-700"
            >
              <Gift className="w-6 h-6 text-pink-300 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-lg font-light text-gray-200">Surprise Me!</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-lg w-full rounded-3xl p-8 md:p-12 border-2 border-pink-300/40 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-pink-200" />
              </button>

              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block mb-8"
                >
                  <Heart className="w-16 h-16 text-pink-400 mx-auto" fill="currentColor" />
                </motion.div>

                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-10">
                  {modalContent}
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full hover:from-pink-400 hover:to-red-300 transition-all duration-500"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractivePage
