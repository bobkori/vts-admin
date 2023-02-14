import React from "react";
import GridItems from "components/grid-box";
import GlobeIcon from "@/icons/GlobeIcon";
import RailIcon from "@/icons/RailIcon";
import BankIcon from "@/icons/BankIcon";
import NurseIcon from "@/icons/NurseIcon";
import css from "@/styles/grid.module.scss";
import { useRouter } from "next/router";
import railwayPattern from "@/constant/railway-pattern";

const CategorySSC = () => {
  const { push } = useRouter();
  return (
    <div className={css["container"]}>
      <div className={css["prooutbox"]}>
        <div className={css["details"]}>
          <h2>Category</h2>
          <p>Choose one of category for test series </p>
        </div>
        <GridItems
          value={"NTPC"}
          items={railwayPattern.map((data) => {
            return {
              title: data.name,
              icon: <GlobeIcon fill="#fff" />,
            };
          })}
          onSelect={(value) =>
            push(`/series/category/railway/${value.toLowerCase()}`)
          }
        />
      </div>
    </div>
  );
};
export default CategorySSC;

const dataArray = [
  {
    title: "CGL",
    icon: <GlobeIcon fill="#fff" />,
  },
  {
    title: "CHSL",
    icon: <RailIcon fill="#fff" />,
  },
  {
    title: "CPO",
    icon: <BankIcon fill="#fff" />,
  },
  {
    title: "MTS",
    icon: <NurseIcon fill="#fff" />,
  },
  {
    title: "GD",
    icon: <GlobeIcon fill="#fff" />,
  },
];
