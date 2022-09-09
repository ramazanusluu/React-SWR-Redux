import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import headerLogo from "../../image/header-logo.png";

function Header() {
  return (
    <div className="my-3">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/">
            <img
              src={headerLogo}
              alt="logo"
              title="vestel-logo"
              style={{ width: "140px" }}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
