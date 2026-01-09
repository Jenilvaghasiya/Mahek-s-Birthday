import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Volume2, Play } from 'lucide-react'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleCanPlay = () => setIsLoaded(true)
      const handleError = (e) => {
        console.log('Audio load error:', e)
        setIsLoaded(false)
      }
      
      audio.addEventListener('canplaythrough', handleCanPlay)
      audio.addEventListener('error', handleError)
      
      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlay)
        audio.removeEventListener('error', handleError)
      }
    }
  }, [])

  const toggleMusic = async () => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }
    
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          // Set volume
          audioRef.current.volume = 0.4
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log('Audio play failed:', error)
        setIsPlaying(false)
      }
    }
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 30px rgba(255, 182, 193, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-50 p-4 glass rounded-full border border-pink-200/30 hover:border-pink-300/50 transition-all duration-500 group"
        title={isLoaded ? (isPlaying ? "Pause Tum Ho Toh Saiyaara" : "Play Tum Ho Toh Saiyaara") : "Loading..."}
      >
        {!isLoaded ? (
          <Music className="w-6 h-6 text-pink-300/60 animate-pulse" />
        ) : isPlaying ? (
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Volume2 className="w-6 h-6 text-pink-400" />
          </motion.div>
        ) : (
          <Play className="w-6 h-6 text-pink-200/80 group-hover:text-pink-300 transition-colors duration-300" />
        )}
        
        {/* Romantic glow effect when playing */}
        {isPlaying && (
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-pink-400/30 rounded-full blur-lg -z-10"
          />
        )}
      </motion.button>

      <audio 
        ref={audioRef} 
        loop
        preload="auto"
      >
        <source
          src="/Tum Ho Toh Saiyaara 320 Kbps.mp3"
          type="audio/mpeg"
        />
        <source
          src="/song/Tum Ho Toh Saiyaara 320 Kbps.mp3"
          type="audio/mpeg"
        />
        <source
          src="/song/tum-ho-toh-saiyaara.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  )
}

export default MusicPlayer
