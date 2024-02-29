import React from 'react';

import twitter from './AboutLogo/twitter.png';
import instagram from './AboutLogo/instagram.png';
import pinterest from './AboutLogo/pinterest.png';
import facebook from './AboutLogo/facebook.png';

import jake from './TeamPic/jake.jpg';
import safia from './TeamPic/safia.jpeg';
import hillary from './TeamPic/hillary.jpeg';
import eve from './TeamPic/eve.jpeg';
import festus from './TeamPic/festus.jpeg';
import herbert from './TeamPic/herbert.jpeg';
import jamie from './TeamPic/Jamie.jpeg';

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

      <div>
      <div className='container' style={{ backgroundColor: 'transparent', paddingTop: '4%', borderRadius: '45px', width: '90%' }}>
                  <div className='row' style={{ justifyContent: 'space-between' }}>
                      <div className='col-md-12 text-center'>
                          <h2 className='secttion-title' >
                              NobHub Team
                          </h2>
                          <p className='section-subtitle'>
                              This is one of the best Web Development Team in the World.
                          </p>
                      </div>

                      <div className='col-sm-6 col-md-4' >
                          <div className='team-item'
                              style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                              }}>
                              <img
                                  src={jake}
                                  alt='reagan'
                                  className='team-member1'
                                  style={{
                                      height: '200px',
                                      width: '200px',
                                      borderRadius: '30px',
                                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                  }}
                              />
                              <h3>Reagan O Jake</h3>
                              <div className='team-info'>
                                  <p>Frontend Developer</p>
                                  <p>Jake is a Developer who works to ensure frontend parts are working as planned by the NobHub development team .</p>

                                  <ul className='team-icon' style={{ display: 'flex', gap: '10px' }}>
                                      <div><a href='#' className='twitter' >
                                          <img src={twitter} alt='' />
                                      </a></div>
                                      <div><a href='#' className='pinterest'>
                                          <img src={pinterest} alt='' />
                                      </a></div>
                                      <div><a href='#' className='instagram'>
                                          <img src={instagram} alt='' />
                                      </a></div>
                                      <div><a href='#' className='facebook'>
                                          <img src={facebook} alt='' />
                                      </a></div>
                                  </ul>
                              </div>

                          </div>

                      </div>

                      <div className='col-sm-6 col-md-4'>
                          <div className='team-item'
                              style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                              }}>
                              <img
                                  src={safia}
                                  alt='safia'
                                  className='team-member1'
                                  style={{
                                      height: '200px',
                                      width: '200px',
                                      borderRadius: '30px',
                                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                  }}
                              />
                              <h3>Yussuf Safia</h3>
                              <div className='team-info'>
                                  <p>Frontend Developer</p>
                                  <p>Safia is  a Developer who  works to ensure the classroom content are available for the user of NobHub classroom .</p>

                                  <ul className='team-icon' style={{ display: 'flex', gap: '10px' }}>
                                      <div><a href='#' className='twitter' >
                                          <img src={twitter} alt='' />
                                      </a></div>
                                      <div><a href='#' className='pinterest'>
                                          <img src={pinterest} alt='' />
                                      </a></div>
                                      <div><a href='#' className='instagram'>
                                          <img src={instagram} alt='' />
                                      </a></div>
                                      <div><a href='#' className='facebook'>
                                          <img src={facebook} alt='' />
                                      </a></div>
                                  </ul>
                              </div>

                          </div>

                      </div>

                      <div className='col-sm-6 col-md-4'>
                          <div className='team-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <img
                                  src={hillary}
                                  alt='emmanuel'
                                  className='team-member1'
                                  style={{
                                      height: '200px',
                                      width: '200px',
                                      borderRadius: '30px',
                                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                  }}
                              />
                              <h3>Emmanuel Hillary</h3>
                              <div className='team-info'>
                                  <p>Frontend Developer</p>
                                  <p>Hillary is a Developer who  works to ensure the classroom recqruitement are available for the user and the school.</p>

                                  <ul className='team-icon' style={{ display: 'flex', gap: '10px' }}>
                                      <div><a href='#' className='twitter' >
                                          <img src={twitter} alt='' />
                                      </a></div>
                                      <div><a href='#' className='pinterest'>
                                          <img src={pinterest} alt='' />
                                      </a></div>
                                      <div><a href='#' className='instagram'>
                                          <img src={instagram} alt='' />
                                      </a></div>
                                      <div><a href='#' className='facebook'>
                                          <img src={facebook} alt='' />
                                      </a></div>
                                  </ul>
                              </div>

                          </div>

                      </div>

                      <div className='col-sm-6 col-md-4'>
                          <div className='team-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <img
                                  src={eve}
                                  alt='eve'
                                  className='team-member1'
                                  style={{
                                      height: '200px',
                                      width: '200px',
                                      borderRadius: '30px',
                                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                  }}
                              />
                              <h3>Eve Mututa</h3>
                              <div className='team-info'>
                                  <p>Frontend Developer</p>
                                  <p>Eve is a  Developer who works to ensure the messages frontend are working.</p>

                                  <ul className='team-icon' style={{ display: 'flex', gap: '10px' }}>
                                      <div><a href='#' className='twitter' >
                                          <img src={twitter} alt='' />
                                      </a></div>
                                      <div><a href='#' className='pinterest'>
                                          <img src={pinterest} alt='' />
                                      </a></div>
                                      <div><a href='#' className='instagram'>
                                          <img src={instagram} alt='' />
                                      </a></div>
                                      <div><a href='#' className='facebook'>
                                          <img src={facebook} alt='' />
                                      </a></div>
                                  </ul>
                              </div>

                          </div>

                      </div>

                      <div className='col-sm-6 col-md-4'>
                          <div className='team-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <img
                                  src={festus}
                                  alt='festus'
                                  className='team-member1'
                                  style={{
                                      height: '200px',
                                      width: '200px',
                                      borderRadius: '30px',
                                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                  }}
                              />
                              <h3>Festus Okurutu</h3>
                              <div className='team-info'>
                                  <p>Backend Developer</p>
                                  <p>Okurutu is a  Developer  works to ensure the backend resources for messages are available.</p>

                                  <ul className='team-icon' style={{ display: 'flex', gap: '10px' }}>
                                      <div><a href='#' className='twitter' >
                                          <img src={twitter} alt='' />
                                      </a></div>
                                      <div><a href='#' className='pinterest'>
                                          <img src={pinterest} alt='' />
                                      </a></div>
                                      <div><a href='#' className='instagram'>
                                          <img src={instagram} alt='' />
                                      </a></div>
                                      <div><a href='#' className='facebook'>
                                          <img src={facebook} alt='' />
                                      </a></div>
                                  </ul>
                              </div>

                          </div>

                      </div>

                      <div className='col-sm-6 col-md-4'>
                          <div className='team-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <img
                                  src={herbert}
                                  alt='herbert'
                                  className='team-member1'
                                  style={{
                                      height: '200px',
                                      width: '200px',
                                      borderRadius: '30px',
                                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                  }}
                              />
                              <h3>Herbert Kipkemoi</h3>
                              <div className='team-info'>
                                  <p>Backend Developer</p>
                                  <p>Kipkemoi is a Developer who works to ensure the backend for  classroom resources are availble.</p>

                                  <ul className='team-icon' style={{ display: 'flex', gap: '10px' }}>
                                      <div><a href='#' className='twitter' >
                                          <img src={twitter} alt='' />
                                      </a></div>
                                      <div><a href='#' className='pinterest'>
                                          <img src={pinterest} alt='' />
                                      </a></div>
                                      <div><a href='#' className='instagram'>
                                          <img src={instagram} alt='' />
                                      </a></div>
                                      <div><a href='#' className='facebook'>
                                          <img src={facebook} alt='' />
                                      </a></div>
                                  </ul>
                              </div>

                          </div>

                      </div>

                      <div className='col-sm-6 col-md-4'>
                          <div className='team-item' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <img
                                  src={jamie}
                                  alt='james'
                                  className='team-member1'
                                  style={{
                                      height: '200px',
                                      width: '200px',
                                      borderRadius: '30px',
                                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
                                  }}
                              />
                              <h3>James Ekasiba </h3>
                              <div className='team-info'>
                                  <p>Backend Developer</p>
                                  <p>Ekasiba is a Backend Developer who works to ensure the registration and authentication are working.</p>

                                  <ul className='team-icon' style={{ display: 'flex', gap: '10px' }}>
                                      <div><a href='#' className='twitter' >
                                          <img src={twitter} alt='' />
                                      </a></div>
                                      <div><a href='#' className='pinterest'>
                                          <img src={pinterest} alt='' />
                                      </a></div>
                                      <div><a href='#' className='instagram'>
                                          <img src={instagram} alt='' />
                                      </a></div>
                                      <div><a href='#' className='facebook'>
                                          <img src={facebook} alt='' />
                                      </a></div>
                                  </ul>
                              </div>

                          </div>

                      </div>

                  </div>
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
