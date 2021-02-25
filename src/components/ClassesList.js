import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { updateUser } from "../store/actions/userActions";
import SerachBar from "./SerachBar";
import moment from "moment";

const ClassesList = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const user = useSelector((state) => state.authReducer.user);
  const userDetails = useSelector((state) => state.userReducer.users).find(
    (_user) => _user.id === user.id
  );
  const userClasses = userDetails.classes;

  const types = useSelector((state) => state.typeReducer.types);

  const classIds = [];
  userClasses.forEach((element) => classIds.push(element.id));
  const notBookedClasses = useSelector(
    (state) => state.classReducer.classes
  ).filter((_class) => !classIds.includes(_class.id));

  const classes = notBookedClasses.filter((cl) => {
    if (query.toLowerCase() === "today")
      return cl.date === moment().format("L");
    else if (query.toLowerCase() === "tomorrow")
      return cl.date === moment().add(1, "days").format("L");
    else if (query.toLowerCase() === "next")
      return cl.date > moment().add(7, "days").format("L");
    else if (query.toLowerCase() === "free") return cl.price === 0;
    else if (query !== "")
      return cl.name.toLowerCase().includes(query.toLowerCase());
    else return cl;
  });

  const bookClass = (class2Book) => {
    const sameDay = userClasses.filter((cl) => cl.date === class2Book.date);
    const sameTime = sameDay.filter((cl) => cl.time === class2Book.time);
    if (sameDay.length < 3 && sameTime.length === 0) {
      console.log({
        ...userDetails,
        class: class2Book.id,
      });
      dispatch(
        updateUser({
          ...userDetails,
          class: class2Book.id,
        })
      );
    } else {
      sameTime.length !== 0
        ? alert("Class Clash!")
        : alert("you can not book more than 3 class at the same day");
    }
  };

  if (!user) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <SerachBar setQuery={setQuery} />
      {types.map((type) => (
        <div className="container">
          <h5>{type.name}</h5>
          {classes
            .filter((_class) => _class.type.id === type.id)
            .map((_class) => (
              <>
                <Link to={`/classes/${_class.slug}`}>
                  <img src={_class.image} alt={_class.name} />
                </Link>
                <p>{_class.name}</p>
                <button onClick={() => bookClass(_class)}>Book</button>
              </>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ClassesList;
