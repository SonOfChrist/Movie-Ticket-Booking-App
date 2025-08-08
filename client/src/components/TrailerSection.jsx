import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import ReactPlayer from 'react-player/lazy'
import { dummyTrailers } from '../assets/assets'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <div className="flex items-center gap-4 mb-8">
        <PlayCircleIcon className="w-10 h-10 text-primary drop-shadow-lg animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary via-pink-500 to-white bg-clip-text text-transparent tracking-tight drop-shadow-lg">
          Watch the Latest Trailers
        </h2>
      </div>

      <div className="relative flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl border border-primary/30 bg-black/70">
        <BlurCircle top="-100px" right="-100px" />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls
          playing
          light={currentTrailer.image}
          width="100%"
          height="540px"
          className="mx-auto max-w-full"
        />
        {/* Overlay for cinematic effect */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Trailer Thumbnails */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 max-w-4xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-lg border-2 transition-all duration-300
              ${currentTrailer === trailer ? 'scale-105 ring-1 ring-green-400' : 'border-transparent hover:scale-105 hover:border-primary/60'}
            `}
            style={{ width: 200, height: 120 }}
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className={`w-full h-full object-cover brightness-75 transition-all duration-300 ${currentTrailer === trailer ? 'brightness-100' : 'group-hover:brightness-90'}`}
            />
            <PlayCircleIcon
              strokeWidth={1.2}
              className={`absolute top-1/2 left-1/2 w-8 h-18 md:w-14 md:h-14 transform -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-lg transition-all duration-300
                ${currentTrailer === trailer ? 'text-pink-400 scale-110' : 'opacity-80 group-hover:text-primary'}
              `}
            />
            {/* Optional: Trailer title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
              <p className="text-xs md:text-sm font-semibold text-white truncate">{trailer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection
