import React, {useState} from "react";
import "./UserProfile.css";

export default function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    passWord: "",
  });

  function handleChangeValue(event) {
    let {name, value} = event.target
    setValues({...values, [name] : value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(values)
  }
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          fontSize:
            'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
          width: 600,
        }}
        onSubmit={handleSubmit}
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
                onChange={handleChangeValue}
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
                onChange={handleChangeValue}
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
                onChange={handleChangeValue}
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
              <input value={values.email} type="email" name="email" required
              onChange={handleChangeValue}
              />
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
                onChange={handleChangeValue}
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
            style={{fontSize: 25}}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
