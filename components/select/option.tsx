import React from "react";

type Ref = React.Ref<HTMLOptionElement>;
type ButtonProps = {
  label?: string;
} & React.ComponentPropsWithRef<"option">;
const _Option = ({ label, ...rest }: ButtonProps, ref: Ref) => {
  return <option ref={ref} {...rest} />;
};

const Option = React.forwardRef(_Option);
export default Option;
