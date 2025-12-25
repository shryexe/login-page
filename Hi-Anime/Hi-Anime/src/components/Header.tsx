import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        backdrop-blur-xl
        border-b-2 transition-all duration-500
        ${scrolled 
          ? 'bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-r from-black/40 via-gray-900/40 to-black/40 border-white/10'
        }
      `}
      style={{
        transformStyle: 'preserve-3d',
        transform: scrolled ? 'perspective(1000px) translateZ(20px)' : 'perspective(1000px) translateZ(0px)'
      }}
    >
      {/* 3D Frame Effect */}
      <div className="absolute inset-0 border-2 border-white/20 pointer-events-none" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1)'
      }}></div>
      
      {/* Manga Texture Overlay */}
      <div className="absolute inset-0 manga-texture opacity-30 pointer-events-none"></div>
      
      <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between relative z-10">
        {/* Logo - Left Corner */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white flex-shrink-0">
          MANGAVERSE
        </div>
        
        {/* Navigation Links with 3D Hover */}
        <div className="hidden lg:flex items-center space-x-6">
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-all duration-300 font-semibold relative group"
            style={{
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) translateZ(5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px)'
            }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-all duration-300 font-semibold relative group"
            style={{
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) translateZ(5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px)'
            }}
          >
            Series
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-all duration-300 font-semibold relative group"
            style={{
              transformStyle: 'preserve-3d'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) translateZ(5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px)'
            }}
          >
            Genres
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <SearchBar />
        </div>
        
        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center space-x-4">
          <div className="md:hidden">
            <SearchBar />
          </div>
          <button className="text-white p-2 hover:bg-white/10 rounded transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header


