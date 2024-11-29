import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen overflow-y-auto bg-transparent">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 animate-gradient-flow backdrop-blur-lg"
      ></motion.div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Sign Up Section */}
        <section className="w-full px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 drop-shadow-md">
              Join TrashTalkin’ T-Rex Today!
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-700">
              Sign up to be a Waste Warrior and join Rexy in the ultimate recycling adventure.
            </p>
          </motion.div>

          {/* Sign Up Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-md"
          >
            <div className="mb-6">
              <label htmlFor="username" className="block text-left text-sm font-semibold text-blue-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-sm font-semibold text-blue-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-left text-sm font-semibold text-blue-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-left text-sm font-semibold text-blue-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </motion.button>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full py-3  text-center text-black rounded-md   transition duration-300"
            >
              Already Regestered, <Link to="/login" className='hover:text-blue-500 text-blue-400' > Login Now...</Link>
      </motion.p>
          </motion.form>
        </section>
      </div>
    </div>
  );
};

export default SignUpPage;
