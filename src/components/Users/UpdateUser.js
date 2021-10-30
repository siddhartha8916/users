import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams} from "react-router";

const UpdateUser = () => {

  let history = useHistory()

  const {id} = useParams();
  
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    course: "",
    address: "",
  });

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`)
    setUser(result.data)
  }

  useEffect(() => {
    loadUser()
  }, [])

  const onInputChange = (e) => {
    setUser({ ...user,[e.target.name]: e.target.value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`http://localhost:3001/users/${id}`,user)
    history.push("/")
  }

  return (
    <div className="container mt-4">
    <div className="mt-5">
    <div className="container">
      <form onSubmit={onFormSubmit} className="form-container">
        <div className="container">
          <div className="row">
            <h3
              className="pt-4 pb-4"
              style={{ textAlign: "center", color: "white" }}
            >
              Edit User Details
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
          <button type="submit" className="btn btn-warning mt-4 mb-4 mx-auto">
            Update User
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default UpdateUser


