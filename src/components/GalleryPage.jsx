import { motion } from 'framer-motion'
import { Heart, Camera } from 'lucide-react'

const GalleryPage = () => {
  const photos = [
    { image: "/images/6.jpeg", title: 'Our Beautiful Memories' },
    { image: "/images/4.jpeg", title: 'Moments Together' },
    { image: "/images/8.jpeg", title: 'Your Radiant Smile' },
    { image: "/images/9.jpeg", title: 'Adventures We Share' },
    { image: "/images/5.jpeg", title: 'Love in Every Frame' },
    { image: "/images/2.jpeg", title: 'Forever Moments' }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-32 md:pb-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <Camera className="w-16 h-16 text-pink-400 mx-auto animate-romantic-float" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "normal" }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6 glow-text"
          >
            My Beautiful Mahek
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-gray-400 text-lg font-light"
          >
            Capturing the beauty of our love story
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="glass rounded-3xl p-6 md:p-12 border border-white/15"
        >
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.8 + (index * 0.15), 
                  duration: 0.6, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(255, 182, 193, 0.3)"
                }}
                className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Photo Display */}
                {photo.image ? (
                  <motion.img
                    src={photo.image}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-900/30 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300 mx-auto mb-2 sm:mb-3 animate-romantic-float" />
                      <span className="text-pink-200 text-xs sm:text-sm font-light">Add Photos</span>
                    </div>
                  </div>
                )}
                
                {/* Soft overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                
                {/* Gentle border */}
                <div className="absolute inset-0 border-2 border-pink-200/20 group-hover:border-pink-300/40 rounded-xl sm:rounded-2xl transition-colors duration-700" />
                
                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center p-3 sm:p-4 md:p-6">
                  <div className="text-center">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300 mx-auto mb-1 sm:mb-2 animate-pulse" />
                    <span className="text-white text-xs sm:text-sm font-light">{photo.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl font-cormorant italic text-pink-300 animate-romantic-float">
            "Every moment with you feels like a beautiful love story, my darling Mahek"
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default GalleryPage
