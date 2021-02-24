import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router";
import Signup from "./Signup";
import Signin from "./Signin";
import GymsList from "./GymsList";
import ClassesList from "./ClassesList";
import TypesList from "./TypesList";
import UsersList from "./UsersList";

const Routes = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/classes">
          <ClassesList />
        </Route>
        <Route path="/types">
          <TypesList />
        </Route>
        <Route path="/users">
          <UsersList />
        </Route>
        <Route path="/gyms">
          <GymsList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
