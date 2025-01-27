import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'; // Your Header component
import About from './pages/About'; // About Page Component
import Skills from './pages/Skills'; // Skills Page Component
import Project from './pages/Project'; // Projects Page Component
import Contact from './pages/Contact'; // Contact Page Component

function App() {
  return (
    <Router>
      <Header /> {/* Display the header with navigation */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
