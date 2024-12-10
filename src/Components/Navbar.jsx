import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/NEWCREATED.png";
import "../Styles/Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Ford9 institute"
              className="Logo"
              style={{ width: "150px" }}
            />
          </Link>
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
          <div
            className="collapse navbar-collapse margin-left z-index-999"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  to="/"
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  to="/AboutPage"
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link ${
                    activeLink === "services" ? "active" : ""
                  }`}
                  to="/ServicesPage"
                  onClick={() => handleLinkClick("services")}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link ${
                    activeLink === "portfolio" ? "active" : ""
                  }`}
                  to="/ProductsPage"
                  onClick={() => handleLinkClick("portfolio")}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link ${
                    activeLink === "our-team" ? "active" : ""
                  }`}
                  to="/TeamPage"
                  onClick={() => handleLinkClick("our-team")}
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className={`nav-link ${
                    activeLink === "contact-us" ? "active" : ""
                  }`}
                  to="/ContactPage"
                  onClick={() => handleLinkClick("contact-us")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
