import React, { useState } from "react";
import "./UserProfile.css";

export default function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    passWord: "",
  });

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h1> Andrea's assignment</h1>
      <form
        style={{
          fontSize:
            'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
          width: 600,
        }}
        className=" bg-white p-5 m-5"
      >
        <h1 className="text-center mt-0 mb-5">User Profile</h1>
        <div className="row">
          <div className="col-6">
            <div className="group">
              <input
                value={values.firstName}
                type="text"
                name="firstName"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>firstName</label>
            </div>
          </div>
          <div className="col-6">
            <div className="group">
              <input
                type="text"
                value={values.lastName}
                name="lastName"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>lastName</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input
                value={values.userName}
                type="text"
                name="userName"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>userName</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input value={values.email} type="email" name="email" required />
              <span className="highlight" />
              <span className="bar" />
              <label>email</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="group">
              <input
                value={values.passWord}
                name="passWord"
                type="password"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>password</label>
            </div>
          </div>
        </div>
        <div className="row">
          <button
            className="btn text-white bg-dark w-100 col-12"
            style={{ fontSize: 25 }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
