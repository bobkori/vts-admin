import React from "react";

type Props = {} & React.ComponentPropsWithRef<"tbody">;
type Ref = React.Ref<HTMLTableSectionElement>;

const TableBody = (props: Props, ref: Ref) => {
  return <tbody ref={ref} {...props} />;
};

export default React.forwardRef(TableBody);
