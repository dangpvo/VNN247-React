import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper container">
          <div className="footer-wrapper-left">
            <div className="footer-wrapper-left__logo">
              <img src={assets.logoFooter} alt="" />
            </div>
            <div className="footer-wrapper-left__desc">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                ullam expedita dicta ratione, vel iure sint voluptatibus
                consequatur provident excepturi ducimus!
              </p>
            </div>
          </div>

          <div className="footer-wrapper-right">
            <div className="footer-column subscribe">
              <h1 className="title">Subscribe to our news</h1>
              <form action="">
                <input type="email" placeholder="Email Address..." />
                <button>
                  <i className="bxr  bx-paper-plane"></i> SUBMIT
                </button>
              </form>
            </div>
            <div className="footer-column">
              <div className="footer-column__title">
                <h3>Our Company</h3>
              </div>
              <div className="footer-column__content">
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">News</a>
                  </li>
                  <li>
                    <a href="">Career</a>
                  </li>
                  <li>
                    <a href="">Our Story</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-column__title">
                <h3>Contact Us</h3>
              </div>
              <div className="footer-column__content">
                <ul>
                  <li>09126 Chemnitz, Germany</li>
                  <li>Email: info@verteam.com</li>
                  <li>Phone: (+49) 1234 567 890</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="legal">
        <p>© 2025 VNN247. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
