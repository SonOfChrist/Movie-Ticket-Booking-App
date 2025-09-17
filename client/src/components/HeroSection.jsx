import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

const navigate = useNavigate();

return (
    <div className='h-screen flex items-center justify-start bg-cover bg-center' style={{ backgroundImage: 'url("/MoanaBackground.jpg")' }}>
      {/* Gradient Overlay */}
      <div className="inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0"></div>
      <div className='relative z-10 flex flex-col items-start gap-4 px-6 md:px-16 lg:px-36'>
        <img src={assets.marvelLogo} alt="Marvel Studios Logo" className='max-h-11 mt-20' />
        <h1 className='text-5xl md:text-[70px] md:leading-[1.1] font-semibold text-white drop-shadow-lg'>
          Moana <br /> Sea or Ocean
        </h1>
        <div className='flex flex-wrap items-center gap-3 text-gray-200'>
          <span className="bg-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">Action</span>
          <span className="bg-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">Adventure</span>
          <span className="bg-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">Sci-Fi</span>
          <div className='flex items-center gap-1 ml-2 text-primary font-bold text-base drop-shadow'>
            <CalendarIcon className='w-5 h-5' aria-label="Release Year" />- 2025
          </div>
          <div className='flex items-center gap-1 text-pink-400 font-bold text-base drop-shadow'>
            <ClockIcon className='w-5 h-5' aria-label="Duration" /> 2h 8m
          </div>
        </div>
        <p className='max-w-lg text-xl font-semibold text-white bg-gradient-to-r from-primary/30 via-black/20 to-pink-500/20 rounded-lg px-6 py-4 border-l-4 border-primary shadow-lg animate-fade-in'>
          a strong-willed Polynesian chief's daughter named Moana who embarks on a journey across the ocean to find the demigod Maui and restore the heart of the goddess Te Fiti
        </p>
        <button onClick={() => navigate('/movies')}
        className="flex items-center gap-2 px-8 py-3 text-base font-bold bg-gradient-to-r from-primary via-pink-500 to-pink-400 hover:from-pink-500 hover:to-primary transition rounded-full text-white cursor-pointer shadow-xl hover:scale-105 duration-200 border-l-4 border-primary/60"
        aria-label="Explore Movies"
        >
          Explore Movies
          <ArrowRight className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}

export default HeroSection
