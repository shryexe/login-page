import { useRef } from 'react'
import { Anime } from '../App'
import AnimeCard from './AnimeCard'

interface AnimeRowProps {
  title: string
  animeList: Anime[]
  onPosterClick?: (anime: Anime) => void
}

const AnimeRow = ({ title, animeList, onPosterClick }: AnimeRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 800
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative px-6 md:px-12 py-4 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text px-2">
        {title}
      </h2>
      
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-start pl-2"
          aria-label="Scroll left"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {animeList.map((anime) => (
            <div key={anime.id} className="flex-shrink-0 w-48 md:w-56">
              <AnimeCard anime={anime} onPosterClick={onPosterClick} />
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-l from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-2"
          aria-label="Scroll right"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default AnimeRow

