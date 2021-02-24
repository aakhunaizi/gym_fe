import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Slideshow = ({ classes, gyms }) => {
  const classesSlides = classes.map((_class) => {
    return (
      <Carousel.Item key={_class.id}>
        <Link to={`/gyms/${gym.slug}/${_class.slug}`}>
          <img
            className="d-block w-100"
            src={_class.slideImage}
            alt={_class.name}
          />
          <Carousel.Caption>
            <h2>{_class.name}</h2>
            <h3>{_class.caption}</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    );
  });

  return <Carousel>{classesSlides}</Carousel>;
};

export default Slideshow;
