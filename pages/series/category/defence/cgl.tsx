import React from "react";
import GridItems from "components/grid-box";
import GlobeIcon from "@/icons/GlobeIcon";
import css from "@/styles/grid.module.scss";
import { useRouter } from "next/router";
import sscPattern from "@/constant/ssc-pattern";

const CategorySSC = () => {
  const { push, pathname } = useRouter();
  const yy = ["cgl"];
  console.log(
    pathname
      .trim()
      .split("/")
      .some((x) => x.includes(yy))
  );
  return (
    <div className={css["container"]}>
      <div className={css["prooutbox"]}>
        <div className={css["details"]}>
          <h2>Category</h2>
          <p>Choose one of category for test series </p>
        </div>
        <GridItems
          value={"SSC"}
          items={sscPattern.map((data) => {
            return {
              title: data.name,
              icon: <GlobeIcon fill="#fff" />,
            };
          })}
          onSelect={(value) =>
            push(`/series/category/ssc/${value.toLowerCase()}`)
          }
        />
      </div>
    </div>
  );
};
export default CategorySSC;
