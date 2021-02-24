import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router";
import GymForm from "./GymForm";
import { Link } from "react-router-dom";

const GymsList = () => {
  const user = useSelector((state) => state.authReducer.user);
  const gyms = useSelector((state) => state.gymReducer.gyms);

  if (!user) return <Redirect to="/signin" />;
  if (user.type !== "admin") return <Redirect to="/" />;
  return (
    <>
      <Helmet>
        <title>Gyms</title>
      </Helmet>
      <GymForm />
      <div className="container">
        {gyms.map((gym) => (
          <>
            <Link to={`/gyms/${gym.slug}`}>
              <img src={gym.image} alt={gym.name} />
            </Link>
            <p>{gym.name}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default GymsList;
