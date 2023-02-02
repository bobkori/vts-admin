import React from "react";

const DeleteTestSeries = ({ series }: any) => {
  console.log(series);
  return <div>Hello</div>;
};
export default DeleteTestSeries;

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/v1/series");
  const data = await response.json();
  return {
    props: {
      series: data,
    },
  };
};
