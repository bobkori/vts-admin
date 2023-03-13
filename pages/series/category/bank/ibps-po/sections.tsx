import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/table.module.scss";
import TableHeader from "@/components/table/header";
import Table from "@/components/table";
import TableHead from "@/components/table/head";
import TableBody from "@/components/table/body";
import View from "@/components/view";
import Button from "@/components/button";
import { GetServerSidePropsContext } from "next";
import DataRow, { DataRowProps } from "@/components/section/data-row";

const CHSLPage = ({ data }: any) => {
  const { push } = useRouter();
  function onDeleteProduct(_id: any): void {
    throw new Error("Function not implemented.");
  }

  console.log(data);

  const router = useRouter();
  return (
    <div className={`${styles["table-container"]}`}>
      <View>
        <h1>Create Sections</h1>
        <Button
          color={"cyan"}
          onClick={() =>
            push(
              `/series/category/bank/ibps-po/create/section?series_id=${router.query?.series_id}`
            )
          }
        >
          Create New Sections
        </Button>
      </View>
      <Table>
        <React.Fragment>
          <TableHead>
            <TableHeader listArray={headerArray} />
          </TableHead>
          <TableBody>
            {data?.sections?.map((item: DataRowProps, index: number) => {
              return <DataRow key={index} {...item} />;
            })}
          </TableBody>
        </React.Fragment>
      </Table>
    </div>
  );
};
export default CHSLPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(
    `http://localhost:4000/api/v1/series/sections/${context.query.series_id}`
  );
  const data = await response.json();
  console.log({ serverData: data });
  return {
    props: {
      data,
      series_id: context.query.series_id,
    },
  };
};

const headerArray = [
  {
    name: "Title",
  },
  {
    name: "Questions Count",
  },
  {
    name: "Action",
  },
];
