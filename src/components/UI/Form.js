import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Form.css";

const Form = () => {
  let history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
    address: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user,[e.target.name]: e.target.value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault()
    await axios.post("http://localhost:3001/users",user)
    history.push("/")
  }

  return (
    <div className="container">
      <form onSubmit={onFormSubmit} className="form-container">
        <div className="container">
          <div className="row">
            <h3
              className="pt-4 pb-4"
              style={{ textAlign: "center", color: "white" }}
            >
              Fill Up the Details
            </h3>
            <div className="col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  value={user.name}
                  name="name"
                  onChange={onInputChange}
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter Name"
                />
                <label for="floatingInput">Your Name</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={onInputChange}
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter Email ID"
                />
                <label for="floatingInput">Email ID</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  value={user.contact}
                  name="contact"
                  onChange={onInputChange}
                  min="1000000000"
                  max="9999999999"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter Contact Number"
                />
                <label for="floatingInput">Contact Number</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div class="form-floating mb-3">
                <input
                  type="test"
                  value={user.course}
                  name="course"
                  onChange={onInputChange}
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter Course"
                />
                <label for="floatingInput">Course</label>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="form-floating">
              <textarea
                class="form-control"
                name="address"
                value={user.address}
                onChange={onInputChange}
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2">Address</label>
            </div>
          </div>
        </div>
        <div className="d-flex justify-items-center">
          <button type="submit" className="btn btn-primary mt-4 mb-4 mx-auto">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
