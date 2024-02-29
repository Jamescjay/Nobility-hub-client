import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>About Us</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div style={containerStyle} className="container">
        <h2>Welcome to Nobility</h2>
        <div style={{ ...pageStyle, ...missionBgStyle, ...fadeInAnimation }}>
          <p className="mission">OUR MISSION</p>
          <p>To build talent and opportunities through transformative tech-based learning experiences.
            Nobility Hub is a multi-disciplinary learning-accelerator committed to closing the skills-gap in Africa’s job markets by delivering transformative tech-based learning to high-potential jobseekers; and on graduation connecting them to local and international employers who desire high-quality tech talent.</p>
        </div>
        <div style={{ ...pageStyle, ...visionBgStyle, ...fadeInAnimation }}>
          <p className="vision">OUR VISION</p>
          <p>A world in which anyone can create their future.
            Our vision is one that strives to connect our African people to the future they envision for themselves.  This is the goal in-front of us and it keeps us striving for more. Simply put…we will know we are succeeding when people working in tech in Africa have the same earning potential as their global counterparts possessing the same attitude and mindset.</p>
        </div>
      </div>
      <footer style={footerStyle}>
        &copy; 2024 Company Name. All Rights Reserved.
      </footer>
    </div>
  );
};

const headerStyle = {
  backgroundColor: '#2281e6',
  color: '#fff',
  padding: '10px 0',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '800px',
  margin: 'auto',
  padding: '20px',
};

const pageStyle = {
  marginBottom: '20px',
  padding: '20px',
  borderRadius: '5px',
};

const missionBgStyle = {
  backgroundColor: '#2281e6',
  color: '#fff',
};

const visionBgStyle = {
  backgroundColor: '#fff',
  color: '#2281e6',
};

const fadeInAnimation = {
  animationDuration: '15s',
};

const footerStyle = {
  backgroundColor: '#2281e6',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default AboutUs;
