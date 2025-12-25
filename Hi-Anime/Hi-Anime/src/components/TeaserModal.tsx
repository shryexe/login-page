import { useEffect, useRef } from 'react'
import { Anime } from '../App'

interface TeaserModalProps {
  anime: Anime | null
  onClose: () => void
}

const TeaserModal = ({ anime, onClose }: TeaserModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (anime && videoRef.current) {
      // Play video
      videoRef.current.play().catch(console.error)
      
      // Play Japanese sound effect using Web Audio API
      const playJapaneseSound = () => {
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()
          
          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)
          
          // Create a Japanese-style sound (like a bell or chime)
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
          oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)
          
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
          
          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.3)
        } catch (error) {
          console.log('Audio context not available')
        }
      }
      
      playJapaneseSound()

      // Auto close after 10 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 10000)

      return () => {
        clearTimeout(timer)
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }
    }
  }, [anime, onClose])

  if (!anime) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >

      <div 
        className="relative w-full max-w-4xl mx-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: 'perspective(1000px) rotateX(0deg)',
          animation: 'fadeInScale 0.3s ease-out'
        }}
      >
        {/* Manga Frame Decoration */}
        <div className="absolute inset-0 border-4 border-white/30 pointer-events-none" style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          boxShadow: 'inset 0 0 50px rgba(255,255,255,0.1)'
        }}></div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
          >
            <source src="https://cdn.coverr.co/videos/coverr-floating-smoke-6761/1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay with Anime Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 gradient-text">
              {anime.title}
            </h2>
            {anime.description && (
              <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl">
                {anime.description}
              </p>
            )}
            <div className="flex items-center space-x-4 mt-4">
              <button className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-300 transition-colors">
                Watch Now
              </button>
              <button className="px-6 py-2 bg-white/20 backdrop-blur-md text-white font-bold rounded border border-white/30 hover:bg-white/30 transition-colors">
                Add to List
              </button>
            </div>
          </div>

          {/* Timer Indicator */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-white font-bold text-sm">10秒</span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-white/20 z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export default TeaserModal

