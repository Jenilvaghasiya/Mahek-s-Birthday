import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Crown } from 'lucide-react'

const TimelinePage = () => {
  const moments = [
    {
      icon: Heart,
      title: 'Your Beautiful Soul',
      description: 'The way you love with your whole heart makes me fall deeper for you every single day, my darling',
      position: 'left'
    },
    {
      icon: Sparkles,
      title: 'Your Gentle Touch',
      description: 'Every touch from you feels like pure magic, sending butterflies through my soul and making me feel so loved',
      position: 'right'
    },
    {
      icon: Star,
      title: 'Your Radiant Smile',
      description: 'Your smile lights up not just my day, but my entire existence - you are my sunshine, my everything',
      position: 'left'
    },
    {
      icon: Crown,
      title: 'Your Pure Heart',
      description: 'You are my princess, my dream girl, the most precious gift life could ever give me, Mahek',
      position: 'right'
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 py-20 pb-32 md:pb-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6 glow-text animate-romantic-float"
          >
            Why I Love You, Mahek
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-pink-300 text-lg font-light"
          >
            Every reason my heart beats for you
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Romantic Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pink-400 via-pink-300/50 to-transparent hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: moment.position === 'left' ? -50 : 50, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  delay: 0.8 + (index * 0.3), 
                  duration: 0.8, 
                  ease: "easeOut" 
                }}
                className={`flex items-center gap-8 ${
                  moment.position === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${moment.position === 'right' ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(255, 182, 193, 0.3)"
                    }}
                    className="glass rounded-2xl p-8 md:p-10 border border-pink-200/20 hover:border-pink-300/40 transition-all duration-700"
                  >
                    <div className={`flex items-center gap-6 mb-6 ${
                      moment.position === 'right' ? 'md:justify-end' : ''
                    }`}>
                      <div className="w-14 h-14 rounded-full bg-pink-400/20 flex items-center justify-center">
                        <moment.icon className="w-7 h-7 text-pink-300" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-pink-200">
                        {moment.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
                      {moment.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Heart Dot */}
                <div className="hidden md:block relative z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 0.8 + (index * 0.3) + 0.2, 
                      duration: 0.6, 
                      ease: "easeOut" 
                    }}
                    className="w-5 h-5 rounded-full bg-pink-400 border-4 border-black relative"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.6, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: index * 0.5,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-pink-400 rounded-full blur-md"
                    />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <div className="inline-block glass rounded-full px-10 py-6 border border-pink-300/40 animate-romantic-float">
            <p className="text-pink-300 text-lg md:text-xl font-cormorant italic">
              And a million more reasons why you're my perfect girlfriend...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TimelinePage
