import React from 'react'
import timeFormat from '../lib/timeFormat'
import { StarIcon, Ticket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  return (
    <div className="group relative flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-primary/10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 w-72 overflow-hidden border border-gray-700/40">
      {/* Poster */}
      <div className="relative cursor-pointer" onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0) }}>
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="rounded-t-2xl h-56 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <StarIcon className="w-4 h-4 text-green-400" />
          {movie.vote_average.toFixed(1)}
        </div>
        {/* Genre badge */}
        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full shadow">
          {movie.genres[0]?.name}
        </div>
      </div>

      {/* Details about Movie */}
      <div className="flex flex-col gap-2 px-4 py-3">
        <h3 className="font-bold text-lg text-white truncate">{movie.title}</h3>
        <p className="text-xs text-gray-400 flex items-center gap-2">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span>•</span>
          <span>{movie.genres.slice(0, 2).map(genre => genre.name).join(" | ")}</span>
          <span>•</span>
          <span>{timeFormat(movie.runtime)}</span>
        </p>
      </div>

      {/* Actions on Button and Parental Guidance */}
      <div className="flex items-center justify-between px-4 pb-4">
        <button
          onClick={() => { navigate(`/movies/${movie._id}`); scrollTo(0, 0) }}
          className="flex items-center gap-2 px-5 py-2 text-xs bg-gradient-to-r from-primary via-pink-500 to-pink-400 hover:from-pink-500 hover:to-primary transition rounded-full font-semibold text-white shadow-lg hover:scale-105 duration-200 cursor-pointer"
        >
          <Ticket className="w-4 h-4" />
          Buy Tickets
        </button>
        <span className="text-xs text-gray-400 font-semibold">{movie.adult ? "18+" : "PG"}</span>
      </div>
    </div>
  )
}

export default MovieCard
