import { useEffect, useState } from 'react'

const Background = () => {
  const [heartParticles, setHeartParticles] = useState([])

  useEffect(() => {
    // Reduce particles for better performance
    const particleArray = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 2 + 3,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }))
    setHeartParticles(particleArray)
  }, [])

  return (
    <>
      {/* Simple gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0" />
      
      {/* Light accent overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-pink-900/10 via-transparent to-transparent z-0" />
      
      {/* Reduced heart particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {heartParticles.map(particle => (
          <div
            key={particle.id}
            className="particle absolute opacity-30"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
    </>
  )
}

export default Background
