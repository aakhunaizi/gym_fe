import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

const ClassesList = () => {
  const user = useSelector((state) => state.authReducer.user);
  const classes = useSelector((state) => state.classReducer.classes);
  const types = useSelector((state) => state.typeReducer.types);

  if (!user) return <Redirect to="/signin" />;
  return (
    <div className="container">
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
              </>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ClassesList;
