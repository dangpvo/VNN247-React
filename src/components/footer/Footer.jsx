import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

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
                VNN247 – Đọc tin nhanh, xem rõ ràng, cập nhật liên tục mỗi ngày.
                Tin tức chọn lọc từ Việt Nam và thế giới, dành cho bạn đọc hiện
                đại.
              </p>
            </div>
          </div>

          <div className="footer-wrapper-right">
            <div className="footer-column subscribe">
              <h1 className="title">Subscribe to our news</h1>
              <form>
                <input type="email" placeholder="Email Address..." />
                <button type="submit">
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
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/ourstory"}>Our Story</Link>
                  </li>
                  <li>
                    <Link to={"/career"}>Career</Link>
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
                  <li>Email: info@vnn247.com</li>
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
