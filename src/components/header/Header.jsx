import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src={assets.logo} alt="" />
          </div>
          <div className="ad">
            <img src={assets.headerb} alt="" />
          </div>
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
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/culture"}>Culture</Link>
              </li>
              <li>
                <Link to={"/politics"}>Politics</Link>
              </li>
              <li>
                <Link to={"/memes"}>Memes</Link>
              </li>
              <li>
                <Link to={"/sports"}>Sports</Link>
              </li>
              <li>
                <Link to={"/boxed"}>Boxed</Link>
              </li>
              <li>
                <Link to={"/reviews"}>Reviews</Link>
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
