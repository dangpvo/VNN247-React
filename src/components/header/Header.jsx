import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import useMobileNav from "../../hooks/useMobileNav";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const moreMenuRef = useRef(null);
  const morePopupRef = useRef(null);

  const { isMobileNavOpen, toggleMobileNav, mobileNavRef, headerBarsRef } =
    useMobileNav();

  const togglePopup = (e) => {
    e.preventDefault();
    setIsPopupVisible((prev) => !prev);
  };

  const handleMobileNav = () => {
    toggleMobileNav();
    setNavbar(!navbar);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        moreMenuRef.current &&
        morePopupRef.current &&
        !moreMenuRef.current.contains(e.target) &&
        !morePopupRef.current.contains(e.target)
      ) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <img src={assets.logoFooter} alt="" />
          </div>
          {/* <div className="ad">
            <img src={assets.headerb} alt="" />
          </div> */}
          <button className="barIco" onClick={() => handleMobileNav()}>
            {navbar ? (
              <i className="bx bx-x" />
            ) : (
              <i className="bxr  bx-menu"></i>
            )}
          </button>
        </div>
      </section>

      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li>
                <Link to={"/articles"}>Bài viết</Link>
              </li>
              <li>
                <Link to={"/news"}>Thời sự</Link>
              </li>
              <li>
                <Link to={"/international"}>Thế giới</Link>
              </li>
              <li>
                <Link to={"/economy"}>Kinh tế</Link>
              </li>
              <li>
                <Link to={"/education"}>Giáo dục</Link>
              </li>
              <li>
                <Link to={"/health"}>Sức khỏe</Link>
              </li>
              <li>
                <Link to={"/entertainment"}>Giải trí</Link>
              </li>
              <li>
                <Link to={"/jobs"}>Việc làm</Link>
              </li>
              <li>
                <Link to={"/ennews"}>Tin tiếng Anh</Link>
              </li>
              <li className="more-li" ref={moreMenuRef} onClick={togglePopup}>
                Xem thêm <i className="bxr  bx-arrow-down-stroke-circle"></i>
                {isPopupVisible && (
                  <div className="more-popup" ref={morePopupRef}>
                    <ul className="more-popup__ul">
                      <li className="more-popup__li">
                        <Link to={"/lawnpolicy"}>Pháp luật</Link>
                      </li>
                      <li className="more-popup__li">
                        <Link to={"/sports"}>Thể thao</Link>
                      </li>
                      <li className="more-popup__li">
                        <Link to={"/life"}>Đời sống</Link>
                      </li>
                      <li className="more-popup__li">
                        <Link to={"/travel"}>Du lịch</Link>
                      </li>
                      <li className="more-popup__li">
                        <Link to={"/science"}>Khoa học</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div ref={mobileNavRef} className="mobile-nav">
        <nav>
          <ul className="mobile-nav__menu">
            <li>
              <Link to={"/"} className="mobile-nav__link">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to={"/articles"} className="mobile-nav__link">
                Bài viết
              </Link>
            </li>
            <li>
              <Link to={"/news"} className="mobile-nav__link">
                Thời sự
              </Link>
            </li>
            <li>
              <Link to={"/international"} className="mobile-nav__link">
                Thế giới
              </Link>
            </li>
            <li>
              <Link to={"/economy"} className="mobile-nav__link">
                Kinh tế
              </Link>
            </li>
            <li>
              <Link to={"/education"} className="mobile-nav__link">
                Giáo dục
              </Link>
            </li>
            <li>
              <Link to={"/health"} className="mobile-nav__link">
                Sức khỏe
              </Link>
            </li>
            <li>
              <Link to={"/entertainment"} className="mobile-nav__link">
                Giải trí
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} className="mobile-nav__link">
                Việc làm
              </Link>
            </li>
            <li>
              <Link to={"/ennews"} className="mobile-nav__link">
                Tin tiếng Anh
              </Link>
            </li>
            <li>
              <Link to={"/law"} className="mobile-nav__link">
                Pháp luật
              </Link>
            </li>
            <li>
              <Link to={"/sport"} className="mobile-nav__link">
                Thể thao
              </Link>
            </li>
            <li>
              <Link to={"/life"} className="mobile-nav__link">
                Đời sống
              </Link>
            </li>
            <li>
              <Link to={"/travel"} className="mobile-nav__link">
                Du lịch
              </Link>
            </li>
            <li>
              <Link to={"/science"} className="mobile-nav__link">
                Khoa học
              </Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="mobile-nav-close-btn"
          onClick={toggleMobileNav}
        >
          <i className="bxr  bx-x"></i>
        </button>
      </div>
    </>
  );
};

export default Header;
