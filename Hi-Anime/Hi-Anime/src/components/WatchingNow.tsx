import { Anime } from '../App'

interface WatchingNowProps {
  animeList: Anime[]
}

const WatchingNow = ({ animeList }: WatchingNowProps) => {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-b from-gray-900/50 via-black/80 to-gray-900/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 gradient-text text-center">
          Watching Now
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animeList.slice(0, 6).map((anime, index) => (
            <div
              key={anime.id}
              className="relative group"
              style={{
                animation: `float3D ${6 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* 3D Card Container */}
              <div 
                className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-800/90 to-black/90 backdrop-blur-sm"
                style={{
                  transform: 'perspective(1000px) rotateY(0deg)',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(-10deg) rotateX(5deg) translateZ(20px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
                }}
              >
                {/* Background Image with Parallax */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-125"
                  style={{
                    backgroundImage: `url(${anime.poster})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)'
                  }}
                ></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 gradient-text">
                    {anime.title}
                  </h3>
                  {anime.description && (
                    <p className="text-sm md:text-base text-gray-300 mb-4 line-clamp-2">
                      {anime.description}
                    </p>
                  )}
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.random() * 40 + 30}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400">Continue Watching</p>
                </div>

                {/* 3D Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl"></div>
                </div>

                {/* Manga Frame Decoration */}
                <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float3D {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-10px) rotateX(2deg) rotateY(-2deg);
          }
          50% {
            transform: translateY(-20px) rotateX(0deg) rotateY(0deg);
          }
          75% {
            transform: translateY(-10px) rotateX(-2deg) rotateY(2deg);
          }
        }
      `}</style>
    </section>
  )
}

export default WatchingNow

