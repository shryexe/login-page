import { Anime } from '../App'

interface AnimeCardProps {
  anime: Anime
  onPosterClick?: (anime: Anime) => void
}

const AnimeCard = ({ anime, onPosterClick }: AnimeCardProps) => {
  const handleClick = () => {
    if (onPosterClick) {
      onPosterClick(anime)
    }
  }

  return (
    <div 
      className="card-3d manga-border manga-texture noise-texture relative group cursor-pointer h-full"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden bg-black h-full">
        {/* Poster Image */}
        <div className="relative w-full aspect-[2/3] overflow-hidden">
          <img
            src={anime.poster}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/400x600/1a1a1a/ffffff?text=${encodeURIComponent(anime.title.split(' ').join('+'))}`
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Title and Description */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-10">
          <h3 className="text-base md:text-lg font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {anime.title}
          </h3>
          {anime.description && (
            <p className="text-xs md:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 line-clamp-2">
              {anime.description}
            </p>
          )}
        </div>
      </div>
      
      {/* Manga Panel Decoration */}
      <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 border-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-2 left-2 w-3 h-3 md:w-4 md:h-4 border-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

export default AnimeCard

