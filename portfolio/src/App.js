import React, { useState } from 'react';
import './App.css';
import logo from './logo.jpg';
import TDPHistory from './images/historyPage.png';
import TDPHome from './images/homePage.png';
import TDPProcessing from './images/processingPage.png';
import BcreateLogin from './images/BankCreateLogin.png';
import Bhome from './images/BankHomePage.png';
import Blogin from './images/BankLogin.png';

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
        <img src={logo} className="App-logo" alt="Zachary Critchfield" />
        <p className="hero-text">Welcome to my portfolio!</p>
      </header>

      <main className="App-content">
        {/* ABOUT SECTION */}
        <section id="about">
          <h1>About Me</h1>
          <p className="about-text">
            Hi, my name is <strong>Zachary Critchfield</strong>. I am a software developer 
            with experience in various programming languages and frameworks. I have a passion 
            for creating innovative solutions and am always eager to learn new technologies.
          </p>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <h1>My Projects</h1>
          <div className="project-entry">
            <h3>Technical Drawing Project (.NET 9 & Blazor)</h3>
            <p>
              This application allows civil engineers to upload PDF blueprints. 
              The system extracts data from the files and inserts it into a 
              database for automated Excel export.
            </p>
            
            {/* Rectangular Screenshots with Zoom-on-Click */}
            <div className="project-images">
              <img 
                src={TDPHome} 
                className="project-img" 
                alt="TDP Home Page" 
                onClick={() => setSelectedImg(TDPHome)}
              />
              <img 
                src={TDPProcessing} 
                className="project-img" 
                alt="TDP Processing" 
                onClick={() => setSelectedImg(TDPProcessing)}
              />
              <img 
                src={TDPHistory} 
                className="project-img" 
                alt="TDP History" 
                onClick={() => setSelectedImg(TDPHistory)}
              />
            </div>
          </div>

          <div className="project-entry">
            <h3>BankApp</h3>
            <p>A mobile-first e-commerce platform design focusing on secure transactions.</p>
          
           <div className="project-images">
              <img 
                src={Bhome} 
                className="project-img" 
                alt="BankApp Home Page" 
                onClick={() => setSelectedImg(Bhome)}
              />
              <img 
                src={BcreateLogin} 
                className="project-img" 
                alt="BankApp Create Login Page" 
                onClick={() => setSelectedImg(BcreateLogin)}
              />
              <img 
                src={Blogin} 
                className="project-img" 
                alt="BankApp Login Page" 
                onClick={() => setSelectedImg(Blogin)}
              />
            </div>
          
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
