import React from "react";
import { Link } from "react-router-dom";
import { Api } from "../utils/Api";
import { Constants } from "../utils/Constants";

function Navbar() {
  const logout = () => {
    new Api().post(Constants.AUTH_PREFIX + "/signout").then((res) => {
      console.log(res);
    });
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark clean-navbar">
      <div className="container">
        <Link className="navbar-brand logo" to="/">
          Tecuci News
        </Link>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-11"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-11">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="news">
                news
              </Link>
            </li>
            <li className="nav-item item">
              <Link className="nav-link" to="login">
                Login
              </Link>
            </li>
            <li className="nav-item item">
              <Link className="nav-link" to="register">
                Register
              </Link>
            </li>
            <li className="nav-item item">
              <Link className="nav-link" to="contact">
                CONTACT US
              </Link>
            </li>
            <li className="nav-item item">
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
