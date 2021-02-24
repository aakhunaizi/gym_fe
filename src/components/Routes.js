import Home from "../components/Home";
import Navbar from "../components/Navbar";
import { Route, Switch } from "react-router";
import Signup from "./Signup";
import Signin from "./Signin";

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
