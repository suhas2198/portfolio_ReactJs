import React from "react";

import "../Styles/about.css";

import photographer from "../images/photographer.jpeg";
import award from "../images/award.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className="a-img" src={photographer} alt="" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          I have completed B.E in mechnical engineering from Modern college of
          engineering pune , with First class in 2020, I have completed nine
          month Diploma in MEAN and MERN from Firstbit Solution.
        </p>
        <p className="a-desc">
          While pursuing my bachelor degree I participated in some activities
          like Gokart competion, Aeromodelling competion wchich was very good
          experience to work with team.
          My hobbies are painting, Reading, Swimming. 
        </p>
        
      </div>
    </div>
  );
}

export default About;
