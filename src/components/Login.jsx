import React, { useState } from "react";
import Image from "../assets/Passport_Photo.jpg";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setMessageError("Message cannot be empty");
      return;
    }
    
    console.log("Form Details:", { name, email, message });
    setMessageError("");
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Contact Us" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="login-center">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-group">
                <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-input"
                placeholder="Enter your message"
                ></textarea>
                {messageError && <span className="error-text">{messageError}</span>}
                </div>

              <div className="login-center-buttons">
                <button type="submit" className="login-button">Send Message</button>
                <button type="button" className="google-login-button">
                  <img src={GoogleSvg} alt="Google" />
                  Contact Via Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
