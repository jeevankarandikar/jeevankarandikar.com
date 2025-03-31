import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Travel from './pages/Travel';
import './App.css';

// Sample data - replace with your actual data
const sampleProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    thumbnail: "/path/to/thumbnail1.jpg",
    image: "/path/to/image1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project1"
  },
  // Add more projects...
];

const sampleLocations = [
  {
    id: 1,
    name: "San Francisco",
    coordinates: [37.7749, -122.4194],
    description: "Visit to San Francisco",
    image: "/path/to/sf.jpg",
    date: "2023"
  },
  // Add more locations...
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
