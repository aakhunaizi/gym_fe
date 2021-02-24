import { useState } from "react";
import { createGym } from "../store/actions/gymActions";
import { useDispatch } from "react-redux";

const GymForm = () => {
  const dispatch = useDispatch();

  const [gym, setGym] = useState({ name: "", image: "" });

  const handleChange = (event) =>
    setGym({ ...gym, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setGym({ ...gym, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createGym(gym));
    setGym({ name: "", image: "" });
  };

  return (
    <div className="container" style={{ width: "20%" }}>
      <h3>New Gym</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            name="name"
            value={gym.name}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            required
            name="image"
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>

        <button className="btn btn-outline-success float-center" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default GymForm;
