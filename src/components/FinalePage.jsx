import { motion } from 'framer-motion'
import { Heart, Sparkles, Gift, Star } from 'lucide-react'

const FinalePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-4xl w-full space-y-12">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass rounded-3xl p-8 md:p-16 border border-white/15 text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="inline-block mb-12"
          >
            <div className="relative">
              <Heart className="w-20 h-20 text-pink-400 animate-romantic-float" fill="currentColor" strokeWidth={1.5} />
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-pink-400/40 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-playfair font-bold mb-12 glow-text"
          >
            A Message From My Heart
          </motion.h2>

          <div className="space-y-8 text-base md:text-lg text-gray-300 leading-relaxed font-light max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            >
              My Sweet Mahek, on this special day, I want you to know...
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 text-pink-200"
            >
              Every moment spent loving you is a moment that makes life absolutely magical
              <Heart className="w-5 h-5 text-pink-400 inline" fill="currentColor" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 text-pink-200"
            >
              Your smile has the power to heal my heart and brighten my darkest days
              <Sparkles className="w-5 h-5 text-pink-400 inline" />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
            >
              You're not just my girlfriend, you're my best friend, my soulmate, my everything, Mahek
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 3, duration: 1, ease: "easeOut" }}
              className="py-6"
            >
              <div className="w-40 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
              className="text-lg leading-relaxed"
            >
              I hope this year brings you everything your beautiful heart desires,
              all the happiness you deserve,
              and moments that take your breath away, my darling
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 1, ease: "easeOut" }}
              className="text-gray-400"
            >
              Keep shining, keep smiling, keep being the incredible girlfriend you are.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5, duration: 1, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 text-pink-200"
            >
              I am the luckiest boyfriend alive to call you mine, sweet Mahek
              <Star className="w-5 h-5 text-pink-400 inline" />
            </motion.p>
          </div>
        </motion.div>

        {/* Birthday Wish Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1.2, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-red-500 to-pink-800 opacity-90" />
          <div className="relative z-10 p-8 md:p-16 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 5.5, duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <Gift className="w-16 h-16 text-white mx-auto animate-romantic-float" strokeWidth={1.5} />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
              transition={{ delay: 6, duration: 1.2, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-playfair font-bold text-white mb-8"
            >
              My Birthday Wish For You
            </motion.h3>

            <div className="space-y-6 text-base md:text-lg text-white/90 leading-relaxed font-light max-w-2xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6, duration: 1, ease: "easeOut" }}
              >
                May your day be filled with laughter, love, and unforgettable moments
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6.5, duration: 1, ease: "easeOut" }}
              >
                May all your dreams come true, starting today
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 7, duration: 1, ease: "easeOut" }}
              >
                And may you always know how deeply, truly, completely you are loved
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 8, duration: 1.5, ease: "easeOut" }}
                className="pt-12"
              >
                <p className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
                  Happy Birthday My Love Mahek
                </p>
                <div className="flex items-center justify-center gap-6 mt-8">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 9, duration: 1 }}
                    className="text-lg font-light"
                  >
                    Forever Your Loving Boyfriend
                  </motion.span>
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Final Animated GIF */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9, duration: 1.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.01, 1],
              y: [0, -3, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl overflow-hidden border-4 border-pink-400/60 shadow-2xl shadow-pink-400/30"
          >
            <img 
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGQ4YmNqcmFleWQzaGJrOTZiNXpyMWNyY2x3Z2lwa2kycG5tbTJoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SYo1DFS8NLhhqzzjMU/giphy.gif"
              alt="Birthday Celebration"
              className="w-full max-w-md md:max-w-lg h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default FinalePage
