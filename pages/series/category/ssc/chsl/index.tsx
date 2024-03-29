import React from "react";
import axios from "axios";
import View from "@/components/view";
import Table from "@/components/table";
import { useRouter } from "next/router";
import Button from "@/components/button";
import styles from "@/styles/table.module.scss";
import TableHeader from "@/components/table/header";
import TableHead from "@/components/table/head";
import PerPageLayout from "@/layout/perpage";
import { NEXT_PUBLIC_BASE_URL } from "@/config";
import TableBody from "@/components/table/body";
import DataRow, { DataRowProps } from "@/components/section/data-row";

const course = ["ssc", "chsl"];

const CHSLPage = ({ data }: any) => {
  const { push } = useRouter();

  async function onDeleteSeries(_id: any): Promise<void> {
    try {
      await axios({
        url: `http://localhost:4000/api/v1/series/${_id}`,
        method: "delete",
      });
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter();
  return (
    <View className={`${styles["table-container"]}`}>
      <View>
        <h1>CHSL Test Series</h1>
        <Button
          color={"cyan"}
          onClick={() => push(`/series/category/ssc/chsl/create`)}
        >
          Create New Series
        </Button>
      </View>
      {data.length > 0 && (
        <Table>
          <React.Fragment>
            <TableHead>
              <TableHeader listArray={headerArray} />
            </TableHead>
            <TableBody>
              {data.map((item: DataRowProps, index: number) => {
                return (
                  <DataRow
                    key={index}
                    {...item}
                    onView={() =>
                      router.push(
                        `/series/category/ssc/cgl/sections?series_id=${item?._id}`
                      )
                    }
                    onDelete={() => onDeleteSeries(item._id)}
                  />
                );
              })}
            </TableBody>
          </React.Fragment>
        </Table>
      )}
    </View>
  );
};
export default CHSLPage;

CHSLPage.perpage = PerPageLayout;

export const getServerSideProps = async () => {
  const response = await fetch(
    `${NEXT_PUBLIC_BASE_URL}/api/v1/series/${course.join("+")}/course`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

const headerArray = [
  {
    name: "Title",
  },
  {
    name: "Category",
  },
  {
    name: "Sections",
  },
  {
    name: "Date",
  },
  {
    name: "Action",
  },
];
