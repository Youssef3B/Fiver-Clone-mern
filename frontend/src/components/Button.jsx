// Button.js

import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ onClick, className, children, variant }) => {
  const buttonClasses = classNames("button", className, {
    "bg-green-600 text-white px-9 py-2 rounded-md hover:bg-green-700 transition-all":
      variant === "filled",
    "border border-green-600 text-green-500 px-9 py-2 rounded-md hover:bg-green-600 transition-all hover:text-white":
      variant === "outlined",
  });

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined"]),
};

export default Button;
