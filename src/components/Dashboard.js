import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router";
import { deleteBooking } from "../store/actions/userActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  const userDetail = useSelector((state) => state.userReducer.users).find(
    (_user) => _user.id === user.id
  );

  const handleDelete = (deletedClass) => {
    console.log(deletedClass);
    dispatch(deleteBooking({ ...user, class: deletedClass.id }));
  };

  if (!user) return <Redirect to="/signin" />;
  return (
    <div>
      <Helmet>
        <title>{user.name}</title>
      </Helmet>
      <div className="container">
        {userDetail.classes.map((_class) => (
          <>
            <p>{_class.name}</p>
            <button onClick={() => handleDelete(_class)}>Cancel Booking</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
