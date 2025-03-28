import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

interface Destination {
  id: string;
  name: string;
  image_url: string;
  region: string;
  category: string;
  rating: number;
}

const DestinationGrid = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('destinations')
        .select('*');
      
      if (error) {
        throw error;
      }

      setDestinations(data || []);
    } catch (err) {
      console.error('Error fetching destinations:', err);
      setError('Failed to load destinations. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'beaches', 'mountains', 'cities', 'countryside'];

  const filteredDestinations = selectedCategory === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button
            onClick={() => fetchDestinations()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full capitalize ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredDestinations.length === 0 ? (
        <div className="text-center text-gray-600 py-12">
          No destinations found for this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/destination/${destination.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img
                      src={destination.image_url}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
                      <p className="text-gray-200">{destination.region}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < destination.rating ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{destination.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationGrid;