import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <motion.div 
        className="relative h-full flex flex-col items-center justify-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Explore the world's most beautiful destinations and create unforgettable memories
        </p>
        
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
            <Search className="h-6 w-6" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;