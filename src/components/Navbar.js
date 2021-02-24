import { useSelector, useDispatch } from "react-redux";
import { Logo, NavItem } from "../styles";
import { signout } from "../store/actions/authActions";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand">
      <h4 className="navbar-brand">
        <Logo to="/">
          <img
            src="https://i.ibb.co/7bmFsHc/active-logo.png"
            alt="Hiking Trips"
          ></img>
        </Logo>
      </h4>
      <div className="navbar-nav ml-auto">
        <NavItem
          exact
          to="/signup"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Sign Up
        </NavItem>
        <NavItem
          to="/signin"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Sign In
        </NavItem>

        {user && (
          <button
            onClick={() => dispatch(signout())}
            className="nav-item"
            style={{ padding: "0.25em 1em" }}
          >
            Sign Out
          </button>
        )}
        <NavItem
          to="/users"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Users
        </NavItem>
        {/* <NavItem
          to="/dashboard"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Dashboard
        </NavItem> */}
        <NavItem
          to="/gyms"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Gyms
        </NavItem>
        <NavItem
          to="/classes"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Classes
        </NavItem>
        <NavItem
          to="/types"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Types
        </NavItem>
      </div>
    </nav>
  );
};

export default NavBar;
