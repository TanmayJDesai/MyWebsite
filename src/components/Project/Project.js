import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { House, Code, Briefcase, Users, Sun, Moon, Search } from 'lucide-react';
import { SiGmail, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import './Project.css';

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const projects = [
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
    {
      title: "Stock Analysis: Amazon vs NASDAQ Composite",
      description: "Analyzed Amazon stock performance against the NASDAQ Composite over five years, revealing insights into market behavior.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      link: "https://github.com/yourrepo1",
    },
    {
      title: "Shortest Path Finder for College Campuses",
      description: "Designed a shortest-path finder for campus navigation using the A* algorithm.",
      technologies: ["Python", "A* Algorithm", "Tkinter", "NetworkX"],
      link: "https://github.com/yourrepo4",
    },

  ];

  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery) return projects;
    
    return projects.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  const handlePrev = () => {
    if (filteredProjects.length > 0) {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (filteredProjects.length > 0) {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentProjectIndex(0); // Reset to first matching project
  };

  // Show message if no projects match the search
  const noResults = searchQuery && filteredProjects.length === 0;

  return (
    <div className="container">
      <nav className="navigation">
        <div className="nav-content">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              <House className="nav-icon" />
              Home Page
            </Link>
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

      <main className="main-content">
        <h1>Projects</h1>

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
          {noResults ? (
            <div className="no-results">
              <p>No projects found matching "{searchQuery}"</p>
            </div>
          ) : (
            <div className="carousel">
              <button 
                className="carousel-btn prev" 
                onClick={handlePrev}
                disabled={filteredProjects.length <= 1}
              >
                ‹
              </button>
              <div className="project-card">
                <h3>{filteredProjects[currentProjectIndex]?.title}</h3>
                <p className="description">
                  {filteredProjects[currentProjectIndex]?.description}
                </p>
                <div className="technologies">
                  <p><strong>Technologies:</strong></p>
                  <p>{filteredProjects[currentProjectIndex]?.technologies.join(', ')}</p>
                </div>
                <a 
                  href={filteredProjects[currentProjectIndex]?.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  View Project
                </a>
              </div>
              <button 
                className="carousel-btn next" 
                onClick={handleNext}
                disabled={filteredProjects.length <= 1}
              >
                ›
              </button>
            </div>
          )}
          {filteredProjects.length > 0 && (
            <div className="project-counter">
              {currentProjectIndex + 1} of {filteredProjects.length} projects
            </div>
          )}
        </div>
      </main>

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

