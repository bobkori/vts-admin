import React from "react";
import styles from "./input.module.scss";

type Ref = React.Ref<HTMLInputElement>;
type ButtonProps = {
  label?: string;
} & React.ComponentPropsWithRef<"input">;
const _Input = ({ label, ...rest }: ButtonProps, ref: Ref) => {
  return (
    <div className={`${styles.inputbox} ${styles.inputfrom}`}>
      {label && <label htmlFor="name1">{label}</label>}
      <input type="text" id="name1" ref={ref} {...rest} />
    </div>
  );
};

const Input = React.forwardRef(_Input);
export default Input;
