import React, { useState } from 'react';
import './App.css';
import logo from './images/1730067259215.jpg';

function App() {
  // State to track which image is currently zoomed in
  const [selectedImg, setSelectedImg] = useState(null);

  // Function to handle PDF/ZIP download
  const downloadPDF = (fileName) => {
    const fileUrl = `/pdfs/${fileName}`;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      {/* ZOOM MODAL: Only visible when an image is clicked */}
      {selectedImg && (
        <div className="img-modal" onClick={() => setSelectedImg(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImg} alt="Zoomed View" />
        </div>
      )}

      {/* HERO SECTION */}
      <header className="App-header">
        
        <h1 className="hero-text">Welcome!</h1>
        <img src={logo} className="App-logo" alt="Zachary Critchfield" />

      
        <p>Name: Zachary Critchfield</p>
        <p>Email: critchfieldz21@gmail.com</p>
        <p>Github: <a href="https://github.com/Critchfieldz21" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zachary-critchfield-4955a0335?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        
        
      </header>

      <main className="App-content">
        {/* ABOUT SECTION */}
        <section id="about">
          <h1>About Me</h1>
          <p>
            I am a software developer with a passion for creating efficient and user-friendly applications. 
            With experience in various programming languages and frameworks, I enjoy tackling complex problems and delivering innovative solutions. 
            My background includes working on projects that involve data parsing, database management, and interactive web development. 
            I am always eager to learn new technologies and collaborate with others to bring ideas to life.
          </p>
        </section>


        {/* PROJECTS SECTION */}
        <section id="projects">
          <h1>My Projects</h1>
          <div className="project-entry">
            <h3>Technical Drawing Project (.NET 9 & Blazor)</h3>
            
            <li>Able to parse through pdf file to extract information</li>
            <li>Database: stores information of each valid pdf shopticket, used to give information of a shopticket without running the program again. </li>
            <li>Interactive frontend/ website </li>
            <li>Playwright to test web app</li>
            <li>Using C#, Html, css to create and design a functioning app</li>
            <li>Use of the agile methodology</li>

            <div>
              <a href="https://steadfast-dream-production-ac96.up.railway.app" target="_blank" rel="noopener noreferrer">
                Code on GitHub
              </a>
              <br />
              <a href="#" onClick={(e) => { e.preventDefault(); downloadPDF('tech-draw.zip'); }} className="download-link">
                Download Test PDFs For Website
              </a>
            </div>
            
          </div>

          <div className="project-entry">
            <h3>BankApp (React)</h3>
      
              <li>Engineered a secure authentication system with encrypted storage for user credentials, ensuring high-level data privacy and security.</li>
              <li>Architected a relational database schema to manage sensitive user information and transaction history using industry-standard encryption.</li>
              <li>Developed a dynamic dashboard that displays real-time user metrics, including account balances and activity, by streamlining data retrieval from the SQL backend.</li>
              <li>Implemented a full-cycle user management system, including account creation and secure sign-in, with seamless integration into the database layer.</li>

          </div>


          <div className="project-entry">
            <h3>Inventory tracker (In progress)</h3>
      
            <li>Architected a SQL-based database structure, implementing primary/foreign key constraints to ensure data consistency across the system</li>
            <li>Developed responsive and interactive user interfaces using React</li>

            <a href="https://inventory-tracker-ten-plum.vercel.app" target="_blank" rel="noopener noreferrer">
              Code on GitHub
            </a>
            




           
          
          </div>
        </section>

        {/* ORGANIZED SKILLS SECTION */}
        <section id="skills">
          <h1>Technical Skills</h1>
          <div className="skills-container">
            <div className="skill-group">
              <h4>Development</h4>
              <ul>
                <li>C#, C++, Java, Python</li>
                <li>HTML, CSS, JavaScript</li>
                <li>.NET, React, Blazor</li>
              </ul>
            </div>
            <div className="skill-group">
              <h4>Data & Systems</h4>
              <ul>
                <li>SQL Server, SQLite, MongoDB</li>
                <li>Data Encryption & Parsing</li>
                <li>MS Windows, MacOS, Linux</li>
              </ul>
            </div>
            <div className="skill-group">
              <h4>Design & Tools</h4>
              <ul>
                <li>SysML, UML Designs</li>
                <li>Design Patterns</li>
                <li>Vim, Nano, Git, VS Code</li>
              </ul>
            </div>
            <div className="skill-group">
              <h4>Professional</h4>
              <ul>
                <li>Agile Methodology</li>
                <li>Deadline Management</li>
                <li>Work Ethic & Discipline</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="footer-spacer"></div>
      </main>
    </div>
  );
}

export default App;
