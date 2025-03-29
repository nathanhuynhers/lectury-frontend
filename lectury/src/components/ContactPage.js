import React from 'react';
import './ContactPage.css';
import Navbar from './Navbar';
import cat from '../cat.svg';
import profilePic from '../profile-pic.svg';

const ContactPage = () => {
    return (
      <div className="contact-page">
        <Navbar />
  
        <div className="contact-content">
          <h2 className="contact-heading">Let’s Get in Touch</h2>
  
          <p className="contact-subtext">
            Feel free to reach out with questions, feedback, or just to say hello!
          </p>
  
          <div className="contact-card">

            <div className="contact-details">
                <div className="contact-photo-wrapper">
                    <img src={cat} alt="Mascot" className="contact-mascot" />
                    <img src={profilePic} alt="Profile" className="contact-photo" />
                </div>
                <div className="contact-info">
                    <h3 className="contact-info-heading">Contact Me:</h3>
                    <p className="contact-detail">Nathan Huynh</p>
                    <p className="contact-detail">nathan1nathan@berkeley.edu</p>
                    <p className="contact-detail">(760) 403-6093</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
