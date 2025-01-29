import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Code, Briefcase, Users, Sun, Moon } from 'lucide-react';
import { SiGmail, SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';
import './Organization.css';

const Organizations = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const organizations = [
    {
      title: "The Data Science Union at UCLA",
      role: "Data Analyst",
      duration: "Apr 2023 - Present",
      location: "Los Angeles, California, United States",
      responsibilities: [
        "Undertook an intensive 10-week accelerated data science course and gained proficiency in data cleaning, machine learning, and data visualization techniques.",
        "Completed data science assignments that involved problem-solving, list comprehension, and bug handling/fixing using various programming languages and tools.",
        "Completed an assessment of understanding CNNs through Deep Vision Image Enhancement project.",
        "Developed an ESPCN model using TensorFlow for image enhancement, achieving significant image quality improvement."
      ]
    },
    {
      title: "Consult Your Community at UCLA",
      roles: [
        {
          title: "Senior Consultant",
          duration: "Feb 2023 - Present",
          location: "Los Angeles, California, United States",
          responsibilities: [
            "Communicate with 4 clients from multiple industries to perform market research and develop market strategies.",
            "Compile comprehensive exploratory research through competitive analyses and case studies in a team of six individuals."
          ]
        },
        {
          title: "Business Analyst",
          duration: "Jan 2022 - Feb 2023",
          location: "Los Angeles, California, United States",
          responsibilities: [
            "Conducted extensive research on current SEO strategies and leveraged findings to help create firm websites.",
            "Enhanced online exposure and traffic through implemented strategies."
          ]
        }
      ]
    },
    {
        title: "UCLA Cricket",
        roles: [
          {
            title: "President",
            duration: "Jan 2024 - Jun 2024",
            location: "Los Angeles, California, United States",
            responsibilities: [
              "Organized weekly executive board meetings to ensure consistent communication between officers, addressing fundraising, recruitment, event planning, and practice logistics.",
              "Developed clear role expectations for each board member to distribute responsibilities effectively and created an annual transition document to ensure leadership continuity after officer transitions.",
              "Expanded fundraising efforts by leading the UCLA Spark crowdfunding campaign, securing funds for tournament fees and Nationals participation.",
              "Strengthened team visibility through social media marketing and in-person club outreach, helping to boost recruitment and engagement.",
              "Assisted in organizing bi-weekly practices and competitive matches against teams like USC, UCSD, and UCI to prepare for high-level competition."
            ]
          },
          {
            title: "Vice President",
            duration: "Jan 2022 - Dec 2023",
            location: "Los Angeles, California, United States",
            responsibilities: [
              "Worked with a partner to organize a mass crowdfunding campaign, UCLA Spark, acquiring funds for tournament fees and Nationals participation.",
              "Contributed to public outreach through social media marketing and in-person club marketing.",
              "Helped organize official bi-weekly practices and at-home games against schools including USC, UCSD, and UCI."
            ]
          }
        ]
      }      
  ];

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
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
        <h1 className="page-title">Organizations</h1>
        
        <div className="organizations-grid">
          {organizations.map((org, index) => (
            <div key={index} className="org-card">
              <h2 className="org-title">{org.title}</h2>
              
              {org.roles ? (
                // For organizations with multiple roles
                <div className="roles-container">
                  {org.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="role-section">
                      <h3 className="role-title">{role.title}</h3>
                      <p className="duration">{role.duration}</p>
                      <p className="location">{role.location}</p>
                      <ul className="responsibilities-list">
                        {role.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                // For organizations with single role
                <div className="role-section">
                  <h3 className="role-title">{org.role}</h3>
                  <p className="duration">{org.duration}</p>
                  <p className="location">{org.location}</p>
                  <ul className="responsibilities-list">
                    {org.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-icons">
          <a href="mailto:desai.j.tanmay@gmail.com" className="footer-link">
            <SiGmail className="footer-icon" />
            <span>desai.j.tanmay@gmail.com</span>
          </a>
          <a href="tel:+18058716211" className="footer-link">
            <span>📞</span>
            <span>(805) 871-6211</span>
          </a>
          <a href="https://www.instagram.com/ta.anmay/" className="footer-link">
            <SiInstagram className="footer-icon" />
            <span>@ta.anmay</span>
          </a>
          <a href="https://www.linkedin.com/in/tanmaydesaij/" className="footer-link">
            <SiLinkedin className="footer-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/TanmayJDesai" className="footer-link">
            <SiGithub className="footer-icon" />
            <span>GitHub</span>
          </a>
        </div>
        <p>© 2025 Tanmay Desai. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Organizations;