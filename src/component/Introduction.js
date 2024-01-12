import React from "react";
import "../Styles/intro.css";
import me from "../images/me.png";

function Introduction() {
  return (
    <div className="i">

      <div className="i-left">

        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Suhas Gardare</h1>
          {/* this is structure of title  */}
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">Mechanical Engineer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Artist</div>
            </div>
            
          </div>
          {/* this is Description   */}
          <p className="i-desc">
            I am a fullstack developer I have knowledge of React, Angular
            frontend framework ,backend framework nodejs and expressjs and
            mongoDb
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Introduction;
