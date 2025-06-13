import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <img src="../../assets/images/logo.png" alt="" />
          </div>
          <div className="ad">
            <img src="../../assets/images/headerb.png" alt="" />
          </div>
        </div>
      </section>

      <header>
        <div className="container paddingSmall">
          <nav>
            <ul>
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
            <button className="barIco">
              <i className="bxr  bx-menu"></i>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
