# TravellHack

A modern travel platform built with React, TypeScript, and Supabase, featuring destination discovery, blog posts, and real-time communication.

## 🌟 Features

- **Destination Discovery**
  - Browse destinations by category (beaches, mountains, cities, countryside)
  - Detailed destination pages with descriptions and ratings
  - User reviews and ratings system
  - Real-time WhatsApp integration for inquiries

- **Travel Blog**
  - Rich content articles with cover images
  - Author profiles and bios
  - SEO-optimized content
  - Responsive layout for all devices

- **Interactive UI**
  - Smooth animations using Framer Motion
  - Responsive design with Tailwind CSS
  - Modern UI components with loading states
  - Toast notifications for user feedback

- **Real-time Communication**
  - WhatsApp integration for instant messaging
  - Inquiry form with direct WhatsApp messaging
  - Contact options (phone, email, chat)

## 🛠 Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Router DOM
  - Lucide React (icons)
  - React Helmet Async (SEO)
  - React Hot Toast (notifications)

- **Backend**
  - Supabase (Database & Authentication)
  - Row Level Security (RLS)
  - Real-time subscriptions

## 📦 Database Schema

### Destinations Table
```sql
CREATE TABLE destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  region text NOT NULL,
  category text NOT NULL,
  rating numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);
```

### Reviews Table
```sql
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  user_name text NOT NULL,
  rating numeric NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

### Blog Posts Table
```sql
CREATE TABLE posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  cover_image text,
  author_id uuid REFERENCES authors(id) ON DELETE CASCADE,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

### Authors Table
```sql
CREATE TABLE authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  avatar text,
  created_at timestamptz DEFAULT now()
);
```

## 🔒 Security Policies

### Destinations
- Public read access enabled
- Protected write operations

### Reviews
- Public read access
- Authenticated users can create reviews
- Rating constraints (1-5)

### Blog Posts
- Public read access for published posts
- Authenticated users can manage posts

### Authors
- Public read access
- Protected write operations

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📱 WhatsApp Integration

The platform includes WhatsApp integration for real-time communication:

- Floating WhatsApp button on all pages
- Direct messaging from inquiry forms
- Formatted message templates for inquiries
- Click-to-chat functionality

To configure WhatsApp:
1. Update the phone number in `App.tsx`
2. Customize message templates in `DestinationDetail.tsx`
3. Configure business hours and auto-replies as needed

## 🎨 UI Components

- **Navbar**: Responsive navigation with mobile menu
- **HeroBanner**: Dynamic hero section with search functionality
- **DestinationGrid**: Filterable grid of destinations
- **PhotoGallery**: Animated photo gallery with captions
- **ReviewPopup**: Modal for submitting reviews
- **WhatsAppButton**: Floating chat button
- **SEO**: Dynamic meta tags for better SEO

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request