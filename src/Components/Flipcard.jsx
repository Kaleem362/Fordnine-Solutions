import React from "react";
import "../Styles/Flipcard.css";
import innovationvideo from "../Assets/videos/Innovation.mp4";
import Collaborationvideo from "../Assets/videos/Collaboration.mp4";
import Integrityvideo from "../Assets/videos/Integrity.mp4";
import Excellencevideo from "../Assets/videos/Excellence.mp4";
import empowermentvideo from "../Assets/videos/empowermentvideo.mp4";

function Flipcard() {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="card-front">
          <video autoPlay loop muted className="card-video">
            <source src={innovationvideo} type="video/mp4" />
          </video>
          <h2 className="card-title">Innovation</h2>
        </div>
        <div className="card-back">
          <p className="card-description">
            "Pioneering the future with cutting-edge technology."
          </p>
        </div>
      </div>
      <div className="flip-card">
        <div className="card-front">
          <video autoPlay loop muted className="card-video">
            <source src={empowermentvideo} type="video/mp4" />
          </video>
          <h2 className="card-title">Empowerment</h2>
        </div>
        <div className="card-back">
          <p className="card-description">
            "Empowering businesses with innovative solutions to thrive in a
            dynamic world."
          </p>
        </div>
      </div>

      <div className="flip-card">
        <div className="card-front">
          <video autoPlay loop muted className="card-video">
            <source src={Excellencevideo} type="video/mp4" />
          </video>
          <h2 className="card-title">Excellence</h2>
        </div>
        <div className="card-back">
          <p className="card-description">
            "Delivering perfection, every single time."
          </p>
        </div>
      </div>
      <div className="flip-card">
        <div className="card-front">
          <video autoPlay loop muted className="card-video">
            <source src={Collaborationvideo} type="video/mp4" />
          </video>
          <h2 className="card-title fs-2">Collaboration</h2>
        </div>
        <div className="card-back">
          <p className="card-description">
            "Building solutions together, stronger than ever."
          </p>
        </div>
      </div>
      <div className="flip-card">
        <div className="card-front">
          <video autoPlay loop muted className="card-video">
            <source src={Integrityvideo} type="video/mp4" />
          </video>
          <h2 className="card-title">Integrity</h2>
        </div>
        <div className="card-back">
          <p className="card-description">
            "The foundation of everything we do."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
