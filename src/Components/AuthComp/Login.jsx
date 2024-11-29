import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import Fireapp from "../../Firebase/FireApp.js"
import { getAuth } from 'firebase/auth';



const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const auth = getAuth(Fireapp)
  const navigate = useNavigate()


  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Basic validation: Check if email and password are provided
    if (!formData.email || !formData.password) {
      setError('Both email and password are required.');
      return;
    }

    setError('');

    // Add login logic here (e.g., API call)'
    try {
      const userCred = await  signInWithEmailAndPassword(auth,formData.email,formData.password)
      console.log('user signin in', userCred.user)
      navigate("/profile")
    } catch (error) {
      console.log(error)
    }
    console.log('Login data:', formData);
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
        {/* Login Section */}
        <section className="w-full px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 drop-shadow-md">
              Welcome Back!
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-700">
              Log in to access your account and continue your journey.
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-md"
          >
            {/* Email Input */}
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

            {/* Password Input */}
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

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Submit Button */}
            <motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Log In
            </motion.button>
      <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full py-3  text-center text-black rounded-md   transition duration-300"
            >
              New Here , <Link to="/signup" className='hover:text-blue-500 text-blue-400' > Sign UP Now...</Link>
      </motion.p>
          </motion.form>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
