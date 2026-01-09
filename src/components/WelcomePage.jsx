import { motion } from 'framer-motion'
import { Gift, Sparkles } from 'lucide-react'

const WelcomePage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="inline-block mb-12"
          >
            <Gift className="w-20 h-20 md:w-32 md:h-32 text-pink-400 mx-auto" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold glow-text animate-romantic-float">
              Something Special
            </h1>
            {/* Soft heartbeat glow behind text */}
            <div className="absolute inset-0 -z-10">
              <div className="w-full h-full bg-pink-500/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <Sparkles className="w-6 h-6 text-pink-300 animate-pulse" />
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Awaits You, My Beautiful Mahek
            </p>
            <Sparkles className="w-6 h-6 text-pink-300 animate-pulse" />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 40px rgba(255, 182, 193, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="group relative px-12 py-5 bg-gradient-to-r from-pink-600 to-red-500 text-white text-lg md:text-xl font-semibold rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3">
              Open Your Gift
              <Gift className="w-5 h-5 group-hover:rotate-6 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-20 text-sm text-gray-500 font-light tracking-widest uppercase"
          >
            Scroll down to begin our journey
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WelcomePage
