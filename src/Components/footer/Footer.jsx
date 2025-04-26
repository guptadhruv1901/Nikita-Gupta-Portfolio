import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-left">
          <h1><a href="/">Made with Love</a></h1>
          <p>By <a href="/about">Nikita Gupta</a></p>
        </div>
        <div className="footer-middle">
          <h1><a href="/events">Events</a></h1>
          <p>Let's check out the events attended</p>
        </div>
        <div className="footer-right">
          <h1><a href="/contact">Let's Talk</a></h1>
          <p><a href="mailto:hello@husainzaidi.com">hello@nikitagupta.com</a></p>
        </div>
      </div>
      <div className="copyright"> {/* Separate div for copyright */}
        <p>&copy; Copyright 2025 Nikita Gupta. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer