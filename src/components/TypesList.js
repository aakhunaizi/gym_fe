import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router";
import TypeForm from "./TypeForm";

const TypesList = () => {
  const user = useSelector((state) => state.authReducer.user);
  const types = useSelector((state) => state.typeReducer.types);

  if (!user) return <Redirect to="/signin" />;
  if (user.type !== "admin") return <Redirect to="/" />;
  return (
    <>
      <Helmet>
        <title>Class Types</title>
      </Helmet>
      <TypeForm />
      <div className="container">
        {types.map((type) => (
          <p>{type.name}</p>
        ))}
      </div>
    </>
  );
};

export default TypesList;
