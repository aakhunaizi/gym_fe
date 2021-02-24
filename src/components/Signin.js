import { useState } from "react";
import { Helmet } from "react-helmet";
import { signin } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [show, setShow] = useState("password");

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <div className="container" style={{ width: "20%" }}>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
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

        <button className="btn btn-outline-success float-center" type="submit">
          Sign In
        </button>
      </form>
      <br />
      <Link to="/signup">
        <p>Don't have an account?</p>
      </Link>
      <br />
      <Link to="/">
        <button
          style={{ margin: "2%" }}
          className="btn btn-outline-secondary float-center"
          type="submit"
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default Signin;
