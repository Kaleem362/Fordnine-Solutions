import React from "react";
import logo from "../Logo/NEWCREATED.png";
import "../Styles/Footer.css";
import facebook from "../pngicons/facebook.png";
import instagram from "../pngicons/instagram.png";
import youtube from "../pngicons/youtube.png";
import playstore from "../pngicons/playstore.png";
import discord from "../pngicons/discord.png";
import linkedin from "../pngicons/linkedin.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="fluid-container footer-container">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="links-box">
          <p>company</p>
          <Link rel="stylesheet" to="/">
            Home
          </Link>
          <Link rel="stylesheet" to="/AboutPage">
            About
          </Link>
          <a rel="stylesheet" href="/TeamPage">
            Team
          </a>
          <a rel="stylesheet" href="/ProductsPage">
            Products
          </a>
          <a rel="stylesheet" href="/ServicesPage">
            Services
          </a>
          <a rel="stylesheet" href="/contactPage">
            Contact
          </a>
        </div>
        <div>
          <div className="queries-box">
            <p>Reach us out</p>
            <small>
              For Job related,
              <br />
              General queries &
              <br />
              Support...
            </small>
            <a href="fordnine.com">Fordnine.com</a>
          </div>
        </div>
        <div className="social-media-box">
          <p>follow us on social media</p>
          <div className="social-media-icons">
            <a href="https://discord.com/users/.asfandyarkhan">
              <img src={discord} alt="discord" />
            </a>
            <a href="https://www.facebook.com/ford9institute">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.youtube.com/@Ford9Solutions">
              <img src={youtube} alt="" />
            </a>
            <a href="https://play.google.com/store/search?q=fordnine&c=apps&hl=en">
              <img src={playstore} alt="" />
            </a>
            <a href="https://www.instagram.com/ford9institute">
              <img src={instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/ford9solutions/posts/?feedView=all">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p className="text-white">All rights reserved</p>
      </div>
      {/* <div
        className="footer-text d-flex justify-content-center align-items-center"
        style={{ gap: "600px" }}
      >
        <div className="copy-right-content">
          <p>
            All Rights Reserved -- &#169;{" "}
            <span>
              -- Ford9 <span style={{ fontSize: "16px" }}>Solutions</span>
            </span>
          </p>
        </div>
        <div
          className="developer-sign"
          style={{
            color: "white",
          }}
        >
          <p>
            Designed and Developed by{" "}
            <a
              href="https://Kaleem.vercel.app/"
              className="Manrope text-decoration-none"
            >
              Kaleem ullah
            </a>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
