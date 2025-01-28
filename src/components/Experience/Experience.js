import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Users, Sun, Moon } from 'lucide-react';
import './Experience.css';

const Experiences = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      description: `
        ● Developed a Python web scraper using Playwright and BeautifulSoup to extract project data from UCLA's Technology Publisher,
        reducing manual effort by 8.33% daily, and automated extract and load process using a scheduling algorithm for 24-hour updates. 
        ● Implemented a chatbot using HTML, CSS, and JavaScript to streamline information retrieval, enabling focus on high-priority inquiries.
      `
    },
    {
      company: "Entertainment Partners",
      role: "Data Analytics Intern",
      dates: "June 2024 - August 2024",
      location: "Burbank, CA",
      description: `
        ● Pioneered an NLP model using Python, Scikit-learn, NLTK, and Pandas to analyze a previously unexamined "Additional Information"
        section of escalation data, uncovering ~27% of cases were prematurely closed.
        ● Restructured data gathered from QLik with Excel (pivot tables, VLOOKUPs, and macros), identified 3,000+ setup errors, and
        presented findings via dashboards, boosting operational efficiency by 25-30%.
      `
    },
    {
      company: "Data Coves",
      role: "Software Development Intern",
      dates: "June 2023 - September 2023",
      location: "Thousand Oaks, CA",
      description: `
        ● Engineered the first dbt adapter for SurrealDB using Python, dbt, and SurrealDB's API, facilitating seamless integration of SurrealDB
        with dbt workflows and NoSQL data pipelines.
        ● Integrated a custom connection manager and column type handler for SurrealDB with async support, supporting non-blocking,
        efficient query execution and achieving real-time interaction performance within dbt workflows.
      `
    }
  ];

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
        <div className="experiences-container">
          <h2>Internship Experiences</h2>
          <div className="cards">
            {experiences.map((exp, index) => (
              <div className="experience-card" key={index}>
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="location">{exp.location}</p>
                <p className="dates">{exp.dates}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Tanmay Desai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Experiences;
