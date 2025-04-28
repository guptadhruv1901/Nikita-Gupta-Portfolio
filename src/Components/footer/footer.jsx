import React from 'react'
import { Link } from 'react-router-dom' // 👈 Import Link from react-router-dom
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-left">
          <h1><Link to="/">Made with Love</Link></h1>
          <p>By <Link to="/about">Nikita Gupta</Link></p>
        </div>
        <div className="footer-middle">
          <h1><Link to="/events">Events</Link></h1>
          <p>Let's check out the events attended</p>
        </div>
        <div className="footer-right">
          <h1><Link to="/contact">Let's Talk</Link></h1>
          <p><a href="mailto:hello@husainzaidi.com">hello@nikitagupta.com</a></p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Copyright 2025 Nikita Gupta. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
