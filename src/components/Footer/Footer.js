import React from 'react'
import './Footer.css'
import { IconContext } from 'react-icons'
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from 'react-icons/ci'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import { DiGithubBadge } from 'react-icons/di'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-form'>
          <p className='footer-form-head'>Let's connect!</p>
          <p className='footer-form-line'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione iure fuga aut illum cum expedita minima, excepturi magni molestias iusto!</p>
          <form>
              <input className='input-email' type="email" name="email" placeholder="Type your e-mail here..." />
              <input className='input-submit' type="submit" name="submit" />
          </form>
        </div>
        <div className='footer-cj'>
            <img src={require('../../Assets/Images/club-logo.png')} alt="" />
            <h3>Coding Junction</h3>
            <p>A club by Students of UIT-BU.</p>
            <p>Copyright &copy; 2022</p>
        </div>
        <div className='footer-soc'>
          <p className='footer-text-socials'>Connect with Us</p>
          <div className='footer-icon-container'>
              <IconContext.Provider value={{ className: 'footer-icons', style: {shadow: '0 0 10px red'} }}>
                <a href="https://www.facebook.com/profile.php?id=100083912174750&mibextid=ZbWKwL" target="_blank" >
                  <span><CiFacebook /></span>
                </a>
                <a href="https://www.instagram.com/coding.junction/" target="_blank" >
                  <span><CiInstagram /></span>
                </a>
                <a href="https://github.com/Coding-Junction-Uit-Bu" target="_blank" >
                  <span><DiGithubBadge /></span>
                </a>
                <a href="https://www.youtube.com/channel/UCIrPKOT4-vQITtNu06dr3pg/featured" target="_blank" >
                  <span><CiYoutube /></span>
                </a>
                <a href="https://www.linkedin.com/company/codingjunction/" target="_blank" >
                  <span><CiLinkedin /></span>
                </a>
                <a href="https://discord.gg/hpfjgdFj" target="_blank" >
                  <span><BiLogoDiscordAlt /></span>
                </a>
              </IconContext.Provider>
          </div>
        </div>
    </div>
  )
}
