import { useState } from "react";
import { Helmet } from "react-helmet";
import { signup } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });
  const [show, setShow] = useState("password");

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
    return (
      <div class="alert alert-primary" role="alert">
        Signed up successfully!
      </div>
    );
  };

  return (
    <div className="container" style={{ width: "20%" }}>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            name="name"
            value={user.name}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            required
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            required
            name="password"
            value={user.password}
            type={show}
            className="form-control"
            onChange={handleChange}
          />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check"
              onChange={() =>
                setShow(show === "password" ? "text" : "password")
              }
            />
            <label className="form-check-label">Show password</label>
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            required
            name="email"
            value={user.email}
            type="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline-success float-center" type="submit">
          Create Account
        </button>
      </form>
      <Link to="/">
        <button
          style={{ margin: "2%" }}
          className="btn btn-outline-secondary float-center"
          type="submit"
        >
          Back
        </button>
      </Link>
      <Link to="/signin">
        <p>Already have an account?</p>
      </Link>
    </div>
  );
};

export default Signup;
