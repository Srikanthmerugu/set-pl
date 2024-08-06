import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-logo-container'>
        <img src='/assets/logo.png' alt='Logo' className='footer-logo'/>
        <div className='footer-social-container'>
            <a href='https://github.com/victor-kramarenko' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/github.png' alt='GitHub' className='footer-social-icon'/>
            </a>
            <a href='https://www.linkedin.com/in/victor-kramarenko/' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/linkedin.png' alt='LinkedIn' className='footer-social-icon'/>
            </a>
            <a href='https://www.instagram.com/victor_kramarenko/' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/insta.webp' alt='Instagram' className='footer-social-icon'/>
            </a>
            <a href='https://www.facebook.com/victor-kramarenko/' target='_blank' rel='noopener noreferrer'>
              <img src='/assets/github.png' alt='LinkedIn' className='footer-social-icon'/>
            </a>
        </div>
      </div>

        <div className='footer-company-container'>
          <div className='footer-company'>
            <h1 className='footer-company-heading'>Company</h1>
              <p className='footer-company-items'>Solutions</p>
              <p className='footer-company-items'>Technologies</p>
              <p className='footer-company-items'>Environment</p>
              <p className='footer-company-items'>Home</p>
          </div>

          <div className='footer-company'>
          <h1 className='footer-company-heading'>Support</h1>
              <p className='footer-company-items'>FAQ'S</p>
              <p className='footer-company-items'>Private Policies</p>
              <p className='footer-company-items'>Refund Policies</p>
              <p className='footer-company-items'>Contact Us</p>
          </div>
          <div className='footer-email-form'>
          <h1 className='footer-email-heading'>Email</h1>
            <input type='text' placeholder='Your Email Address' className='footer-email-input'/>
            <button type='submit' className='footer-email-submit'>Subscribe</button>
          </div>
        </div>
      
    </div>
  )
}

export default Footer