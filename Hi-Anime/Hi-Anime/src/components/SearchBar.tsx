import { useState } from 'react'

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="relative">
      <div
        className={`
          relative flex items-center
          bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90
          backdrop-blur-xl
          border-2 transition-all duration-300
          ${isFocused 
            ? 'border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' 
            : 'border-white/20 hover:border-white/40'
          }
          rounded-full px-4 py-2 md:px-6 md:py-3
          manga-texture
        `}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFocused ? 'perspective(1000px) rotateX(0deg) translateZ(10px)' : 'perspective(1000px) rotateX(0deg) translateZ(0px)'
        }}
      >
        {/* Search Icon */}
        <svg 
          className={`w-5 h-5 md:w-6 md:h-6 text-white/70 transition-colors duration-300 ${isFocused ? 'text-white' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
        {/* Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search anime..."
          className="
            flex-1 ml-3 md:ml-4
            bg-transparent border-none outline-none
            text-white placeholder-white/50
            text-sm md:text-base
            font-semibold
          "
        />
        
        {/* 3D Glow Effect */}
        {isFocused && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-xl -z-10 animate-pulse"></div>
        )}
      </div>
      
      {/* Manga Frame Decoration */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  )
}

export default SearchBar

