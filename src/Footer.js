import './App.css';
import react from 'react';
import instagram from './images/instagram.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import email from './images/email.png';


function Footer(){
  return(
    <div className="footer">
      <ul className="footer-logos">
        <li><a href = "https://www.instagram.com/stephen._x_/"><img src={instagram} alt ="instagram-logo" className="footer-logo" /></a></li>
        <li className="sec-footer-logo"><a href="https://github.com/Stephen-Terera"><img src={github} alt="github-logo" className="footer-logo"/></a></li>
        <li className="sec-footer-logo"><a href="https://www.linkedin.com/in/stephen-terera-867bb11b9/"><img src={linkedin} alt="linkedin-logo" className="footer-logo"/></a></li>
        <li className ="sec-footer-logo"><a href="mailto:stephenterera@gmail.com"><img src={email} alt="email-logo" className="footer-logo"/></a></li>
      </ul>
    </div>
  )
}

export default Footer;
