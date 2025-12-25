import { useEffect, useRef } from 'react'
import { Anime } from '../App'

interface HeroProps {
  featuredAnime: Anime
}

const Hero = ({ featuredAnime }: HeroProps) => {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null)
  const teaserVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play and loop the teaser video for Attack on Titan
    if (teaserVideoRef.current && featuredAnime.title === 'Attack on Titan') {
      teaserVideoRef.current.play().catch(console.error)
      
      // Set video to loop after 10 seconds
      const handleTimeUpdate = () => {
        if (teaserVideoRef.current && teaserVideoRef.current.currentTime >= 10) {
          teaserVideoRef.current.currentTime = 0
        }
      }
      
      teaserVideoRef.current.addEventListener('timeupdate', handleTimeUpdate)
      
      return () => {
        if (teaserVideoRef.current) {
          teaserVideoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
      }
    }
  }, [featuredAnime])

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={backgroundVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-floating-smoke-6761/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>
      
      {/* Manga Vignette */}
      <div className="manga-vignette"></div>
      
      {/* Featured Content */}
      <div className="relative z-10 h-full flex items-end md:items-center px-6 md:px-12 pb-20 md:pb-32">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text drop-shadow-2xl">
            {featuredAnime.title}
          </h1>
          {featuredAnime.description && (
            <p className="text-lg md:text-xl text-gray-300 mb-6 drop-shadow-lg max-w-xl">
              {featuredAnime.description}
            </p>
          )}
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-300 transition-colors duration-300 flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Play</span>
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded border border-white/30 hover:bg-white/30 transition-colors duration-300 flex items-center space-x-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>More Info</span>
            </button>
          </div>
        </div>

        {/* 10-Second Attack on Titan Teaser Video on Right Side */}
        {featuredAnime.title === 'Attack on Titan' && (
          <div className="hidden lg:block flex-1 max-w-2xl ml-8 relative">
            <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl manga-border">
              <video
                ref={teaserVideoRef}
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
                onLoadedMetadata={(e) => {
                  // Ensure video loops at 10 seconds
                  const video = e.target as HTMLVideoElement
                  if (video.duration > 10) {
                    video.addEventListener('timeupdate', () => {
                      if (video.currentTime >= 10) {
                        video.currentTime = 0
                      }
                    })
                  }
                }}
              >
                <source src="https://cdn.coverr.co/videos/coverr-floating-smoke-6761/1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay with timer */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-bold text-sm">10秒</span>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero

