import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Link className="logo" to={"/"}>
        <img src={logo} alt="" />
        <div className="logo-text">Blockbrain</div>
      </Link>
      <div className="nav">
        <Link to={"/wallet"}>My wallet</Link>
        <Link to={"/"}>Explorer</Link>
        <Link to={"/features"}>Features</Link>
      </div>
      <div className="auth-btns">
        <div className="login">
          <Link to={"/login"}>Login</Link>
        </div>
        <div className="signup">
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
