import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Navigation = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <>
      {/* Navigation Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-4 z-50">
        {currentPage > 1 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 182, 193, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onPrev}
            className="p-4 bg-white/10 backdrop-blur-lg border border-pink-200/30 rounded-full hover:bg-pink-500/20 transition-all duration-500 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-pink-200 transition-colors duration-300" />
          </motion.button>
        )}

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 40px rgba(255, 182, 193, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full font-semibold hover:from-pink-400 hover:to-red-300 transition-all duration-500 shadow-lg flex items-center gap-3"
        >
          {currentPage === totalPages - 1 ? (
            <>
              <span>Start Over</span>
              <ChevronLeft className="w-5 h-5" />
            </>
          ) : (
            <>
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </div>

      {/* Page Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50"
      >
        <div className="flex items-center gap-3 glass rounded-full px-5 py-3 border border-pink-200/20">
          {Array.from({ length: totalPages - 1 }, (_, i) => i + 1).map((page) => (
            <motion.div
              key={page}
              className={`rounded-full transition-all duration-500 ${
                currentPage === page
                  ? 'bg-pink-400 w-8 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-pink-300/60'
              }`}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: currentPage === page ? [1, 1.1, 1] : 1,
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: currentPage === page ? Infinity : 0,
                  ease: "easeInOut"
                }
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Navigation
