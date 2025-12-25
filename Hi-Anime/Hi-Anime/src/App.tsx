import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AnimeRow from './components/AnimeRow'
import WatchingNow from './components/WatchingNow'
import PeopleAlsoSearch from './components/PeopleAlsoSearch'
import TeaserModal from './components/TeaserModal'
import Footer from './components/Footer'

export interface Anime {
  id: number
  title: string
  poster: string
  description?: string
}

// Trending Now
const trendingAnime: Anime[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    poster: 'https://image.tmdb.org/t/p/w500/h8Rb9gBr2vN4H3M7H4DvnZf4ZCy.jpg',
    description: 'Humanity fights for survival against the Titans'
  },
  {
    id: 2,
    title: 'Demon Slayer',
    poster: 'https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
    description: 'A boy becomes a demon slayer to save his sister'
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    poster: 'https://image.tmdb.org/t/p/w500/7Tr4d3xRqoy5zqZ1d4F1Yh5r0x.jpg',
    description: 'Students battle curses in modern Tokyo'
  },
  {
    id: 4,
    title: 'One Piece',
    poster: 'https://image.tmdb.org/t/p/w500/4Mt7WHv78N8r19XPA1YLmXH2twv.jpg',
    description: 'Monkey D. Luffy seeks the ultimate treasure'
  },
  {
    id: 5,
    title: 'Naruto',
    poster: 'https://image.tmdb.org/t/p/w500/v6kRLS1vwlHUbU774b5Cr5NBVpL.jpg',
    description: 'A young ninja dreams of becoming Hokage'
  },
  {
    id: 6,
    title: 'My Hero Academia',
    poster: 'https://image.tmdb.org/t/p/w500/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg',
    description: 'A quirkless boy trains to become a hero'
  },
  {
    id: 7,
    title: 'Death Note',
    poster: 'https://image.tmdb.org/t/p/w500/iigTJJskR1PcjjXqxdyJwVB3BoU.jpg',
    description: 'A student gains the power to kill with a notebook'
  },
  {
    id: 8,
    title: 'Fullmetal Alchemist',
    poster: 'https://image.tmdb.org/t/p/w500/2Zpg20q0lUjNxwfqyF6OjQkb9Fp.jpg',
    description: 'Two brothers search for the Philosopher\'s Stone'
  }
]

// Popular on MangaVerse
const popularAnime: Anime[] = [
  {
    id: 9,
    title: 'Spy x Family',
    poster: 'https://image.tmdb.org/t/p/w500/3r4LYFuXrg3G8fowwsdAMuWgP6J.jpg',
    description: 'A spy creates a fake family for his mission'
  },
  {
    id: 10,
    title: 'Chainsaw Man',
    poster: 'https://image.tmdb.org/t/p/w500/npdB6eFzizki0WaZ1OvKcJrWe97.jpg',
    description: 'A devil hunter merges with his chainsaw devil'
  },
  {
    id: 11,
    title: 'Tokyo Ghoul',
    poster: 'https://image.tmdb.org/t/p/w500/7nO5DUMnX5F2K1W1Q2q8q9q3q3q3.jpg',
    description: 'A student becomes half-ghoul after an attack'
  },
  {
    id: 12,
    title: 'Dragon Ball Z',
    poster: 'https://image.tmdb.org/t/p/w500/2Zpg20q0lUjNxwfqyF6OjQkb9Fp.jpg',
    description: 'Goku and friends defend Earth from powerful foes'
  },
  {
    id: 13,
    title: 'Bleach',
    poster: 'https://image.tmdb.org/t/p/w500/geCRueV3El6R4Ysy26yxa7iI4qo.jpg',
    description: 'A teenager becomes a Soul Reaper'
  },
  {
    id: 14,
    title: 'Hunter x Hunter',
    poster: 'https://image.tmdb.org/t/p/w500/vZ3lhA91fyd5v8Zvo9YL9QZgvTj.jpg',
    description: 'A boy searches for his missing father'
  },
  {
    id: 15,
    title: 'Mob Psycho 100',
    poster: 'https://image.tmdb.org/t/p/w500/7Tr4d3xRqoy5zqZ1d4F1Yh5r0x.jpg',
    description: 'An esper works as a psychic consultant'
  },
  {
    id: 16,
    title: 'One Punch Man',
    poster: 'https://image.tmdb.org/t/p/w500/iigTJJskR1PcjjXqxdyJwVB3BoU.jpg',
    description: 'A hero who can defeat any enemy with one punch'
  }
]

