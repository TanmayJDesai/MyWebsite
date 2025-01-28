import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Users, Sun, Moon } from 'lucide-react';
import { SiGmail, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';

import './Experience.css';

const Experiences = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to toggle the dark/light theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const experiences = [
    {
      company: "National Science Foundation",
      role: "Data Analytics and Software Engineering Intern",
      dates: "February 2024 - December 2024",
      location: "Los Angeles, CA",
      descriptionLight: `
        ● Developed a Python web scraper using Playwright and BeautifulSoup to extract project data from UCLA's Technology Publisher,
        reducing manual effort by 8.33% daily, and automated extract and load process using a scheduling algorithm for 24-hour updates.
        ● Implemented a chatbot using HTML, CSS, and JavaScript to streamline information retrieval, enabling focus on high-priority inquiries.
      `,
      descriptionDark: `
      ● Developed a Python web scraper using Playwright and BeautifulSoup to extract project data from UCLA's Technology Publisher,
      reducing manual effort by 8.33% daily, and automated extract and load process using a scheduling algorithm for 24-hour updates. 
      ● Implemented a chatbot using HTML, CSS, and JavaScript to streamline information retrieval, enabling focus on high-priority inquiries.
    `,
    },
    {
      company: "Entertainment Partners",
      role: "Data Analytics Intern",
      dates: "June 2024 - August 2024",
      location: "Burbank, CA",
      descriptionLight: `
        ● Pioneered an NLP model using Python, Scikit-learn, NLTK, and Pandas to analyze a previously unexamined "Additional Information"
        section of escalation data, uncovering ~27% of cases were prematurely closed.
        ● Restructured data gathered from QLik with Excel (pivot tables, VLOOKUPs, and macros), identified 3,000+ setup errors, and
        presented findings via dashboards, boosting operational efficiency by 25-30%.
      `,
      descriptionDark: `
      ● Pioneered an NLP model using Python, Scikit-learn, NLTK, and Pandas to analyze a previously unexamined "Additional Information"
      section of escalation data, uncovering ~27% of cases were prematurely closed.
      ● Integrated a custom connection manager and column type handler for SurrealDB with async support, supporting non-blocking,
      efficient query execution and achieving real-time interaction performance within dbt workflows.
    `,
    },
    {
      company: "Data Coves",
      role: "Software Development Intern",
      dates: "June 2023 - September 2023",
      location: "Thousand Oaks, CA",
      descriptionLight: `
        ● Engineered the first dbt adapter for SurrealDB using Python, dbt, and SurrealDB's API, facilitating seamless integration of SurrealDB
        with dbt workflows and NoSQL data pipelines.
        ● Integrated a custom connection manager and column type handler for SurrealDB with async support, supporting non-blocking,
        efficient query execution and achieving real-time interaction performance within dbt workflows.
      `,
      descriptionDark: `
      ● Engineered the first dbt adapter for SurrealDB using Python, dbt, and SurrealDB's API, facilitating seamless integration of SurrealDB
      with dbt workflows and NoSQL data pipelines.
      ● Integrated a custom connection manager and column type handler for SurrealDB with async support, supporting non-blocking,
      efficient query execution and achieving real-time interaction performance within dbt workflows.
    `,
    },
    {
      company: "Brand Socialite",
      role: "Business Development Intern/Data Analyst Intern",
      dates: "June 2022 - September 2022",
      location: "Los Angeles, CA",
      descriptionLight: 
          `● Created a highly effective customer and agency prospecting strategy in close collaboration with the founder, resulting in an increase in new
          business acquisition, and a robust pipeline of 30+ potential customers.
          ● Formulated an end-to-end Python program from scratch to automate a time-consuming client research pipeline, resulting in a 3-day reduction in
          overall processing time.`,
      descriptionDark: 
          `● Created a highly effective customer and agency prospecting strategy in close collaboration with the founder, resulting in an increase in new
          business acquisition, and a robust pipeline of 30+ potential customers.
          ● Formulated an end-to-end Python program from scratch to automate a time-consuming client research pipeline, resulting in a 3-day reduction in
          overall processing time.`,
    },
  ];

  // Function to handle card flip
  const handleCardClick = (index) => {
    setFlippedIndexes((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  // Filter experiences based on search query
  const filteredExperiences = experiences.filter((exp) => {
    const searchText = searchQuery.toLowerCase();
    return (
      exp.role.toLowerCase().includes(searchText) ||
      exp.company.toLowerCase().includes(searchText) ||
      exp.descriptionLight.toLowerCase().includes(searchText) ||
      exp.descriptionDark.toLowerCase().includes(searchText)
    );
  });

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

      {/* Experience Section */}
      <main className="main-content">
        <h1>Experience</h1>
        
        {/* Update the order of elements */}
        <h2>Internship Experiences</h2>

        {/* Search Bar */}
        <div className="search-bar">
            <input
            type="text"
            placeholder="Search by role, company, or skills"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            />
        </div>

        <div className="experiences-container">
            <div className="cards">
            {filteredExperiences.map((exp, index) => (
                <div
                className="experience-card"
                key={index}
                onClick={() => handleCardClick(index)}
                >
                <div className={`card-inner ${flippedIndexes.includes(index) ? 'flipped' : ''}`}>
                    <div className="card-front">
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="location">{exp.location}</p>
                    <p className="dates">{exp.dates}</p>
                    </div>
                    <div className="card-back">
                    <p className="description">
                        {isDarkMode ? exp.descriptionDark : exp.descriptionLight}
                    </p>
                    </div>
                </div>
                </div>
            ))}
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

export default Experiences;
