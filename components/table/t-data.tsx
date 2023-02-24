import React from "react";

type Props = {} & React.ComponentPropsWithRef<"td">;
type Ref = React.Ref<HTMLTableCellElement>;

const TableRow = (props: Props, ref: Ref) => {
  return <td ref={ref} {...props} />;
};

export default React.forwardRef(TableRow);
