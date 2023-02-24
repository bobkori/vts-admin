import React from "react";
import CheckIcon from "@/icons/check";
import css from "./checkbox.module.scss";
type Props = {
  checked?: boolean;
} & React.ComponentPropsWithRef<"button">;
type Ref = React.Ref<HTMLButtonElement>;

const Checkbox = ({ checked, ...rest }: Props, ref: Ref) => {
  return (
    <div className={css["container"]}>
      <button
        ref={ref}
        className={`${checked ? css.checked : ""} ${rest.className}`}
        {...rest}
      >
        {checked && <CheckIcon height={14} width={14} fill="#fff" />}
      </button>
    </div>
  );
};

export default React.forwardRef(Checkbox);
