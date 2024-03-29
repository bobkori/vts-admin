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
import PerPageLayout from "@/layout/perpage";
import { NEXT_PUBLIC_BASE_URL } from "@/config";

const CHSLPage = ({ data }: any) => {
  const { push } = useRouter();

  const router = useRouter();
  console.log(data);
  return (
    <div className={`${styles["table-container"]}`}>
      <View>
        <h1>Create Sections</h1>
        <Button
          color={"cyan"}
          onClick={() =>
            push(
              `/series/category/ssc/cgl/create/section?series_id=${router.query?.series_id}`
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
              return (
                <DataRow
                  key={index}
                  title={item.title}
                  questionsCount={item.questionsCount}
                />
              );
            })}
          </TableBody>
        </React.Fragment>
      </Table>
    </div>
  );
};
export default CHSLPage;

CHSLPage.perpage = PerPageLayout;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch(
    `${NEXT_PUBLIC_BASE_URL}/api/v1/series/${context.query.series_id}/sections`
  );
  const data = await response.json();

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
    name: "Time",
  },
  {
    name: "Action",
  },
];
