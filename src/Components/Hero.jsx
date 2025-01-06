import React from "react";
import "../Styles/Hero.css";

function Hero() {
  return (
    <div className="Parent-Hero-container">
      <div className="container-fluid Hero-container d-flex flex-column parallax-div">
        <div className="headername">
          <h1 className="text-centers" data-text="FORD9 Solutions">
            FORD9 SOLUTIONS
          </h1>
        </div>
        <p className="Manrope w-50 text-center text-white fw-bold hero-text-p">
          we transform ideas into impactful digital solutions that drive growth
          and efficiency. Our expertise empowers businesses to thrive in a
          competitive world
        </p>
      </div>
      <marquee behavior="" direction="left" scrollamount="20">
        Ideas that inspire, solutions that deliver
      </marquee>
    </div>
  );
}

export default Hero;
