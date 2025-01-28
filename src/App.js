// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Experiences from './components/Experience/Experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/organizations" element={<div>Organizations Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;