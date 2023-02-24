import React from "react";
import styles from "./textarea.module.scss";

type Ref = React.Ref<HTMLTextAreaElement>;
type ButtonProps = {
  label?: string;
} & React.ComponentPropsWithRef<"textarea">;
const TextArea = ({ label, ...rest }: ButtonProps, ref: Ref) => {
  return (
    <div className={`${styles.textareabox} ${styles.textareafrom}`}>
      {label && <label>{label}</label>}
      <textarea ref={ref} {...rest} />
    </div>
  );
};

export default React.forwardRef(TextArea);
