import PropTypes from "prop-types";

import "./NotFound.css";

export function NotFound({ notFound }) {
  return <div className="not__found">{notFound}</div>;
}

NotFound.propTypes = {
  notFound: PropTypes.string,
};
