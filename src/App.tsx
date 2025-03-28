import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Team from './pages/Team';
import DestinationDetail from './pages/DestinationDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/team" element={<Team />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;