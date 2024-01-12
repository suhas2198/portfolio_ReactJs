import React, { useContext, useRef, useState } from "react";
import "../Styles/contact.css";
import phone from "../images/telephone.png";
import email from "../images/email.png";
import address from "../images/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../Contextapi/context";

function Contact() {
  const formref = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qtss64f",
        "template_hypvks5",
        formref.current,
        "eX_UkGEldB4C18gUA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss my project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +91 8788527468
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              suhas2198@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              eB-201 Phase-1 wing-B Shree Siddivinayak Nagari, Wagholi,
              Taluka-Daund, Dist-Pun
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> What's your story?</b> Get in touch always available for
            freelancing if the right project comes along me
          </p>
          <form ref={formref} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Messsage"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
