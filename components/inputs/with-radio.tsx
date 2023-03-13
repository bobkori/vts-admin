import React from "react";
import styles from "./input.module.scss";

type Input = React.ComponentPropsWithRef<"input">;
type Ref = React.Ref<HTMLInputElement>;
type ButtonProps = {
  label?: string;
  radioProps?: Input;
} & Input;
const _Input = ({ label, radioProps, ...rest }: ButtonProps, ref: Ref) => {
  return (
    <div className={`${styles.inputbox} ${styles.inputfrom}`}>
      {label && <label>{label}</label>}
      <div className={styles["with-radio"]}>
        <input
          type="radio"
          name="with-simple"
          className={`${radioProps?.className} ${styles["radio-input"]}`}
          {...radioProps}
        />
        <input
          type="text"
          ref={ref}
          className={`${rest.className} ${styles["text-input"]}`}
          {...rest}
        />
      </div>
    </div>
  );
};

const InputWithRadio = React.forwardRef(_Input);
export default InputWithRadio;
