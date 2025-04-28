import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div className="contact-card">
        <div className="left-section">
            <h2>Just say Hello</h2>
            <p>Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be a part of your vision.</p>
            <p>Just want to say Hello? I love connecting with new people, sharing stories and exploring new perspectives. Let's grab a coffee and discuss the design of Tesla Cybertruck!</p>

            <div className="contact-info">
                <div className="email">
                    <img src={assets.mailIcon} alt="Email Icon" />
                    <div className="col-gap">
                        <h4>Write to me</h4>
                        <a href="mailto:dhruv2dgr8@gmail.com">nikitagupta1198@gmail.com</a>
                    </div>
                </div>
                <div className="phone">
                    <img src={assets.phoneIcon} alt="Phone Icon" /> {/* Replace with your icon */}
                    <div className="col-gap">
                        <h4>Feeling like talking?</h4>
                        <a href="tel:+16473938932">+91 (878) 709-4704</a>
                    </div>
                </div>
                <div className="location">
                    <img src={assets.locationIcon} alt="Location Icon" /> {/* Replace with your icon */}
                    <div className="col-gap">
                        <h4>I'm located in</h4>
                        <a>Shahjahanpur, Uttar Pradesh, India</a>
                    </div>
                </div>
            </div>
            <hr />
            <p className="connect-message">Nothing to say right now? Still want to be in touch? Let's connect!</p>
            <div className="social">
                <a href="https://www.linkedin.com/in/artbynikita11/"><img src={assets.linkedinIcon} alt="" /></a>
                <a href="https://www.instagram.com/artbynikita11/"><img src={assets.instaIcon} alt="" /></a>
                <a href=""><img src={assets.twitterIcon} alt="" /></a>
                <a href=""><img src={assets.fbIcon} alt="" /></a>
            </div>
        </div>

        <div className="right-section">
        <h2>Share a quick thought</h2>
        <form action="https://formsubmit.co/guptadhruv1901@gmail.com" method='POST'>
            <div className="row-gap">
                <input type="text" id="name" name="name" placeholder='Name*' required />
                <input type="email" id="email" name="email" placeholder='Email*' required />
            </div>
            
            <div className="form-group">
            <input type="text" id="subject" name="subject" placeholder='Subject' />
            </div>
            <div className="form-group">
                <textarea id="message" name="message" rows="5" placeholder='Message'></textarea>
            </div>
            <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
    
  )
}

export default Contact