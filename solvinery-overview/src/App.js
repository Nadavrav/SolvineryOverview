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
        <button className="btn">DOCUMENTS</button>
        <button className="btn">MANUALS</button>
        <button className="btn" onClick={openGitRepo}>GIT REPO</button>
      </nav>

      {/* Content to scroll */}
      <div className="content">
        {/* Home Section */}
        <div id="home" className="home">
          <h1>Welcome to the Home Page</h1>
          <p>This is the home section of your page.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        {/* About Section */}
        <div id="about" className="about">
          <h1>About Us</h1>
          <p>This is the about section of your page. Here, you can describe more about the project or website.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
