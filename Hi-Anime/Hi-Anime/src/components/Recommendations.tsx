import { Anime } from '../App'
import AnimeCard from './AnimeCard'

interface RecommendationsProps {
  topAnime: Anime[]
}

const Recommendations = ({ topAnime }: RecommendationsProps) => {
  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-b from-gray-900/50 via-black/80 to-black">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Top Recommendations
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Handpicked anime series that define the genre. These masterpieces are must-watch for every anime fan.
          </p>
        </div>
        
        {/* Top Anime Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {topAnime.map((anime, index) => (
            <div
              key={anime.id}
              className="animate-float"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationDuration: '6s'
              }}
            >
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Recommendations

