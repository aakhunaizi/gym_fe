import { useState } from "react";
import { createType } from "../store/actions/typeActions";
import { useDispatch } from "react-redux";

const TypeForm = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState({ name: "" });

  const handleChange = (event) =>
    setType({ ...type, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createType(type));
    setType({ name: "" });
  };

  return (
    <div className="container" style={{ width: "20%" }}>
      <h3>New Class Type</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            name="name"
            value={type.name}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-outline-success float-center" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default TypeForm;
