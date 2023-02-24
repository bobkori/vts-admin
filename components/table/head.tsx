import React from "react";

type Props = {} & React.ComponentPropsWithRef<"thead">;
type Ref = React.Ref<HTMLTableSectionElement>;

const TableHead = (props: Props, ref: Ref) => {
  return <thead ref={ref} {...props} />;
};

export default React.forwardRef(TableHead);
