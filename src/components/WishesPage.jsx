import { motion } from 'framer-motion'
import { Heart, Mail, Sparkles } from 'lucide-react'

const WishesPage = () => {
  const letterLines = [
    "My Dearest Mahek,",
    "",
    "Every time I look into your eyes, I fall in love all over again",
    "Your smile is the most beautiful sight in my entire world",
    "You make every ordinary moment feel like pure magic",
    "",
    "On your special day, I want you to know...",
    "",
    "You deserve all the love and happiness the universe can offer",
    "You are my greatest blessing, my sweetest dream come true",
    "My love for you grows deeper with every heartbeat",
    "",
    "With all my heart and endless devotion,",
    "Your loving boyfriend who adores you completely"
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <Mail className="w-16 h-16 text-pink-400 mx-auto animate-romantic-float" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
            transition={{ delay: 1, duration: 2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6 glow-text"
          >
            A Letter From My Heart
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-16 border-2 border-pink-300/40 relative overflow-hidden"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-300/40" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-pink-300/40" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-pink-300/40" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-300/40" />

          <div className="relative z-10 space-y-6 text-center max-w-2xl mx-auto">
            {letterLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 30,
                  filter: "blur(4px)"
                }}
                animate={{ 
                  opacity: line === "" ? 0.5 : 1, 
                  y: 0,
                  filter: "blur(0px)"
                }}
                transition={{ 
                  delay: 2 + (index * 0.8), 
                  duration: 1.8, 
                  ease: "easeOut" 
                }}
                className={`
                  ${index === 0 ? "text-2xl md:text-3xl font-cormorant italic text-pink-300 mb-6" : ""}
                  ${index === letterLines.length - 2 ? "text-gray-400 font-light mt-8" : ""}
                  ${index === letterLines.length - 1 ? "text-xl font-cormorant italic text-pink-300" : ""}
                  ${line === "" ? "h-4" : "text-lg md:text-xl text-gray-300 leading-relaxed font-light"}
                `}
              >
                {line === "" ? (
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent mx-auto" />
                ) : (
                  <p className="flex items-center justify-center gap-3">
                    {line}
                    {(line.includes("heart skips") || line.includes("most beautiful") || line.includes("happiness")) && (
                      <Heart className="w-4 h-4 text-pink-400 inline animate-pulse" fill="currentColor" />
                    )}
                    {line.includes("magical") && (
                      <Sparkles className="w-4 h-4 text-pink-400 inline" />
                    )}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Floating Hearts */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-12 opacity-20"
          >
            <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2, ease: "easeInOut" }}
            className="absolute bottom-12 left-12 opacity-20"
          >
            <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 4, ease: "easeInOut" }}
            className="absolute top-1/2 left-8 opacity-15"
          >
            <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WishesPage
