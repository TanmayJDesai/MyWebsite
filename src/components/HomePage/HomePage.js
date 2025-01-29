import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Code, Briefcase, Users, Sun, Moon, X } from 'lucide-react';
import { SiGmail, SiInstagram, SiLinkedin, SiGithub, SiPython, SiJavascript, SiHtml5, SiCss3, SiCplusplus, SiC, SiNodejs, SiReact, SiNodeDotJs, SiGit, SiHaskell, SiR } from 'react-icons/si';
import './HomePage.css';
import headshot from './headshot.jpg';


const HomePage = () => {
  const [position, setPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const technologies = [
    { name: 'Python', icon: <SiPython className='tech-logo'/> },
    { name: 'SQL', icon: <SiReact className='tech-logo' />},
    { name: 'C', icon: <SiC className='tech-logo' /> },
    { name: 'C++', icon: <SiCplusplus className='tech-logo'/> },
    { name: 'HTML', icon: <SiHtml5 className='tech-logo'/> },
    { name: 'CSS', icon: <SiCss3 className='tech-logo'/> },
    { name: 'JavaScript', icon: <SiJavascript className='tech-logo'/> },
    { name: 'Haskell', icon: <SiHaskell className='tech-logo'/> },
    { name: 'R', icon: <SiR className='tech-logo'/> },
    { name: 'React', icon: <SiReact className='tech-logo'/> },
    { name: 'Git', icon: <SiGit className='tech-logo'/> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % (technologies.length * 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const toggleImageExpand = () => {
    setIsImageExpanded(!isImageExpanded);
    // Prevent scrolling when modal is open
    document.body.style.overflow = !isImageExpanded ? 'hidden' : 'unset';
  };

  const messages = [
    "Welcome to my website! I'm a UCLA senior passionate about data science and analytics. Contact me below!"
  ];
  
  const [currentLine, setCurrentLine] = useState(0);
  
  useEffect(() => {
    const interval = setTimeout(() => {
      if (currentLine < messages.length - 1) {
        setCurrentLine(currentLine + 1);
      }
    }, 2000); // Adjust timing between line changes
    return () => clearTimeout(interval);
  }, [currentLine]);

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

        {/* Header Section */}
        <div className="header-section">
            <div className="profile-container">
            <div 
                className="profile-image-wrapper"
                onClick={toggleImageExpand}
                role="button"
                tabIndex={0}
                aria-label="Expand profile image"
            >
                <img 
                src={headshot}
                alt="Tanmay Desai"
                className="profile-image"
                />
                <div className="profile-image-overlay">
                <span>View photo</span>
                </div>
            </div>
            </div>
            <h1 className="name-title">TANMAY DESAI</h1>

        </div>
        
        {/* Description Section */}
        <div className="typewriter-section">
            <h2>Hi, I'm Tanmay Desai</h2>
            <p className="typewriter">
            Welcome to my website! I'm a UCLA senior passionate about data science and analytics. Contact me below!
            </p>
        </div>

        {/* Image Modal */}
        {isImageExpanded && (
            <div className="modal-overlay" onClick={toggleImageExpand}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={toggleImageExpand}>
                <X size={24} />
                </button>
                <img 
                src={headshot}
                alt="Tanmay Desai"
                className="profile-image"
                />
            </div>
            </div>
        )}

        <div className="tech-ticker">
            <div
            className="ticker-content"
            style={{
                transform: `translateX(-${position}px)`,
                transition: 'transform 0.05s linear',
            }}
            >
            {[...technologies, ...technologies].map((tech, index) => (
                <div key={index} className="tech-item">
                {tech.icon}
                <span className="tech-name">{tech.name}</span>
                </div>
            ))}
            </div>
        </div>

        <div className="info-grid">
            <div className="info-card">
            <h2 className="card-title">Education</h2>
            <p className="school-name">University of California, Los Angeles (UCLA)</p>
            <p>BS, Computer Science and Engineering</p>
            <p>Expected June 2025</p>
            </div>

            <div className="info-card">
            <h2 className="card-title">Technical Skills</h2>
            <p className="skill-item">
                <span className="skill-label">Languages:</span> Python, SQL, C/C++, JavaScript, Haskell, R
            </p>
            <p className="skill-item">
                <span className="skill-label">Technologies:</span> React, Node.js, Git, Azure, Databricks
            </p>
            </div>
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

export default HomePage;