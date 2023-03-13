import React from "react";
import styles from "./button.module.scss";
type ButtonRef = React.Ref<HTMLButtonElement>;
interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  theme?: "primary" | "secondry" | "tertiary";
}

const _Button = ({ children, theme, ...rest }: ButtonProps, ref: ButtonRef) => {
  const themeClass = React.useMemo(() => {
    switch (theme) {
      case "primary":
        return `${styles["primary"]} ${styles["active"]} ${styles["disable"]} `;
      case "secondry":
        return `${styles["secondry"]} ${styles["active"]} ${styles["disable"]} `;
      case "tertiary":
        return `${styles["tertiary"]} ${styles["active"]} ${styles["disable"]} `;
      default:
        return styles["default"];
    }
  }, [theme]);

  return (
    <button
      ref={ref}
      className={`${rest.className} ${themeClass} ${styles.button}`}
      {...rest}
    >
      {children}
    </button>
  );
};

const Button = React.forwardRef(_Button);

export default Button;
