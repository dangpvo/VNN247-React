import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src={assets.logoFooter} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              ullam expedita dicta ratione, vel iure sint voluptatibus
              consequatur provident excepturi ducimus!
            </p>

            <i class="bxr bx-envelope-alt"></i>
            <span>info@hahaha.com</span>
            <br />
            <i class="bxr bx-phone"></i>
            <span>0123456789</span>
          </div>
          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src={assets.coverImgHero1} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item">
              <img src={assets.coverImgHero2} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src={assets.coverImgHero3} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item">
              <img src={assets.coverImgHero4} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="box">
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span>
                <label>(5)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Fashion</span>
                <label>(6)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Health</span>
                <label>(7)</label>
              </li>
            </ul>
            <ul>
              <li>
                <span>Nature</span>
                <label>(8)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <div className="container flexSB">
          <p>All rights reserved.</p>
          <p>made by dangpvo</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
