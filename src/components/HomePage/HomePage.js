import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Users, Sun, Moon } from 'lucide-react';
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiCplusplus, SiC, SiNodejs, SiReact, SiNodeDotJs, SiGit, SiHaskell, SiR } from 'react-icons/si';
import './HomePage.css';

const HomePage = () => {
  const [position, setPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className="container">
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

      <main className="main-content">
        <div className="header-section">
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img 
                src="/api/placeholder/300/300"
                alt="Tanmay Desai"
                className="profile-image"
              />
            </div>
          </div>
          <h1 className="name-title">TANMAY DESAI</h1>
          <div className="contact-info">
            <a href="mailto:desai.j.tanmay@gmail.com" className="contact-link">
              desai.j.tanmay@gmail.com
            </a>
            <span className="separator">|</span>
            <span>(805) 871-6211</span>
            <span className="separator">|</span>
            <span>Newbury Park, CA</span>
          </div>
        </div>

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
        <p>© 2025 Tanmay Desai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;