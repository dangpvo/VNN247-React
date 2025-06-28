import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const moreMenuRef = useRef(null);
  const morePopupRef = useRef(null);

  const togglePopup = (e) => {
    e.preventDefault();
    setIsPopupVisible((prev) => !prev);
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
      <section className="head container">
        <div className=" flexSB">
          <div className="logo">
            <img src={assets.logo} alt="" />
          </div>
          {/* <div className="ad">
            <img src={assets.headerb} alt="" />
          </div> */}
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
                Xem thêm
                {isPopupVisible && (
                  <div className="more-popup" ref={morePopupRef}>
                    <ul className="more-popup__ul">
                      <li className="more-popup__li">
                        <Link to={"/law"}>Pháp luật</Link>
                      </li>
                      <li className="more-popup__li">
                        <Link to={"/sport"}>Thể thao</Link>
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

            <button className="barIco" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="bx bx-x" />
              ) : (
                <i className="bxr  bx-menu"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
