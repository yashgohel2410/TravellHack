/*
  # Initial Schema Setup for Travel Website

  1. New Tables
    - destinations
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - image_url (text)
      - region (text)
      - category (text)
      - rating (numeric)
      - created_at (timestamp)
    
    - reviews
      - id (uuid, primary key)
      - destination_id (uuid, foreign key)
      - user_name (text)
      - rating (numeric)
      - comment (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to create reviews
*/

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

CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id uuid REFERENCES destinations(id) ON DELETE CASCADE,
  user_name text NOT NULL,
  rating numeric NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to destinations"
  ON destinations
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create reviews"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);