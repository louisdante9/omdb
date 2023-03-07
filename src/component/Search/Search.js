import PropTypes from "prop-types";
import { Button } from "../Button";
import "./Search.css";

export function Search({ formData: { title, year }, handleChange, handldeSubmit }) {
  return (
    <div className="search">
      <div className="wrapper">
        <input
          type="text"
          className="search-input"
          name="title"
          value={title || ""}
          onChange={handleChange}
          placeholder="Enter Movies or Series name"
        />

        <Button handleClick={handldeSubmit}>search</Button>
      </div>
      <div className="filter__mobile">
        <input type="text" name="year" value={year || ""} onChange={handleChange} placeholder="Year:" />
        <select name="genre" defaultValue="DEFAULT" onChange={handleChange}>
          <option value="DEFAULT" disabled>
            Choose a genre ...
          </option>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
      </div>
    </div>
  );
}

Search.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handldeSubmit: PropTypes.func,
};
