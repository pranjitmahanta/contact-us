import React, { useState } from "react";
import Image from "../assets/Passport_Photo.jpg";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showStrength, setShowStrength] = useState(false);

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    let strength = "";
    if (password.length < 6) {
      strength = "Weak";
    } else if (/[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      strength = "Strong";
    } else {
      strength = "Moderate";
    }
    setPasswordStrength(strength);
  };

  // Hide password strength when clicking on another input field
  const handleFocus = (e) => {
    if (e.target.name !== "password") {
      setShowStrength(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Details:", { name, email, password, confirmPassword });
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleFocus} // Hide strength when clicking on this
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus} // Hide strength when clicking on this
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkPasswordStrength(e.target.value);
                  }}
                  onFocus={() => setShowStrength(true)} // Show strength when focusing on password
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              {/* Password Strength Indicator */}
              {showStrength && (
                <div className="password-strength-container">
                  <p className={`password-strength-text ${passwordStrength.toLowerCase()}`}>
                    Strength: {passwordStrength}
                  </p>
                  <div className="password-strength-bar">
                    <div className={`strength-fill ${passwordStrength.toLowerCase()}`}></div>
                  </div>
                </div>
              )}

              <div className="pass-input-div">
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={handleFocus} // Hide strength when clicking on this
                />
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit" className="login-button">Log In</button>
                <button type="button" className="google-login-button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
