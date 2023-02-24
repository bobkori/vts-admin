import React from "react";

type Props = {
  checked?: boolean;
} & React.ComponentPropsWithRef<"table">;
type Ref = React.Ref<HTMLTableElement>;

const Table = (props: Props, ref: Ref) => {
  return <table ref={ref} {...props} />;
};

export default React.forwardRef(Table);