// New Releases
const newReleases: Anime[] = [
  {
    id: 17,
    title: 'Solo Leveling',
    poster: 'https://image.tmdb.org/t/p/w500/geCRueV3El6R4Ysy26yxa7iI4qo.jpg',
    description: 'The weakest hunter becomes the strongest'
  },
  {
    id: 18,
    title: 'Frieren: Beyond Journey\'s End',
    poster: 'https://image.tmdb.org/t/p/w500/geCRueV3El6R4Ysy26yxa7iI4qo.jpg',
    description: 'An elf mage reflects on her journey'
  },
  {
    id: 19,
    title: 'Blue Lock',
    poster: 'https://image.tmdb.org/t/p/w500/npdB6eFzizki0WaZ1OvKcJrWe97.jpg',
    description: 'A soccer player joins an elite training program'
  },
  {
    id: 20,
    title: 'Hell\'s Paradise',
    poster: 'https://image.tmdb.org/t/p/w500/3r4LYFuXrg3G8fowwsdAMuWgP6J.jpg',
    description: 'Criminals search for the elixir of immortality'
  },
  {
    id: 21,
    title: 'Vinland Saga',
    poster: 'https://image.tmdb.org/t/p/w500/vZ3lhA91fyd5v8Zvo9YL9QZgvTj.jpg',
    description: 'A Viking seeks revenge for his father\'s death'
  },
  {
    id: 22,
    title: 'Oshi no Ko',
    poster: 'https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
    description: 'A doctor reincarnates as an idol\'s child'
  },
  {
    id: 23,
    title: 'Cyberpunk: Edgerunners',
    poster: 'https://image.tmdb.org/t/p/w500/hFWP5HkbVEe40hrXgCeoiK4sK2Z.jpg',
    description: 'A street kid becomes an edgerunner in Night City'
  },
  {
    id: 24,
    title: 'Bocchi the Rock!',
    poster: 'https://image.tmdb.org/t/p/w500/iigTJJskR1PcjjXqxdyJwVB3BoU.jpg',
    description: 'A socially anxious girl joins a rock band'
  }
]

// Action & Adventure
const actionAnime: Anime[] = [
  {
    id: 25,
    title: 'Black Clover',
    poster: 'https://image.tmdb.org/t/p/w500/7nO5DUMnX5F2K1W1Q2q8q9q3q3q3.jpg',
    description: 'A magicless boy aims to become the Wizard King'
  },
  {
    id: 26,
    title: 'Fire Force',
    poster: 'https://image.tmdb.org/t/p/w500/h8Rb9gBr2vN4H3M7H4DvnZf4ZCy.jpg',
    description: 'Firefighters battle infernals in Tokyo'
  },
  {
    id: 27,
    title: 'Dr. Stone',
    poster: 'https://image.tmdb.org/t/p/w500/2Zpg20q0lUjNxwfqyF6OjQkb9Fp.jpg',
    description: 'A scientist rebuilds civilization from stone'
  },
  {
    id: 28,
    title: 'Mashle: Magic and Muscles',
    poster: 'https://image.tmdb.org/t/p/w500/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg',
    description: 'A muscle-bound student attends magic school'
  },
  {
    id: 29,
    title: 'Tokyo Revengers',
    poster: 'https://image.tmdb.org/t/p/w500/4Mt7WHv78N8r19XPA1YLmXH2twv.jpg',
    description: 'A man time travels to save his girlfriend'
  },
  {
    id: 30,
    title: 'Bungo Stray Dogs',
    poster: 'https://image.tmdb.org/t/p/w500/v6kRLS1vwlHUbU774b5Cr5NBVpL.jpg',
    description: 'A detective agency with supernatural abilities'
  }
]

// Watching Now
const watchingNowAnime: Anime[] = [
  {
    id: 1,
    title: 'Attack on Titan',
    poster: 'https://image.tmdb.org/t/p/w500/h8Rb9gBr2vN4H3M7H4DvnZf4ZCy.jpg',
    description: 'Humanity fights for survival against the Titans'
  },
  {
    id: 2,
    title: 'Demon Slayer',
    poster: 'https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
    description: 'A boy becomes a demon slayer to save his sister'
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    poster: 'https://image.tmdb.org/t/p/w500/7Tr4d3xRqoy5zqZ1d4F1Yh5r0x.jpg',
    description: 'Students battle curses in modern Tokyo'
  },
  {
    id: 4,
    title: 'One Piece',
    poster: 'https://image.tmdb.org/t/p/w500/4Mt7WHv78N8r19XPA1YLmXH2twv.jpg',
    description: 'Monkey D. Luffy seeks the ultimate treasure'
  },
  {
    id: 5,
    title: 'Naruto',
    poster: 'https://image.tmdb.org/t/p/w500/v6kRLS1vwlHUbU774b5Cr5NBVpL.jpg',
    description: 'A young ninja dreams of becoming Hokage'
  },
  {
    id: 6,
    title: 'My Hero Academia',
    poster: 'https://image.tmdb.org/t/p/w500/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg',
    description: 'A quirkless boy trains to become a hero'
  }
]

function App() {
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null)

  const handlePosterClick = (anime: Anime) => {
    setSelectedAnime(anime)
  }

  const handleCloseTeaser = () => {
    setSelectedAnime(null)
  }
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <Header />
      <Hero featuredAnime={trendingAnime[0]} />
      <div className="relative z-10 -mt-32 space-y-8 pb-16 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/50">
        <AnimeRow title="Trending Now" animeList={trendingAnime} onPosterClick={handlePosterClick} />
        <AnimeRow title="Popular on MangaVerse" animeList={popularAnime} onPosterClick={handlePosterClick} />
        <AnimeRow title="New Releases" animeList={newReleases} onPosterClick={handlePosterClick} />
        <AnimeRow title="Action & Adventure" animeList={actionAnime} onPosterClick={handlePosterClick} />
      </div>
      <WatchingNow animeList={watchingNowAnime} />
      <PeopleAlsoSearch />
      <Footer />
      
      {/* Teaser Modal */}
      <TeaserModal anime={selectedAnime} onClose={handleCloseTeaser} />
    </div>
  )
}

export default App
