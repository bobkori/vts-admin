import React from "react";
import css from "@/styles/grid.module.scss";
import { useRouter } from "next/router";
import GridItem from "@/components/grid-box/list";
import GridWraper from "@/components/grid-box/wraper";
import railwayPattern from "@/constant/bank-pattern";

const CategorySSC = () => {
  const { push } = useRouter();

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
                onSelect={() => push(`/series/category/bank${data.href}`)}
              />
            );
          })}
        </GridWraper>
      </div>
    </div>
  );
};
export default CategorySSC;
