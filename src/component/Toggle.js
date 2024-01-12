import React, { useContext } from "react";
import sun from "../images/sun.png";
import moon from "../images/moon.png";

import "../Styles/Toggle.css";
import { ThemeContext } from "../Contextapi/context";

function Toggle() {
  const theme= useContext(ThemeContext)

  const handleClick=()=>{
    theme.dispatch({type:"TOGGLE"})

  }
  
  return (
    <div className="t">
      <img src={sun} alt="sun" className="t-icon" />
      <img src={moon} alt="mooon" className="t-icon" />
     <div  className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0: 25}} ></div>
    </div>
  );
}

export default Toggle;
