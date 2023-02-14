import React from "react";
import { useRouter } from "next/router";
import css from "@/styles/grid.module.scss";
import sscPattern from "@/constant/ssc-pattern";
import GridItem from "@/components/grid-box/list";
import GridWraper from "@/components/grid-box/wraper";

const active = "chsl";
const tiers = sscPattern.find((data) => {
  return data.name.toLowerCase().includes(active);
})?.tiers;

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
          {tiers?.map((data, index) => {
            return (
              <GridItem
                key={index}
                name={data.name as string}
                onSelect={() => push(`/series/category/ssc/chsl/${data?.href}`)}
              />
            );
          })}
        </GridWraper>
      </div>
    </div>
  );
};
export default CategorySSC;
