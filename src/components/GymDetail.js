import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, useParams } from "react-router";
import ClassForm from "./ClassForm";
import Loading from "./Loading";

const GymDetail = ({ gyms }) => {
  const user = useSelector((state) => state.authReducer.user);

  const { gymSlug } = useParams();
  console.log(
    "🚀 ~ file: GymDetail.js ~ line 10 ~ GymDetail ~ gymSlug",
    gymSlug
  );
  const gym = gyms.find((gym) => gym.slug === gymSlug);
  console.log("🚀 ~ file: GymDetail.js ~ line 12 ~ GymDetail ~ gym", gym);

  const classes = useSelector((state) => state.classReducer.classes);
  if (!classes) return <Loading />;
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
