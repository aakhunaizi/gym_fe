import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Redirect, useParams } from "react-router";

const ClassDetail = ({ classes }) => {
  const user = useSelector((state) => state.authReducer.user);

  const { classSlug } = useParams();
  const _class = classes.find((_class) => _class.slug === classSlug);

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
        <img src={_class.gym.image} alt={_class.gym.name} />
        <p>{_class.gym.name}</p>
        <br />
        <img src={_class.image} alt={_class.name} />
        <p>{_class.name}</p>
        <p>Price: {_class.price} BD</p>
        <p>Date: {_class.date}</p>
        <p>Time: {_class.time}</p>
        <p>Number of Seats: {_class.numOfSeats}</p>
        <p>Already Booked: {_class.bookedSeats}</p>
        <p>Class Type: {_class.type.name}</p>
      </div>
    </>
  );
};

export default ClassDetail;
