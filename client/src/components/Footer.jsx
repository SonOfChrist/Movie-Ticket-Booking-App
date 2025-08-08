import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        setError('');
        // Simple email validation {Create a complex email validation system application}
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
          setError('Please enter a valid email address.');
          return;
        }
        setSubscribed(true);
        setEmail('');
        // Add API call for real subscription later after the project
      };

    return (

        <footer className="px-6 md:px-16 lg:px-36 mt-10 w-full text-gray-200 bg-gradient-to-r from-black via-primary/80 to-pink-900/80 rounded-t-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-700 pb-7 pt-10">
                <div className="md:max-w-96">
                    <img className="w-36 h-auto drop-shadow-xl" src={assets.logo} alt="QuickShow Logo" />
                    <p className="mt-3 text-base font-medium  text-gray-300">
                        QuickShow is your ultimate movie ticket companion—discover, book, and enjoy the latest blockbusters with ease. Experience seamless booking, exclusive offers, and a world of entertainment at your fingertips!
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                        <img src={assets.googlePlay} alt="Google Play" className="h-10 w-auto hover:scale-105 transition" />
                        <img src={assets.appStore} alt="App Store" className="h-10 w-auto hover:scale-105 transition" />
                    </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 mt-6">
                    <a href="https://Instagram.com" target="_blank" rel="" aria-label="Instargarm"><img src={assets.Instagram_icon} alt="Instagram" className="h-6 w-6 hover:scale-110 transition" /></a>
                    <a href="https://facebook.com" target="_blank" rel="" aria-label="facebook"><img src={assets.Facebook_icon} alt="Facebook" className="h-6 w-6 hover:scale-110 transition" /></a>
                    <a href="https://X.com" target="_blank" rel="" aria-label="X"><img src={assets.X_icon_2} alt="X" className="h-6 w-6 hover:scale-110 transition" /></a>
                    <a href="https://tiktok.com" target="_blank" rel="" aria-label="tiktok"><img src={assets.tiktok_icon_black} alt="tiktok" className="h-6 w-6 hover:scale-110 transition" /></a>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8">
                    {subscribed ? (
                    <div className="text-green-400 font-semibold py-2">Thank you for subscribing!</div>
                    ) : (
                    <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                        <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Subscribe for updates"
                        className="px-4 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
                        />
                        <button
                        type="submit"
                        className="px-4 py-2 bg-primary text-white rounded-r-md font-semibold hover:bg-pink-500 transition"
                        >
                        Subscribe
                        </button>
                    </form>
                    )}
                    {error && <div className="text-pink-400 text-sm mt-1">{error}</div>}
                </div>
                </div>
                <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-10 md:gap-32">
                    <div>
                        <h2 className="font-bold text-lg mb-4 text-primary">Quick Links</h2>
                        <ul className="text-base space-y-2">
                        <li><a href="#" className="hover:text-gray-800 transition">Home</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">About</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gray-800 transition">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4 text-primary">Contact Us</h2>
                        <div className="text-base space-y-2">
                        <p className="flex items-center gap-2 hover:text-gray-800 transition cursor-pointer"><span role="img" aria-label="phone">📞</span> +254-743-587-157</p>
                        <p className="flex items-center gap-2 hover:text-gray-800 transition cursor-pointer"><span role="img" aria-label="email">✉️</span> mochogestanley80@gmail.com</p>
                        <p className="flex items-center gap-2 hover:text-gray-800 transition cursor-pointer"><span role="img" aria-label="location">📍</span>Location Nairobi, Kenya - 00100</p>
                        </div>
                    </div>
                    </div>
                </div>

          {/* App Version */}
          <p className="text-center text-xs text-gray-900 mt-2">v7.0.0</p>
          <p className="pt-2 text-center text-sm text-gray-400 pb-6 tracking-wide">
            © {new Date().getFullYear()} QuickShow Movie Ticket App. Crafted with <span className="text-blue-400">Love</span> by MochogeStanley.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-pink-500 transition z-50"
            aria-label="Back to top"
          >
            ↑
          </button>
        </footer>
      )
    }

export default Footer
