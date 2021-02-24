import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, useParams } from "react-router";

const ClassDetail = () => {
  const user = useSelector((state) => state.authReducer.user);

  const { classSlug } = useParams();
  const _class = useSelector((state) => state.classReducer.classes).find(
    (_class) => _class.slug === classSlug
  );

  console.log(
    "🚀 ~ file: ClassDetail.js ~ line 10 ~ ClassDetail ~ _class",
    _class
  );

  if (!user) return <Redirect to="/signin" />;
  return (
    <>
      <Helmet>
        <title>{_class.name}</title>
      </Helmet>
      <div>
        <p>{_class.name}</p>

        <img src={_class.gym.image} alt={_class.gym.name} />
        <p>{_class.gym.name}</p>
      </div>
    </>
  );
};

export default ClassDetail;
