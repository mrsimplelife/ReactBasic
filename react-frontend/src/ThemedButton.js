import PropsTypes from "prop-types";
function ThemedButton({ theme, label, ...restProps }) {
  //   console.log(theme, label);
  return (
    <button className={`btn btn-${theme}`} {...restProps}>
      {label}
    </button>
  );
}
ThemedButton.defaultProps = {
  theme: "default",
};
ThemedButton.propTypes = {
  theme: PropsTypes.string,
  label: PropsTypes.string.isRequired,
};
export default ThemedButton;
