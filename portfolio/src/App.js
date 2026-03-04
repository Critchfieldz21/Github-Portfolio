import React, { useState } from 'react';
import './App.css';
import logo from './logo.jpg';

function App() {
  // State to track which image is currently zoomed in
  const [selectedImg, setSelectedImg] = useState(null);

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
        
        <p className="hero-text">Welcome!</p>
        <img src={logo} className="App-logo" alt="Zachary Critchfield" />
        
      </header>

      <main className="App-content">
        {/* ABOUT SECTION */}
        <section id="about">
          <h1>About Me</h1>
          <p className="about-text">
            Hi, my name is Zachary Critchfield. I am a software developer 
            with experience in various programming languages and frameworks. I have a passion 
            for creating innovative solutions and am always eager to learn new technologies.
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

            
            {/* Rectangular Screenshots with Zoom-on-Click */}
            
          </div>

          <div className="project-entry">
            <h3>BankApp</h3>
      
            <li>Database that store personal information of a user</li>
            <li>Encrypted data in the database so no one can see them</li>
            <li>Sign page to allow users to sign in, allow for new user to create account and store it to the database</li>
            <li>Allow the user to see recent transaction on home page(recent transaction is store in database)</li>
            <li>Home page that display users name, balance, recent transactions from database</li>


           
          
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
