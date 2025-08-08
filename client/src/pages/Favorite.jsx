import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Favorite = () => {
  return dummyShowsData.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top='150px' left='0px' />
      <BlurCircle bottom='50px' right='50px' />
      <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary via-pink-500 to-white bg-clip-text text-transparent tracking-tight drop-shadow-lg'>
       Thanks for watching Movies with Us – Here are your Favorites! 
      </h1>
      <div className='flex flex-wrap max-sm:justify-center gap-14'>
        {dummyShowsData.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No Movies Available at the moment</h1>
    </div>
  )
}

export default Favorite
