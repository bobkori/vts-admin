import React from "react";
import css from "@/styles/series.module.scss";
import Button from "@/components/button";
import EditIcon from "@/icons/EditIcon";
import DeleteIcon from "@/icons/DeleteIcon";
import { useRouter } from "next/router";

const TestSeriesHome = ({ series }: any) => {
  console.log(series);

  const { push } = useRouter();

  return (
    <div className={css["series-container"]}>
      <div>
        <Button onClick={() => push("/series/create")}>
          Create New Test Series
        </Button>
      </div>
      <div className={css["series-list"]}>
        <ul>
          {series.map((item, index) => (
            <li key={index}>
              <div className={css["list-title"]}>
                <p>{item.title}</p>
              </div>
              <div className={css["list-controls"]}>
                <span>
                  <EditIcon fill="#c5cde6" height={20} width={20} />
                </span>
                <span>
                  <DeleteIcon fill="#c5cde6" height={20} width={20} />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TestSeriesHome;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/v1/series");
  const data = await response.json();
  return {
    props: {
      series: data,
    },
  };
};