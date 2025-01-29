// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Experiences from './components/Experience/Experience';
import Projects from './components/Project/Project';
import Organizations from './components/Organizations/Organization';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/organizations" element={<Organizations />} />
      </Routes>
    </Router>
  );
}

export default App;