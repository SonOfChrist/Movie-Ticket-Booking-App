import React from 'react'
import { useState, useEffect } from 'react'
import { ChartLineIcon, PlayCircleIcon, UsersIcon, CircleDollarSignIcon, StarIcon } from 'lucide-react';
//import { dummyDashboardData } from '../../assets/assets.js'
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title.jsx';
import BlurCircle from '../../components/BlurCircle';
import dateFormat from '../../lib/dateFormat.js';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext.jsx';


const Dashboard = () => {
  const {axios, getToken, user, image_Base_Url} = useAppContext()

  const currency  = import.meta.env.VITE_CURRENCY;

  const [dashboardData, setDashBoardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,  
  });
  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    {title: "Total Bookings", value: dashboardData.totalBookings || "0",  Icon: ChartLineIcon },
    {title: "Total Revenue", value: currency + dashboardData.totalRevenue || "0",  Icon: CircleDollarSignIcon },
    {title: "Total Active Shows", value: dashboardData.activeShows.length || "0",  Icon: PlayCircleIcon },
    {title: "Total Users", value: dashboardData.totalUser || "0",  Icon: UsersIcon },
  ]

  const fetchDashBoardData = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard', {headers: {Authorization:`Bearer ${await getToken()}`}})
      if(data.success){
        setDashBoardData(data.dashboardData)
        setLoading(false)
      }else {
        toast.error(data.message) 
      }
    } catch (error) {
      toast.error('Error fetching dashboard data:', error)
    }
  };

  useEffect(() => {
    if(user){
      fetchDashBoardData();
    }
  }, [user]);

  return !loading ? (
    <>
     <Title text1="Admin" text2="Dashboard - (This illusion is an illusion )"/>
     <div>
      <div className='relative flex flex-wrap gap-4 mt-6'>
        <BlurCircle top="-100px" left="0" />
        {dashboardCards.map((card, index) => (
          <div key={index} className='flex items-center justify-between px-4 py-3 bg-primary/10 border border-prmary/20 rounded-md max-w-67 w-full'>
            <div>
              <h3 className='text-sm'>{card.title}</h3>
              <p className='text-xl font-medium mt-1'>{card.value}</p>
            </div>
            <card.Icon className='w-6 h-6 ' />
          </div>
        ))}
      </div>
     </div>

     <p className="mt-10 text-2xl font-bold text-primary tracking-wide mb-4 flex items-center gap-2">
        <PlayCircleIcon className="w-7 h-7 text-pink-100" />
        Active Shows
      </p>
      <div className="relative flex flex-wrap gap-8 mt-4 max-w-6xl">
        <BlurCircle top="-100px" left="-10%" />
        {dashboardData.activeShows.length === 0 && (
          <div className="w-full text-center text-gray-400 py-10 text-lg">No active shows available.</div>
        )}
        {dashboardData.activeShows.map((show) => (
          <div
            key={show._id}
            className="w-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-primary/10 border border-primary/20 shadow-lg hover:-translate-y-2 transition duration-300"
          >
            <div className="relative">
              <img src={image_Base_Url + show.movie.poster_path} alt='' className="h-56 w-full object-cover" />
              <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                {show.movie.vote_average.toFixed(1)}
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <p className="font-bold text-lg text-white truncate">{show.movie.title}</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-pink-400">{currency} {show.showPrice}</span>
                <span className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full">{show.movie.genres?.[0]?.name}</span>
              </div>
              <p className="text-xs text-gray-400">{dateFormat(show.showDateTime)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  )
}

export default Dashboard
