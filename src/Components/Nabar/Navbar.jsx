import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Yousef</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="Home" smooth={true} activeClass="activeClass">
              <li>الرئيسية</li>
            </Link>
            <Link spy={true} to="مشاركاتي" smooth={true}>
              <li>مشاركاتي</li>
            </Link>
            <Link spy={true} to="اعمالي" smooth={true}>
              <li>اعمالي</li>
            </Link>

            <Link spy={true} to="Navbar" smooth={true}>
              <li>زياراتي</li>
            </Link>

            {/* <Link spy={true} to="Navbar" smooth={true}>
              <li>فيديوهاتي</li>
            </Link> */}
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
