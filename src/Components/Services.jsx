import React from "react";
import "../Styles/Services.css";
import appdev3dicon from "../3dicons/ReactNative3d.png";
import figma3dicon from "../3dicons/figma3dlogo.png";
import canva3dlogo from "../3dicons/canva3dlogo.png";
import wordpress3dlogo from "../3dicons/wordpress3dlogo.png";
import JS3dicon from "../3dicons/JS3dicon.png";
import promptengineering3dlogo from "../3dicons/promptengineering3dlogo.png";
function Services() {
  return (
    <>
      <div className="services-header">
        <h1 className="mb-4 text-center">Services</h1>
      </div>
      <div className="fluid-container d-flex flex-column p-5 services-container">
        <div className="card-container d-flex px-2 justify-content-around">
          <div className="card">
            <div className="first-content text-center">
              {/* <span className="fs-5">Web Development</span> */}
              <img src={JS3dicon} alt="" className="img-fluid icon-style" />
            </div>
            <div className="second-content">
              <span className="fs-4 text-center">Web Development</span>
            </div>
          </div>
          <div className="card">
            <div className="first-content">
              <img src={appdev3dicon} alt="" className="img-fluid icon-style" />
            </div>
            <div className="second-content">
              <span className="fs-4 text-center">Mobile Applications</span>
            </div>
          </div>
          <div className="card">
            <div className="first-content">
              <img src={canva3dlogo} alt="" className="img-fluid icon-style" />
            </div>
            <div className="second-content">
              <span className="fs-4 text-center">Canva Designing</span>
            </div>
          </div>
          <div className="card">
            <div className="first-content">
              <img src={figma3dicon} alt="" className="img-fluid icon-style" />
            </div>
            <div className="second-content">
              <span className="fs-4 text-center">Figma Designing</span>
            </div>
          </div>
          <div className="card">
            <div className="first-content">
              <img
                src={wordpress3dlogo}
                alt=""
                className="img-fluid icon-style"
              />
            </div>
            <div className="second-content">
              <span className="fs-4 text-center">Wordpress Development</span>
            </div>
          </div>
          <div className="card">
            <div className="first-content">
              <img
                src={promptengineering3dlogo}
                alt=""
                className="img-fluid icon-style"
              />
            </div>
            <div className="second-content">
              <span className="fs-4 text-center">Prompt Engineeering</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
