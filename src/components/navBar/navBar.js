import React, { useState } from "react";
import "./navBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      <div className="container">
        <h1>
          Ne<span className="primary">OZ</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#Featured">Featured</a>
          </li>
          <li>
            <a href="#Earn">Earn</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger" onClick={handelClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
