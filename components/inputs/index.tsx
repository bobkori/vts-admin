import React from "react";
import styles from "./input.module.scss";

type Ref = React.Ref<HTMLInputElement>;
type ButtonProps = {
  label?: string;
} & React.ComponentPropsWithRef<"input">;
const _Input = ({ label, ...rest }: ButtonProps, ref: Ref) => {
  return (
    <div className={`${styles.inputbox} ${styles.inputfrom}`}>
      {label && <label>{label}</label>}
      <input
        type="text"
        ref={ref}
        className={`${rest.className} ${styles["text-input"]}`}
        {...rest}
      />
    </div>
  );
};

const Input = React.forwardRef(_Input);
export default Input;
