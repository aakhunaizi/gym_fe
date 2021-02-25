import { SearchBarStyled } from "../styles";

const SerachBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => {
        props.setQuery(event.target.value);
      }}
      placeholder="Search for your Class!"
    ></SearchBarStyled>
  );
};

export default SerachBar;
