import PropTypes from "prop-types";

export function Button({ handleClick, children, ...rest }) {
  return (
    <button type="button" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func,
  ...(Button.propTypes && Button.propTypes),
};
