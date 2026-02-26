import './App.css';
import logo from './logo.jpg';

function App() {
  return (
    <div className="App">
      {/* Section 1: Full Screen Hero */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my portfolio!
        </p>
      </header>

      {/* Section 2: Content */}
      <main className="App-content">
        <section id="about">
          <h1>About Me</h1>
          <p>
           Hi my name is Zachary critchifled and I am a software developer who has experience in variuos different programming languages and frameworks.
            I have a passion for creating innovative solutions and am always eager to learn new technologies.
          </p>
        </section>

        <section id="projects">
           <h1>My Projects</h1>

           <div className="TDP">
              <h3>Technical Drawing Project</h3>
              <p>
                This project is an application that was built using .NET 9 and Blazor. 
                It allows civil engineers to upload PDF blueprints; the system extracts 
                data from the files and inserts it into a database for Excel export.
              </p>
           </div>

           <div className="BA">
              <h3>BankApp</h3>
              <p>Mobile-first e-commerce platform design.</p>
           </div>
           
           {/* Spacer for scrolling */}
           <div style={{ height: '500px' }}></div> 
        </section>
      </main>
    </div>
  );
}

export default App;
