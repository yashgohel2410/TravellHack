/*
  # Add sample destinations

  1. Data Changes
    - Insert 12 sample destinations with varied categories:
      - Beaches (3)
      - Mountains (3)
      - Cities (3)
      - Countryside (3)
    - Each destination includes:
      - Name
      - Description
      - Image URL (from Unsplash)
      - Region
      - Category
      - Initial rating
*/

INSERT INTO destinations (name, description, image_url, region, category, rating)
VALUES
  (
    'Maldives Paradise',
    'Crystal clear waters, white sandy beaches, and luxury overwater bungalows make the Maldives a tropical paradise. Perfect for honeymoons and romantic getaways, with world-class snorkeling and diving opportunities.',
    'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Indian Ocean',
    'beaches',
    4.8
  ),
  (
    'Amalfi Coast',
    'Dramatic cliffs, colorful villages, and pristine Mediterranean beaches combine to create one of Italy''s most stunning coastal regions. Famous for its limoncello, seafood, and breathtaking drives along the coast.',
    'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Italy',
    'beaches',
    4.7
  ),
  (
    'Bora Bora',
    'A tropical paradise surrounded by a crystal-clear lagoon and coral reef. Known for its luxury resorts, overwater bungalows, and perfect beaches. A dream destination for beach lovers and honeymooners.',
    'https://images.unsplash.com/photo-1589197331516-4a79f1b8a1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'French Polynesia',
    'beaches',
    4.9
  ),
  (
    'Swiss Alps',
    'Majestic mountain peaks, pristine lakes, and charming villages characterize the Swiss Alps. Perfect for skiing in winter and hiking in summer, with world-class infrastructure and breathtaking views.',
    'https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Switzerland',
    'mountains',
    4.8
  ),
  (
    'Canadian Rockies',
    'Dramatic mountain landscapes, turquoise lakes, and abundant wildlife make the Canadian Rockies an outdoor enthusiast''s paradise. Famous for Banff and Jasper National Parks.',
    'https://images.unsplash.com/photo-1609863539625-1ee650bc9485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Canada',
    'mountains',
    4.7
  ),
  (
    'Patagonia',
    'Wild, untamed landscapes featuring glaciers, towering peaks, and pristine wilderness. A haven for hikers and nature photographers, with iconic locations like Torres del Paine.',
    'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Chile/Argentina',
    'mountains',
    4.9
  ),
  (
    'Tokyo',
    'A fascinating blend of ultra-modern technology and traditional culture. Experience cutting-edge architecture, ancient temples, incredible food, and unique fashion trends.',
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Japan',
    'cities',
    4.8
  ),
  (
    'Paris',
    'The City of Light captivates with its iconic architecture, world-class museums, and exceptional cuisine. Home to the Eiffel Tower, Louvre, and charming cafes.',
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'France',
    'cities',
    4.7
  ),
  (
    'Barcelona',
    'A vibrant city known for Gaudi''s unique architecture, beautiful beaches, and rich cultural heritage. Famous for La Sagrada Familia, Park Güell, and Las Ramblas.',
    'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Spain',
    'cities',
    4.6
  ),
  (
    'Tuscany',
    'Rolling hills, medieval villages, and world-renowned vineyards characterize this Italian countryside. Perfect for wine tasting, culinary adventures, and scenic drives.',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'Italy',
    'countryside',
    4.8
  ),
  (
    'Provence',
    'Famous for its lavender fields, charming villages, and excellent wines. Experience the French countryside at its finest, with amazing food and beautiful landscapes.',
    'https://images.unsplash.com/photo-1589994160839-163cd867cfe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'France',
    'countryside',
    4.7
  ),
  (
    'Cotswolds',
    'Picture-perfect English countryside with honey-colored stone villages, rolling hills, and traditional pubs. Ideal for experiencing authentic British rural life.',
    'https://images.unsplash.com/photo-1600624697183-00956ead3d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'England',
    'countryside',
    4.6
  );