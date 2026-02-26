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

      {/* Section 2: Content (This creates the scroll) */}
      <main className="App-content">
        <section id="about">
          <h2>About Me</h2>
          <p>
            
          </p>
        </section>



        <section id="projects">
           <h1>My Projects</h1>

           <div className="project-card">
              <h3>Technical Drawing Project</h3>
              <p>
                This project is aapplication that was built using .net9 and Blazor. In this apllication we allowed the user who are 
                civil engineers to insert a pdf file of a shopticket or blueprint and the application will extract the data from the pdf file and insert it into a database. 
                The user can then view the data in a table and also export it to an excel file.
              </p>
           </div>

           <div className="project-card">
              <h3>BankApp</h3>
              <p>Mobile-first e-commerce platform design.</p>
           </div>
           {/* Filler content to ensure page is tall enough to scroll */}
           <div style={{ height: '500px' }}></div> 
        </section>
      </main>
    </div>
  );
}

export default App;
