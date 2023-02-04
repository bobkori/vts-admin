import React from "react";
import GridItems from "components/grid-box";
import GlobeIcon from "@/icons/GlobeIcon";
import RailIcon from "@/icons/RailIcon";
import BankIcon from "@/icons/BankIcon";
import NurseIcon from "@/icons/NurseIcon";
import AddCircleOutline from "@/icons/AddCircleOutline";
import css from "@/styles/grid.module.scss";
import { useRouter } from "next/router";

const Category = () => {
  const { push } = useRouter();
  return (
    <div className={css["container"]}>
      <div className={css["prooutbox"]}>
        <div className={css["details"]}>
          <h2>Category</h2>
          <p>Choose one of category for test series </p>
        </div>
        <GridItems
          value={"SSC"}
          items={dataArray}
          onSelect={(value) => push(`/series/category/${value.toLowerCase()}`)}
        />
      </div>
    </div>
  );
};
export default Category;

const dataArray = [
  {
    title: "SSC",
    icon: <GlobeIcon fill="#fff" />,
  },
  {
    title: "Railway",
    icon: <RailIcon fill="#fff" />,
  },
  {
    title: "Bank",
    icon: <BankIcon fill="#fff" />,
  },
  {
    title: "Defence",
    icon: <NurseIcon fill="#fff" />,
  },
  {
    title: "CA",
    icon: <GlobeIcon fill="#fff" />,
  },
  {
    title: "Other",
    icon: <AddCircleOutline fill="#fff" />,
  },
];

{
  /* <h1>Category</h1> */
}
{
  /* <p>Choose one of category</p> */
}
