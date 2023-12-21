import React from 'react'
import './footer.css'
import { faChevronRight, faCoffee, faEarthAmerica, faEnvelope, faHeart, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div>
      <div className="contact">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <div className="about-us">
                <h3>About us</h3>
                <p>
                  {" "}
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur. I am text block. Click edit
                  button to change this text. Lorem ipsum dolor sit amet,
                  consectetur.
                </p>
                <p>
                  We are the champions! We are the most amazing theme of all
                  time, yeah.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="useful-link">
                <h3>Useful Links</h3>
                <div className="list-links">
                  <ul>
                    <li className="li">
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />{" "}
                        Contact
                      </a>
                    </li>
                    <li className="li">
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />
                        About
                      </a>
                    </li>
                    <li className="li">
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />
                        Menu
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="opening-hours">
                <h3>Opening Hours</h3>
                <div className="list-links">
                  <ul>
                    <li className="li">
                      {" "}
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />
                        Monday 10AM – 9PM
                      </span>
                    </li>
                    <li className="li">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />{" "}
                        Tuesday 10AM – 9PM
                      </span>
                    </li>
                    <li className="li">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />{" "}
                        Wednesday 10AM – 9PM
                      </span>
                    </li>
                    <li className="li">
                      {" "}
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />
                        Thursday 10AM – 10PM
                      </span>
                    </li>
                    <li className="li">
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />{" "}
                        Friday 10AM – 10PM
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="pe-2"
                        />
                        Weekends 10AM – 11PM
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-details">
                <div className="contact-details0">
                  <h3>Contact Details</h3>
                  <div className="list-links">
                    <ul>
                      <li className="li">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="pe-2"
                        />
                        <span>
                          Manchester Road 123-78B, Silictown 7854MD, Great
                          Country
                        </span>
                      </li>
                      <li className="li">
                        <FontAwesomeIcon icon={faPhone} className="pe-2" />
                        <a href="#">+46 123 456 789</a>
                      </li>
                      <li className="li">
                        <FontAwesomeIcon icon={faEnvelope} className="pe-2" />
                        <a href="#">hello@sitename.com</a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faEarthAmerica}
                          className="pe-2"
                        />
                        <a href="#">http://www.sitename.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*section eight*/}
      <div className="section-eight bg-dark py-5 text-center">
        <div className="copyright">
        <div className='brand'>
            <a className="navbar-brand text-white" href="#">
              <span><img src='logofooter.PNG' alt='logoFooter'/></span>
            </a>
            </div>
          <p className="text-white">
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <FontAwesomeIcon icon={faHeart} /> by Tasbeeh Naser
          </p>
          <div className='mt-4'>
            <FontAwesomeIcon icon={faFacebook} className="text-white pe-3" size='lg' />
            <FontAwesomeIcon icon={faTwitter} className="text-white pe-3" size='lg'/>
            <FontAwesomeIcon icon={faTumblr} className="text-white pe-3" size='lg'/>
            <FontAwesomeIcon icon={faInstagram} className="text-white pe-3" size='lg'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer