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

  return (
    <div className="App">
      {/* Sticky menu */}
      <nav className="navbar">
        <button className="btn-98" onClick={scrollToHome}>HOME</button>
        <button className="btn-98" onClick={scrollToAbout}>ABOUT</button>
        <button className="btn-98" onClick={scrollToDocuments}>DOCUMENTS</button>
        <button className="btn-98">MANUALS</button>
        <button className="btn-98" onClick={openGitRepo}>GIT REPO</button>
      </nav>

      {/* Content to scroll */}
      <div className="content">
        {/* Home Section */}
        <div id="home" className="home">
          <div className="home-left">
            <h1>Welcome to the Home Page</h1>
            <p>This is the home section of your page.</p>
          </div>

          <div className="home-right">
            {/* Displaying the MainLogo.png image */}
            <img src={`${process.env.PUBLIC_URL}/MainLogo.png`} alt="Main Logo" className="main-logo" />
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="about">
          <h1>About Us</h1>
          <p>This is the about section of your page. Here, you can describe more about the project or website.</p>
        </div>

        {/* Documents Section */}
        <div id="documents" className="documents">
          <h1 className="app-title">Documents & Manuals</h1>
          <div className="document-list">
            {/* Document Cards */}
            <div className="document-card">
              <div className="document-icon pdf">PDF</div>
              <h3 className="document-title">ADD</h3>
              <p className="document-info">Last edited: Today</p>
              <span className="document-size">4.2 MB</span>
              <br></br><br></br>
              <a href={`${process.env.PUBLIC_URL}/docs/ADD.pdf`} className="download-button">
                <span className="download-icon"></span>
                Download
              </a>
            </div>

            <div className="document-card">
              <div className="document-icon pdf">PDF</div>
              <h3 className="document-title">ARD</h3>
              <p className="document-info">Last edited: Yesterday</p>
              <span className="document-size">1.8 MB</span>
              <br></br><br></br>
              <a href={`${process.env.PUBLIC_URL}/docs/ARD.pdf`} className="download-button">
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
