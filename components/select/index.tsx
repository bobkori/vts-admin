import React from "react";
import styles from "./select.module.scss";

type Ref = React.Ref<HTMLSelectElement>;
type ButtonProps = {
  label?: string;
} & React.ComponentPropsWithRef<"select">;
const _Select = ({ label, ...rest }: ButtonProps, ref: Ref) => {
  return (
    <div className={`${styles.selectbox} ${styles.selectfrom}`}>
      {label && <label>{label}</label>}
      <select ref={ref} {...rest} />
    </div>
  );
};

const Select = React.forwardRef(_Select);
export default Select;
