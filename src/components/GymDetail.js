import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, useParams } from "react-router";
import ClassForm from "./ClassForm";

const GymDetail = () => {
  const user = useSelector((state) => state.authReducer.user);

  const { gymSlug } = useParams();
  const gym = useSelector((state) => state.gymReducer.gyms).find(
    (gym) => gym.slug === gymSlug
  );

  const classes = useSelector((state) => state.classReducer.classes);
  const classList = classes.filter((_class) => _class.gym.id === gym.id);

  if (!user) return <Redirect to="/signin" />;
  if (user.type !== "admin") return <Redirect to="/" />;
  return (
    <>
      <Helmet>
        <title>{`${gym.name} Classes`}</title>
      </Helmet>
      <ClassForm gymId={gym.id} />
      <div>
        {classList.map((_class) => (
          <>
            <img src={_class.image} alt={_class.name} />
            <p>{_class.name}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default GymDetail;
