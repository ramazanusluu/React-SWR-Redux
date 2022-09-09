import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Sidebar from "../Sidebar";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          {!isOpen && (
            <button
              className="btn btn-danger fs-6 active"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-bars me-2"></i>
              Tüm Ürünler
            </button>
          )}
          {isOpen && (
            <button
              className="btn btn-danger fs-6  active"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-arrow-left me-2"></i>
              Tüm Ürünler
            </button>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <Link to="/">
                  <button className="btn btn-danger fs-6 active">
                    <i className="fa-solid fa-house me-2"></i>
                    Ana Sayfa
                  </button>
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link to="/search">
                  <button className="btn btn-danger fs-6 active">
                    <i className="fa-solid fa-magnifying-glass me-2"></i>
                    Ara
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/card">
                  <button className="btn btn-danger fs-6 active">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span className="translate-middle badge rounded-pill bg-light text-dark rounded-circle">
                      0
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* {isOpen && <Sidebar />} */}
    </div>
  );
}

export default Navbar;
