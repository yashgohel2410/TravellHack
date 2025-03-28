import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface Post {
  id: string;
  title: string;
  content: string;
  cover_image: string;
  created_at: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          author:authors(name, avatar, bio)
        `)
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
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

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-700">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      <SEO
        title={post.title}
        description={post.content.slice(0, 155) + '...'}
        image={post.cover_image}
        type="article"
      />

      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.cover_image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 pb-16 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {post.title}
            </motion.h1>
            <div className="flex items-center text-white/90 space-x-4">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
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
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 border-t pt-8"
        >
          <div className="flex items-center space-x-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">{post.author.name}</h3>
              <p className="text-gray-600 mt-1">{post.author.bio}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogPost;