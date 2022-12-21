import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";

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
            <li>الرئيسية</li>
            <li>مشاركاتي</li>
            <li>كتاباتي</li>
            <li>زياراتي</li>
            <li>فيديوهاتي</li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
