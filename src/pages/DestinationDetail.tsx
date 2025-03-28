import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import ReviewPopup from '../components/ReviewPopup';
import SEO from '../components/SEO';

interface Destination {
  id: string;
  name: string;
  description: string;
  image_url: string;
  region: string;
  category: string;
  rating: number;
}

interface Review {
  id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);

  useEffect(() => {
    fetchDestinationDetails();
  }, [id]);

  const fetchDestinationDetails = async () => {
    try {
      // Fetch destination details
      const { data: destinationData, error: destinationError } = await supabase
        .from('destinations')
        .select('*')
        .eq('id', id)
        .single();

      if (destinationError) throw destinationError;
      setDestination(destinationData);

      // Fetch reviews for this destination
      const { data: reviewsData, error: reviewsError } = await supabase
        .from('reviews')
        .select('*')
        .eq('destination_id', id)
        .order('created_at', { ascending: false });

      if (reviewsError) throw reviewsError;
      setReviews(reviewsData || []);
    } catch (error) {
      console.error('Error fetching destination details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Destination not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {destination && (
        <SEO 
          title={destination.name}
          description={`Explore ${destination.name} in ${destination.region}. ${destination.description.slice(0, 150)}...`}
          image={destination.image_url}
          type="article"
        />
      )}
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image_url})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <p className="text-xl text-white opacity-90">{destination.region}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this destination</h2>
              <p className="text-gray-600 leading-relaxed">{destination.description}</p>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Reviews</h2>
                <button
                  onClick={() => setIsReviewPopupOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Write a Review
                </button>
              </div>
              
              {reviews.length === 0 ? (
                <p className="text-gray-500">No reviews yet</p>
              ) : (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-600">{review.user_name}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(review.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-medium">Category</p>
                  <p className="text-gray-800 capitalize">{destination.category}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Overall Rating</p>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < destination.rating ? 'text-yellow-400' : 'text-gray-300'}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {destination.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReviewPopup
        isOpen={isReviewPopupOpen}
        onClose={() => setIsReviewPopupOpen(false)}
        destinationId={destination.id}
        onReviewAdded={fetchDestinationDetails}
      />
    </motion.div>
  );
};

export default DestinationDetail;