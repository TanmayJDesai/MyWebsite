import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Users, Sun, Moon, Search } from 'lucide-react';
import { SiGmail, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import './Project.css';

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle the dark/light theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const projects = [
    {
      title: "Stock Analysis: Amazon vs NASDAQ Composite",
      description: "Analyzed Amazon stock performance against the NASDAQ Composite over five years, revealing insights into market behavior.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      link: "https://github.com/yourrepo1",
    },
    {
      title: "DeepVision Image Enhancement",
      description: "Developed an AI model to enhance image clarity using deep learning techniques.",
      technologies: ["TensorFlow", "OpenCV", "Keras", "NumPy", "Pillow"],
      link: "https://github.com/yourrepo2",
    },
    {
      title: "DBT Adapter for SurrealDB",
      description: "Created a custom dbt adapter to integrate SurrealDB for efficient data transformations.",
      technologies: ["Python", "dbt", "SurrealDB", "SQLAlchemy", "Pytest"],
      link: "https://github.com/yourrepo3",
    },
    {
      title: "Shortest Path Finder for College Campuses",
      description: "Designed a shortest-path finder for campus navigation using the A* algorithm.",
      technologies: ["Python", "A* Algorithm", "Tkinter", "NetworkX"],
      link: "https://github.com/yourrepo4",
    },
    {
      title: "Twelfth Man (Real-Time Cricket Application)",
      description: "Built a real-time cricket score app using WebSockets for live updates.",
      technologies: ["JavaScript", "Node.js", "Express.js", "WebSocket API", "MongoDB"],
      link: "https://github.com/yourrepo5",
    },
    {
      title: "Chorus-Lapilli (TicTacToe-Style Game)",
      description: "Developed a strategy game inspired by TicTacToe with multiplayer functionality.",
      technologies: ["JavaScript", "React", "CSS", "Node.js", "Socket.io"],
      link: "https://github.com/yourrepo6",
    },
  ];

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query) {
      // Search through projects
      const foundIndex = projects.findIndex(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
      
      // If a match is found, update the current project index
      if (foundIndex !== -1) {
        setCurrentProjectIndex(foundIndex);
      }
    }
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navigation">
        <div className="nav-content">
          <div className="nav-links">
            <Link to="/projects" className="nav-link">
              <Code className="nav-icon" />
              Projects
            </Link>
            <Link to="/experience" className="nav-link">
              <Briefcase className="nav-icon" />
              Experience
            </Link>
            <Link to="/organizations" className="nav-link">
              <Users className="nav-icon" />
              Organizations
            </Link>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <Moon className="theme-icon" /> : <Sun className="theme-icon" />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1>Projects</h1>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search projects by title, description, or technology..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        <div className="projects-container">
          <div className="carousel">
            <button className="carousel-btn prev" onClick={handlePrev}>‹</button>
            <div className="project-card">
              <h3>{projects[currentProjectIndex].title}</h3>
              <p className="description">{projects[currentProjectIndex].description}</p>
              <div className="technologies">
                <p><strong>Technologies:</strong></p>
                <p>{projects[currentProjectIndex].technologies.join(', ')}</p>
              </div>
              <a 
                href={projects[currentProjectIndex].link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project
              </a>
            </div>
            <button className="carousel-btn next" onClick={handleNext}>›</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-icons">
          <a href="mailto:desai.j.tanmay@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <SiGmail className="footer-icon" />
            <span>desai.j.tanmay@gmail.com</span>
          </a>
          <a href="tel:+18058716211" className="footer-link">
            <span>📞</span>
            <span>(805) 871-6211</span>
          </a>
          <a href="https://www.instagram.com/ta.anmay/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <SiInstagram className="footer-icon" />
            <span>@ta.anmay</span>
          </a>
          <a href="https://www.linkedin.com/in/tanmaydesaij/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <SiLinkedin className="footer-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/TanmayJDesai" target="_blank" rel="noopener noreferrer" className="footer-link">
            <SiGithub className="footer-icon" />
            <span>GitHub</span>
          </a>
        </div>
        <p>© 2025 Tanmay Desai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;