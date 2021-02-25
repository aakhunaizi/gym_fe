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
import Dashboard from "./Dashboard";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const Routes = () => {
  const userLoading = useSelector((state) => state.userReducer.loading);
  const gyms = useSelector((state) => state.gymReducer.gyms);
  const gymLoading = useSelector((state) => state.gymReducer.loading);
  const classes = useSelector((state) => state.classReducer.classes);
  const classLoading = useSelector((state) => state.classReducer.loading);
  const typeLoading = useSelector((state) => state.typeReducer.loading);

  if (userLoading || gymLoading || classLoading || typeLoading)
    return <Loading />;
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/types">
          <TypesList />
        </Route>
        <Route path="/classes/:classSlug">
          <ClassDetail classes={classes} />
        </Route>
        <Route path="/classes">
          <ClassesList />
        </Route>
        <Route path="/gyms/:gymSlug">
          <GymDetail gyms={gyms} />
        </Route>
        <Route path="/gyms">
          <GymsList />
        </Route>
        <Route path="/users">
          <UsersList />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
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
