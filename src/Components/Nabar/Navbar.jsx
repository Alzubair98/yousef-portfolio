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
              <li className="n-li">Home</li>
            </Link>
            <Link spy={true} to="مشاركاتي" smooth={true}>
              <li className="n-li">Participations</li>
            </Link>
            <Link spy={true} to="اعمالي" smooth={true}>
              <li className="n-li">About</li>
            </Link>

            <Link spy={true} to="Navbar" smooth={true}>
              <li className="n-li">Blogs</li>
            </Link>

            {/* <Link spy={true} to="Navbar" smooth={true}>
              <li>فيديوهاتي</li>
            </Link> */}
          </ul>
        </div>
        <Link spy={true} to="contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
