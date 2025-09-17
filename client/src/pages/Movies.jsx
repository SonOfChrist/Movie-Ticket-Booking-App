import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] bg-cover bg-center'  style={{ backgroundImage: 'url("/moana-disney.png")' }}>
      <BlurCircle top='150px' left='0px' />
      <BlurCircle bottom='50px' right='50px' />
      <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary via-pink-500 to-white bg-clip-text text-transparent tracking-tight drop-shadow-lg'>
        Now Showing – Buy Your Ticket &amp; Experience the Magic of Movies! 
      </h1>
      <div className="h-1 w-full max-w-4xl mx-auto mb-10 rounded-full bg-gradient-to-r from-primary via-pink-500 to-white opacity-80"></div>
      <div className='flex flex-wrap max-sm:justify-center gap-14'>
        {dummyShowsData.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No Movies Available Today</h1>
    </div>
  )
}

export default Movies
