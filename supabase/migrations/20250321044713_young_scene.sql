/*
  # Create Blog System Tables

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `cover_image` (text)
      - `author_id` (uuid, foreign key)
      - `published` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `authors`
      - `id` (uuid, primary key)
      - `name` (text)
      - `bio` (text)
      - `avatar` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to manage posts
*/

-- Create authors table
CREATE TABLE authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  avatar text,
  created_at timestamptz DEFAULT now()
);

-- Create posts table
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

-- Enable RLS
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policies for authors
CREATE POLICY "Allow public read access to authors"
  ON authors
  FOR SELECT
  TO public
  USING (true);

-- Policies for posts
CREATE POLICY "Allow public read access to published posts"
  ON posts
  FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "Allow authenticated users to manage posts"
  ON posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);