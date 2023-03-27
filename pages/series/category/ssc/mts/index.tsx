import React from "react";
import axios from "axios";
import View from "@/components/view";
import Table from "@/components/table";
import { useRouter } from "next/router";
import Button from "@/components/button";
import styles from "@/styles/table.module.scss";
import TableHead from "@/components/table/head";
import TableBody from "@/components/table/body";
import TableHeader from "@/components/table/header";
import DataRow, { DataRowProps } from "@/components/section/data-row";
import { NEXT_PUBLIC_BASE_URL } from "@/config";
import PerPageLayout from "@/layout/perpage";

const course = ["ssc", "mts"];

const Page = ({ data }: any) => {
  const { push } = useRouter();
  async function onDeleteSeries(_id: any): Promise<void> {
    console.log(_id);
    try {
      const { data } = await axios({
        url: `http://localhost:4000/api/v1/series/${_id}`,
        method: "delete",
      });
      console.log(data);
      // router.reload();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(data);

  const router = useRouter();
  return (
    <div className={`${styles["table-container"]}`}>
      <View>
        <h1>MTS Test Series</h1>
        <Button
          color={"cyan"}
          onClick={() => push(`/series/category/ssc/mts/create`)}
        >
          Create New Series
        </Button>
      </View>
      <Table>
        <React.Fragment>
          <TableHead>
            <TableHeader listArray={headerArray} />
          </TableHead>
          <TableBody>
            {data.map((item: DataRowProps, index: number) => {
              console.log(item._id);
              return (
                <DataRow
                  key={index}
                  {...item}
                  onView={() =>
                    router.push(
                      `/series/category/ssc/mts/sections?series_id=${item?._id}`
                    )
                  }
                  onDelete={() => onDeleteSeries(item._id)}
                />
              );
            })}
          </TableBody>
        </React.Fragment>
      </Table>
    </div>
  );
};
export default Page;
Page.perpage = PerPageLayout;

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
  // {
  //   name: "Image",
  // },
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
