import React from "react";
import css from "@/styles/grid.module.scss";
import { useRouter } from "next/router";
import railwayPattern from "@/constant/railway-pattern";
import GridWraper from "@/components/grid-box/wraper";
import GridItem from "@/components/grid-box/list";

const CategorySSC = () => {
  const { push } = useRouter();

  // const { onSelect, selected } = useGrid({ name: "SSC", href: "/ssc" });
  return (
    <div className={css["container"]}>
      <div className={css["prooutbox"]}>
        <div className={css["details"]}>
          <h2>Category</h2>
          <p>Choose one of category for test series </p>
        </div>
        <GridWraper>
          {railwayPattern.map((data, index) => {
            return (
              <GridItem
                key={index}
                name={data.name}
                onSelect={() => push(`/series/category/railway${data.href}`)}
              />
            );
          })}
        </GridWraper>
      </div>
    </div>
  );
};
export default CategorySSC;
