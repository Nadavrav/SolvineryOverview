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

  // Function to scroll to the Documents section
  const scrollToDocuments = () => {
    document.getElementById('documents').scrollIntoView({ behavior: 'smooth' });
  };

  // Function to open the GitHub repository
  const openGitRepo = () => {
    window.open('https://github.com/DenisPn/Solvinery', '_blank');
  };

  const openSite = () => {
    window.open('https://denispn.github.io/Solvinery/', '_blank');
  };

  return (
    <div className="App">
      {/* Sticky menu */}
      <nav className="navbar">
        <button className="btn-98" onClick={scrollToHome}>HOME</button>
        <button className="btn-98" onClick={scrollToAbout}>ABOUT</button>
        <button className="btn-98" onClick={scrollToDocuments}>DOCUMENTS</button>
        <button className="btn-98" onClick={openGitRepo}>GIT REPO</button>
        <button className="btn-98" onClick={openSite}>SITE</button>
      </nav>

      {/* Content to scroll */}
      <div className="content">
        {/* Home Section */}
        <div id="home" className="home">
          <div className="home-left">
            <h1>Welcome to the Home Page</h1>
            <br></br><br></br>
            <p>The project enables anyone to easily access powerful tools to solve planning problems such as scheduling, task management, and more. Choose a scenario from the shared public library, edit it by enabling or disabling constraints, adjusting priorities, and editing the static data, and send it to the server who uses a powerful engine to find the optimal solution. The project will initially feature a number of select scenarios that will cover many of the most common problems. However, anyone willing to learn how can create a new one from scratch and help expand our ecosystem by sharing it.</p>
          </div>

          <div className="home-right">
            {/* Displaying the MainLogo.png image */}
            <img src={`${process.env.PUBLIC_URL}/MainLogo.png`} alt="Main Logo" className="main-logo" />
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="about">
          <h1>About Us</h1>
         
          {/* Embedding the video */}
          <div className="about-video">
            <video width="100%" controls>
              <source src={`${process.env.PUBLIC_URL}/SolvineryVideo.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Documents Section */}
        <div id="documents" className="documents">
          <h1 className="app-title">Documents & Manuals</h1>
          <div className="document-list">
            {/* Document Cards */}
            <div className="document-card">
              <div className="document-icon pdf">PDF</div>
              <h3 className="document-title">ADD</h3>
              <span className="document-size">1.19 MB</span>
              <br /><br />
              <a href={`${process.env.PUBLIC_URL}/docs/ADD.pdf`} className="download-button">
                <span className="download-icon"></span>
                Download
              </a>
            </div>

            <div className="document-card">
              <div className="document-icon pdf">PDF</div>
              <h3 className="document-title">ARD</h3>
              <span className="document-size">160 KB</span>
              <br /><br />
              <a href={`${process.env.PUBLIC_URL}/docs/ARD.pdf`} className="download-button">
                <span className="download-icon"></span>
                Download
              </a>
            </div>

            <div className="document-card">
              <div className="document-icon pdf">PDF</div>
              <h3 className="document-title">Manual</h3>
              <span className="document-size">72 KB</span>
              <br /><br />
              <a href={`${process.env.PUBLIC_URL}/docs/Manual.pdf`} className="download-button">
                <span className="download-icon"></span>
                Download
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
