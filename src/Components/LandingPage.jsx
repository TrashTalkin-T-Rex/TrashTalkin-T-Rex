import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-y-auto">
      {/* Animated Multicolor Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient-flow"
      ></motion.div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen">
        {/* Hero Section */}
        <header className="text-center py-16 px-4 md:px-6">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-md"
          >
            TrashTalkin’ T-Rex
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-base md:text-lg text-gray-100"
          >
            Turning Trash into Treasure... and Laughs!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-200 mt-2"
          >
            Join Rexy, the sassy T-Rex, in a laugh-out-loud adventure to save the planet with humor and recycling.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-md shadow hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition duration-300"
            onClick={() => { navigate('/login') }}
          >
            Get Started
          </motion.button>
        </header>

        {/* Features Section */}
        <section className="py-10 px-4 md:py-16 md:px-6 bg-white w-full">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-indigo-800"
            >
              Why Join TrashTalkin’ T-Rex?
            </motion.h2>
            <motion.div
              className="grid gap-8 mt-8 md:mt-10 md:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-gradient-to-br from-blue-100 via-teal-100 to-pink-100 p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-blue-700">Rexy the T-Rex Host</h3>
                <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">
                  Meet Rexy, your animated host with a roar-some sense of humor, ready to make waste management fun!
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-orange-100 p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-yellow-700">Comedy Roast Challenges</h3>
                <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">
                  Submit your funniest waste disposal roasts and compete for hilarious prizes like the Golden Trash Can!
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-pink-700">AI-Powered Waste Analysis</h3>
                <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600">
                  Use AI to analyze waste, learn proper recycling techniques, and get tips with a twist of comedy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 md:py-16 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to Join the Fun?</h2>
            <p className="mt-4 text-sm md:text-base text-gray-100">
              Sign up now and become a Waste Warrior! Compete with friends, learn new tips, and have a dino-mite time.
            </p>
            <button onClick={() => { navigate('/signup') }} className="mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-md shadow hover:bg-gradient-to-r hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition duration-300">
              Join Now
            </button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-indigo-900 text-white py-3 md:py-4 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base">&copy; 2024 TrashTalkin’ T-Rex. All rights reserved.</p>
            <p className="mt-1 text-xs md:mt-2 md:text-sm text-gray-400">Developed with love for the environment.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
