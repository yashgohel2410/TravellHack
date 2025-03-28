import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
  created_at: string;
  author: {
    name: string;
    avatar: string;
  };
}

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          author:authors(name, avatar)
        `)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO
        title="Blog"
        description="Read our latest articles about travel tips, destinations, and adventures around the world."
      />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Latest Blog Posts
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link to={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <Calendar size={16} className="mr-1" />
                    <span>
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;