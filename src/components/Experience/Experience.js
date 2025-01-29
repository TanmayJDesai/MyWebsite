import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Users, Sun, Moon } from 'lucide-react';
import { SiGmail, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import './Experience.css';

const Experiences = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const experiences = [
    {
      id: 1,
      company: "National Science Foundation",
      role: "Data Analytics and Software Engineering Intern",
      dates: "February 2024 - December 2024",
      location: "Los Angeles, CA",
      description: [
        "Developed a Python web scraper using Playwright and BeautifulSoup to extract project data from UCLA's Technology Publisher, reducing manual effort by 8.33% daily",
        "Implemented a chatbot using HTML, CSS, and JavaScript to streamline information retrieval, enabling focus on high-priority inquiries"
      ]
    },
    {
      id: 2,
      company: "Entertainment Partners",
      role: "Data Analytics Intern",
      dates: "June 2024 - August 2024",
      location: "Burbank, CA",
      description: [
        "Pioneered an NLP model using Python, Scikit-learn, NLTK, and Pandas to analyze escalation data, uncovering ~27% of cases were prematurely closed",
        "Restructured data gathered from QLik with Excel, identified 3,000+ setup errors, boosting operational efficiency by 25-30%"
      ]
    },
    {
      id: 3,
      company: "Data Coves",
      role: "Software Development Intern",
      dates: "June 2023 - September 2023",
      location: "Thousand Oaks, CA",
      description: [
        "Engineered the first dbt adapter for SurrealDB using Python, dbt, and SurrealDB's API",
        "Integrated a custom connection manager and column type handler for SurrealDB with async support"
      ]
    },
    {
      id: 4,
      company: "Brand Socialite",
      role: "Business Development Intern/Data Analyst Intern",
      dates: "June 2022 - September 2022",
      location: "Los Angeles, CA",
      description: [
        "Created a highly effective customer and agency prospecting strategy, building a pipeline of 30+ potential customers",
        "Formulated an end-to-end Python program to automate client research pipeline, reducing processing time by 3 days"
      ]
    }
  ];

  const filteredExperiences = experiences.filter(exp => {
    const searchText = searchQuery.toLowerCase();
    return exp.company.toLowerCase().includes(searchText) ||
           exp.role.toLowerCase().includes(searchText) ||
           exp.description.some(desc => desc.toLowerCase().includes(searchText));
  }).reverse(); // Reverse the array to show newest first

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-links">
            <Link to="/projects" className="nav-link">
              <Code size={20} />
              <span>Projects</span>
            </Link>
            <Link to="/experience" className="nav-link">
              <Briefcase size={20} />
              <span>Experience</span>
            </Link>
            <Link to="/organizations" className="nav-link">
              <Users size={20} />
              <span>Organizations</span>
            </Link>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      <main className="main">
        <h1>Experience Timeline</h1>
        
        <div className="search-box">
          <input
            type="text"
            placeholder="Search experiences..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline">
            {filteredExperiences.map((exp, index) => (
              <div key={exp.id} className={`timeline-item ${activeExperience === exp.id ? 'active' : ''}`}>
                <div className="timeline-marker">
                  <span className="timeline-date-top">{exp.dates.split(' - ')[0]}</span>
                </div>
                <div className="timeline-content" onClick={() => setActiveExperience(activeExperience === exp.id ? null : exp.id)}>
                  <h3>{exp.company}</h3>
                  <div className="timeline-details">
                    <h4>{exp.role}</h4>
                    <p className="timeline-date">{exp.dates}</p>
                    <p className="timeline-location">{exp.location}</p>
                    <ul className="timeline-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="mailto:desai.j.tanmay@gmail.com">
            <SiGmail /> Email
          </a>
          <a href="tel:+18058716211">
            📞 (805) 871-6211
          </a>
          <a href="https://www.instagram.com/ta.anmay/">
            <SiInstagram /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/tanmaydesaij/">
            <SiLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/TanmayJDesai">
            <SiGithub /> GitHub
          </a>
        </div>
        <p>© 2025 Tanmay Desai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Experiences;