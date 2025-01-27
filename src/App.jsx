// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Your Header component
import About from './pages/About'; // About Page Component
import Skills from './pages/Skills'; // Skills Page Component
import Project from './pages/Project'; // Projects Page Component
import Contact from './pages/Contact'; // Contact Page Component
import Home from './pages/Home'; // Import Home page component

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
