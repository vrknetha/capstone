import "./button.styles.scss";

const ButtonTypes: any = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }: any) => {
  return (
    <button
      className={`button-container ${ButtonTypes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
