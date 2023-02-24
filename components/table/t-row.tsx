import React from "react";

type Props = {} & React.ComponentPropsWithRef<"tr">;
type Ref = React.Ref<HTMLTableRowElement>;

const TableRow = (props: Props, ref: Ref) => {
  return <tr ref={ref} {...props} />;
};

export default React.forwardRef(TableRow);
