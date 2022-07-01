import React from "react";
import { useState } from "react";
import { Api } from "../utils/Api";
import { Constants } from "../utils/Constants";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    new Api().post(Constants.AUTH_PREFIX + "/register", {
      username: name,
      email: email,
      password: password
    }).then((res) => {
      alert("te-ai inregistrat");
    });
  };

  return (
    <main className="page registration-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Registration</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div>
            <div className="mb-3">
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="form-control item"
                type="text"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" for="email">
                Email
              </label>
              <input
                className="form-control item"
                type="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-control item"
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="btn btn-primary" onClick={register}>
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
