import React from "react";
import "../globals.css";

import logo from "../../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


const FooterComponent = () => {
  return (
    <footer>

      <div className="footer-logo">
        <img src={logo.src} alt="Logo CASADY" />
      </div>

      <div className="contact">
          <p>Contact us</p>
          <div>
              <div className="side-footer">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo excepturi eveniet incidunt, laboriosam quasi adipisci non libero expedita iure, aperiam molestias quod veniam eos? Vitae saepe voluptatibus consequuntur tempore aperiam.</p>
                  <p>+00 123 4567890</p>
                  <p> 123 Street Name, City Name, State, Country, 123456</p>
              </div>
              <div className="contact-form">
                  <form action="#" method="post" >
                      <div className="form-group">
                          <label for="name">Name</label>
                          <input type="text" id="name" name="name" required/>
                      </div>

                      <div className="form-group">                        
                          <label for="email">Email</label>
                          <input type="email" id="email" name="email" required/>
                      </div>

                      <div className="form-group">                        
                          <label for="message">Message</label>
                          <textarea id="message" name="message" rows="4" required></textarea>
                      </div>
                      
                      <button type="submit" className="submit">send</button>
                  </form>
            </div>
      </div>

      </div>
    <div className="footerFooter">
        <ul className="social-icon">
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="social-icon__item">
              <a className="social-icon__link" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
        </ul>
        <ul className="menu">
            <li className="menu__item">
            <a className="menu__link" href="#">
              Home
            </a>
            </li>
            <li className="menu__item">
            <a className="menu__link" href="#">
              News
            </a>
            </li>
            <li className="menu__item">
            <a className="menu__link" href="#">
              About
            </a>
            </li>
            <li className="menu__item">
            <a className="menu__link" href="#">
              Contact Us
            </a>
            </li>
            <li className="menu__item">
            <a className="menu__link" href="#">
              Our Team
            </a>
            </li>
        </ul>
    </div>
</footer>
      
  );
};

export default FooterComponent;
