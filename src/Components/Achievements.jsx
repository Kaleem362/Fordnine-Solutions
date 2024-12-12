import React from "react";
import "../Styles/Achievements.css";

import Achievementimage from "../images/Achievements Cover image.jpeg";

function Achievements() {
  return (
    <div className="Achievements-container d-flex flex-column p-5">
      <div className="text-center">
        <h1 className="Manrope py-3 pt-5 fs-2 fs-md-1">Who we are</h1>
      </div>
      <div className="d-flex gap-5 flex-column flex-column-reverse align-items-between">
        <div className="paragraph Manrope">
          <b>FORD9 Solutions</b> has established itself as a leader in React
          Native development, specializing in cutting-edge mobile applications
          powered by artificial intelligence (AI). Our expertise spans creating
          AI-driven solutions like generating creative stories, designing
          adaptive quizzes, crafting personalized job application letters, and
          automating code creation. By seamlessly integrating AI with mobile
          technology, we transform complex processes into intuitive,
          user-friendly experiences. Our mission is to empower individuals and
          businesses with tools that inspire creativity, enhance productivity,
          and drive innovation. Leveraging machine learning algorithms and
          predictive models, we ensure our applications are robust and
          forward-thinking. As pioneers in AI and mobile technology, we
          continuously explore emerging fields like augmented reality (AR) and
          machine learning to stay ahead in the ever-evolving tech landscape. At
          FORD9 Solutions, we are shaping the future of technology by delivering
          innovative, impactful solutions that redefine the possibilities of
          mobile applications.
        </div>
        <div className="image-width">
          <img src={Achievementimage} alt="Achievements Cover" className=" " />
        </div>
      </div>
    </div>
  );
}

export default Achievements;
