import React, { useState, useCallback } from 'react';
import './App.css';
import logo from './images/1730067259215.jpg';

const PROJECTS = [
  {
    title: 'Technical Drawing Project (.NET 9 & Blazor)',
    description: [
      'Able to parse through pdf file to extract information',
      'Database: stores information of each valid pdf shopticket, used to give information of a shopticket without running the program again.',
      'Interactive frontend/ website',
      'Playwright to test web app',
      'Using C#, Html, css to create and design a functioning app',
      'Use of the agile methodology'
    ],
    link: 'https://steadfast-dream-production-ac96.up.railway.app',
    downloadFile: 'tech-draw.zip'
  },
  {
    title: 'BankApp (React)',
    description: [
      'Built a fully functional banking application where people can create accounts and manage their money securely.',
      'Created a login system that safely stores passwords using encryption, so user accounts are protected from hackers.',
      'Designed a dashboard that shows account balance, transaction history, and other important banking information in real-time.',
      'Built features that let users transfer money between accounts and view all their transactions in one place.',
      'Made the app work smoothly on the web with a clean, easy-to-understand interface that anyone can use.'
    ]
  },
  {
    title: 'Inventory Tracker (In Progress)',
    description: [
      'Built a system that keeps track of products and supplies in real-time, so businesses always know what they have in stock.',
      'Created a user-friendly website where employees can easily search for items, see how many are available, and update quantities.',
      'Designed a database that safely stores all inventory information and prevents mistakes like duplicate entries or lost data.',
      'Made the system fast and easy to use, so users can find what they need in seconds instead of minutes.',
      'Built with modern web technology (React) that works smoothly on phones, tablets, and computers.'
    ],
    // link: 'https://inventory-tracker-ten-plum.vercel.app'
  },
  {
    title: 'Vital Reader - Medical Research Helper (In Progress)',
    description: [
      'Created an AI tool that reads medical research papers and summarizes them in plain English, saving doctors hours of reading time.',
      'Built a smart system that automatically organizes medical articles by topic, making it easy to find relevant research quickly.',
      'Used artificial intelligence to understand medical text and create clear summaries that highlight the most important findings.',
      'Designed to handle large amounts of medical data while keeping patient information private and secure.',
      'Made a simple interface where doctors and researchers can paste articles and get helpful summaries instantly.'
    ]
  }
];

const SKILLS = {
  'Development': ['C#, C++, Java, Python', 'HTML, CSS, JavaScript', '.NET, React, Blazor'],
  'Data & Systems': ['SQL Server, SQLite, MongoDB', 'Data Encryption & Security', 'Authentication Systems', 'Real-time Data Processing', 'MS Windows, MacOS, Linux'],
  'Testing & Quality': ['Playwright', 'Unit Testing', 'Test Automation'],
  'AI & Machine Learning': ['Artificial Intelligence', 'Data Analysis', 'PDF Parsing & Data Extraction'],
  'Design & Tools': ['SysML, UML Designs', 'Design Patterns', 'Vim, Nano, Git, VS Code'],
  'Professional': ['Agile Methodology', 'Deadline Management', 'Work Ethic & Discipline']
};

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };

  const downloadFile = useCallback((fileName) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleDownloadClick = useCallback((e, fileName) => {
    e.preventDefault();
    downloadFile(fileName);
  }, [downloadFile]);

  return (
    <div className="App">
      {selectedImg && (
        <div className="img-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Zoomed View" />
        </div>
      )}

      {/* Sidebar Navigation */}
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰ Menu
      </button>
      
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>✕</button>
        <h3>Navigation</h3>
        <ul>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
        </ul>
      </nav>

      <header className="App-header">
        <h1 className="hero-text">Welcome!</h1>
        <img src={logo} className="App-logo" alt="Zachary Critchfield" />
        <p>Name: Zachary Critchfield</p>
        <p>Email: critchfieldz21@gmail.com</p>
        <p>Github: <a href="https://github.com/Critchfieldz21" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zachary-critchfield-4955a0335?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </header>

      <main className="App-content">
        <section id="about">
          <h1>About Me</h1>
          <p>
            I am a software developer with a passion for creating efficient and user-friendly applications. 
            With experience in various programming languages and frameworks, I enjoy tackling complex problems and delivering innovative solutions. 
            My background includes working on projects that involve data parsing, database management, and interactive web development. 
            I am always eager to learn new technologies and collaborate with others to bring ideas to life.
          </p>
        </section>

        <section id="projects">
          <h1>My Projects</h1>
          {PROJECTS.map((project, idx) => (
            <div className="project-entry" key={idx}>
              <h3>{project.title}</h3>
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <div>
                {project.link && (
                  <>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Code on GitHub
                    </a>
                    <br />
                  </>
                )}
                {project.downloadFile && (
                  <button 
                    onClick={(e) => handleDownloadClick(e, project.downloadFile)}
                    className="download-link-btn"
                  >
                    Download Test PDFs For Website
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>

        <section id="skills">
          <h1>Technical Skills</h1>
          <div className="skills-container">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h4>{category}</h4>
                <ul>
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <div className="footer-spacer"></div>
      </main>
    </div>
  );
}

export default App;
