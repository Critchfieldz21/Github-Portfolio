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
      'Engineered a secure authentication system with encrypted storage for user credentials, ensuring high-level data privacy and security.',
      'Architected a relational database schema to manage sensitive user information and transaction history using industry-standard encryption.',
      'Developed a dynamic dashboard that displays real-time user metrics, including account balances and activity, by streamlining data retrieval from the SQL backend.',
      'Implemented a full-cycle user management system, including account creation and secure sign-in, with seamless integration into the database layer.'
    ]
  },
  {
    title: 'Inventory tracker (In progress)',
    description: [
      'Architected a SQL-based database structure, implementing primary/foreign key constraints to ensure data consistency across the system',
      'Developed responsive and interactive user interfaces using React'
    ],
    link: 'https://inventory-tracker-ten-plum.vercel.app'
  }
];

const SKILLS = {
  'Development': ['C#, C++, Java, Python', 'HTML, CSS, JavaScript', '.NET, React, Blazor'],
  'Data & Systems': ['SQL Server, SQLite, MongoDB', 'Data Encryption & Parsing', 'MS Windows, MacOS, Linux'],
  'Design & Tools': ['SysML, UML Designs', 'Design Patterns', 'Vim, Nano, Git, VS Code'],
  'Professional': ['Agile Methodology', 'Deadline Management', 'Work Ethic & Discipline']
};

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

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
                  <a href="#" onClick={(e) => handleDownloadClick(e, project.downloadFile)}>
                    Download Test PDFs For Website
                  </a>
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
