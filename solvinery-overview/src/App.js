import React from 'react';
import './App.css';

function App() {
  // Function to scroll to the Home section
  const scrollToHome = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to the About section
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  // Function to open the GitHub repository
  const openGitRepo = () => {
    window.open('https://github.com/DenisPn/Solvinery', '_blank');
  };

  return (
    <div className="App">
      {/* Sticky menu */}
      <nav className="navbar">
        <button className="btn" onClick={scrollToHome}>HOME</button>
        <button className="btn" onClick={scrollToAbout}>ABOUT</button>
        <div className="dropdown">
          <button className="btn">DOCUMENTS</button>
          <div className="dropdown-content">
            <button className="dropdown-btn">Doc 1</button>
            <button className="dropdown-btn">Doc 2</button>
          </div>
        </div>
        <button className="btn">MANUALS</button>
        <button className="btn" onClick={openGitRepo}>GIT REPO</button>
      </nav>

      {/* Content to scroll */}
      <div className="content">
        {/* Home Section */}
        <div id="home" className="home">
          <h1>Solvinery</h1>
          <p>Solving complex problems like shift scheduling or task managment can be overwhelming, especially without technical expertise. Our system enables anyone to easily access powerful solutions. Programmers write and share these solutions using advanced tools,, and with our system, you can apply them instantly for your own needs.</p>
        </div>

        {/* About Section */}
        <div id="about" className="about">
          <h1>About The Project</h1>
          <p>This is the about section of your page. Here, you can describe more about the project or website.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
