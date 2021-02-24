import { Title, Description } from "../styles";
// import Slideshow from "./Slideshow";
import { Helmet } from "react-helmet";

const Home = ({ classes }) => {
  return (
    <>
      <Helmet>
        <title>Active</title>
      </Helmet>
      <Title>Active</Title>
      <Description>Use Active. Be Active.</Description>
      {/* <Slideshow classes={classes} /> */}
    </>
  );
};

export default Home;
