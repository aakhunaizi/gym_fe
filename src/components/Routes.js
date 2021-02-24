import { Route, Switch } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Signin from "./Signin";
import UsersList from "./UsersList";
import GymsList from "./GymsList";
import GymDetail from "./GymDetail";
import ClassesList from "./ClassesList";
import TypesList from "./TypesList";
import ClassDetail from "./ClassDetail";

const Routes = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/types">
          <TypesList />
        </Route>
        <Route path="/classes/:classSlug">
          <ClassDetail />
        </Route>
        <Route path="/classes">
          <ClassesList />
        </Route>
        <Route path="/gyms/:gymSlug">
          <GymDetail />
        </Route>
        <Route path="/gyms">
          <GymsList />
        </Route>
        <Route path="/users">
          <UsersList />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
