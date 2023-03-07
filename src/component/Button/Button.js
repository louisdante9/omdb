import PropTypes from 'prop-types';

export function Button({handleClick}, rest) {
    return (
        <button type="button" onClick={handleClick} {...rest}>search</button>

    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    ...(Button.propTypes && Button.propTypes),
}