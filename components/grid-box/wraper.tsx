import React from "react";
import css from "@/styles/grid.module.scss";

interface GridItemsProps extends React.ComponentPropsWithRef<"div"> {}

const _GridWraper = (
  { children, ...rest }: GridItemsProps,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div ref={ref} className={css["grid"]} {...rest}>
      {children}
    </div>
  );
};

const GridWraper = React.forwardRef(_GridWraper);
GridWraper.displayName = "GridWraper";
export default GridWraper;
