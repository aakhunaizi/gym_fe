import { useState } from "react";
import { createClass } from "../store/actions/classActions";
import { useDispatch } from "react-redux";

const ClassForm = ({ gymId }) => {
  const dispatch = useDispatch();

  const [_class, setClass] = useState({
    name: "",
    numOfSeats: 0,
    price: 0,
    date: "",
    time: "",
    image: "",
    typeId: 0,
    gymId,
  });

  const handleChange = (event) =>
    setClass({ ..._class, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setClass({ ..._class, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(_class);
    dispatch(createClass(_class));
    setClass({
      name: "",
      numOfSeats: 0,
      price: 0,
      date: "",
      time: "",
      image: "",
      typeId: 0,
      gymId,
    });
  };

  return (
    <div className="container" style={{ width: "20%" }}>
      <h3>New Class</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            name="name"
            value={_class.name}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Number of Seats</label>
          <input
            required
            name="numOfSeats"
            value={_class.numOfSeats}
            type="number"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            required
            name="price"
            value={_class.price}
            type="number"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <input
            required
            name="typeId"
            value={_class.typeId}
            type="number"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            required
            name="date"
            value={_class.date}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input
            required
            name="time"
            value={_class.time}
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

export default ClassForm;
