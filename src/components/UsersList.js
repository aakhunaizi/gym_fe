import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const UsersList = () => {
  const user = useSelector((state) => state.authReducer.user);
  const users = useSelector((state) => state.userReducer.users);

  if (!user) return <Redirect to="/signin" />;
  if (user.type !== "admin") return <Redirect to="/" />;
  return (
    <div>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default UsersList;
