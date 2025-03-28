import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import SEO from '../components/SEO';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Travel enthusiast with 10+ years of experience in the tourism industry.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Operations expert specializing in creating seamless travel experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Travel Curator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Passionate about discovering hidden gems and creating unique itineraries.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Customer Experience Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    bio: 'Dedicated to ensuring every traveler has an exceptional journey.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 overflow-hidden">
      <SEO 
        title="Our Team"
        description="Meet the passionate travel experts behind Wanderlust. Our team is dedicated to creating unforgettable experiences and helping you discover the world's most amazing destinations."
        image={teamMembers[0].image}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate travel experts dedicated to creating unforgettable experiences for our adventurers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                <div className="flex space-x-4">
                  <motion.a
                    href={member.social.twitter}
                    whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                    className="text-gray-600 transition-colors"
                  >
                    <Twitter size={20} />
                  </motion.a>
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ scale: 1.2, color: '#0A66C2' }}
                    className="text-gray-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    whileHover={{ scale: 1.2, color: '#24292F' }}
                    className="text-gray-600 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;