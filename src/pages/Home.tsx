import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import DestinationGrid from '../components/DestinationGrid';
import PhotoGallery from '../components/PhotoGallery';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Home"
        description="Discover the world's most beautiful destinations and create unforgettable memories with Wanderlust. Explore our curated travel experiences and start your next adventure today."
      />
      <HeroBanner />
      <DestinationGrid />
      <PhotoGallery />
    </motion.div>
  );
};

export default Home;