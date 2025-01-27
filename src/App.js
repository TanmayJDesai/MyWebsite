// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/experience" element={<div>Experience Page</div>} />
        <Route path="/organizations" element={<div>Organizations Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;