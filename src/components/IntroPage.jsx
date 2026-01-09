import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Smile } from 'lucide-react'

const IntroPage = () => {
  const qualities = [
    { icon: Smile, text: 'Your smile makes my heart skip a beat every time', delay: 1.5 },
    { icon: Heart, text: 'Your love fills every corner of my soul with warmth', delay: 2.5 },
    { icon: Sparkles, text: 'Being with you feels like living in a beautiful dream', delay: 3.5 },
    { icon: Star, text: 'You are the most amazing girlfriend in the world', delay: 4.5 }
  ]

  const textLines = [
    "Today is not just another day.",
    "It's the day my beautiful girlfriend was born,",
    "the day that made my world infinitely more beautiful."
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-16 border border-white/15"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <Heart className="w-16 h-16 md:w-20 md:h-20 text-pink-400" fill="currentColor" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 glow-text animate-romantic-float"
            >
              Happy Birthday
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0, y: 20, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-pink-400 mb-12"
            >
              Mahek
            </motion.h3>
            
            {/* Line-by-line text reveal */}
            <div className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light space-y-2">
              {textLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
                  animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
                  transition={{ 
                    delay: 0.8 + (index * 0.3), 
                    duration: 0.8, 
                    ease: "easeOut" 
                  }}
                  className={index === 1 ? "text-pink-300 font-medium" : ""}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
            className="relative my-16"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-pink-200/20"></div>
            </div>
            <div className="relative flex justify-center">
              <Sparkles className="w-6 h-6 text-pink-300 bg-black px-2" />
            </div>
          </motion.div>

          {/* Qualities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  delay: 2 + (index * 0.2), 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.02, 
                  x: 5,
                  boxShadow: "0 0 30px rgba(255, 182, 193, 0.2)"
                }}
                className="group flex items-center gap-6 p-8 rounded-2xl bg-white/8 border border-pink-200/20 hover:border-pink-300/40 transition-all duration-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-pink-400/20 flex items-center justify-center group-hover:bg-pink-400/30 transition-colors duration-500">
                    <quality.icon className="w-7 h-7 text-pink-300" />
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed">
                  {quality.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default IntroPage
