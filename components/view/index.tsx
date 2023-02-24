import React from "react";

type Props = {} & React.ComponentPropsWithRef<"div">;
type Ref = React.Ref<HTMLDivElement>;

const View = (props: Props, ref: Ref) => {
  return React.createElement("div", { ref, ...props });
};

export default React.forwardRef(View);
