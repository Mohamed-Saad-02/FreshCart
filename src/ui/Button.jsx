import PropTypes from "prop-types";

const style = {
  solid: "",
  main: "bg-main-color text-white rounded-md px-4 py-2 min-w-24",
  second: "border border-gray-400 px-4 py-2 rounded-md min-w-24",
};

function Button(props) {
  return (
    <button
      className={props.className ? props.className : style[props.kind]}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  props: PropTypes.object,
};
