import React, { useState } from "react";
import { Api } from "../utils/Api";
import { Constants } from "../utils/Constants";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function Login({ setUser, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    new Api()
      .post(Constants.AUTH_PREFIX + "/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  };


  return (
    <main className="page login-page">
      {
        user.id != "" && <Navigate to="/" />
      }
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Log In</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div>
            <div className="mb-3">
              <label className="form-label" for="username">
                Username
              </label>
              <input
                className="form-control item"
                type="text"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox"
                />
                <label className="form-check-label" for="checkbox">
                  Remember me
                </label>
              </div>
            </div>
            <button className="btn btn-primary" onClick={login}>
              Log In
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
