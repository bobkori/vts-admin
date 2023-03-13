import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/table.module.scss";
import TableHeader from "@/components/table/header";
import Table from "@/components/table";
import TableHead from "@/components/table/head";
import TableBody from "@/components/table/body";
import View from "@/components/view";
import Button from "@/components/button";
import axios from "axios";
import DataRow, { DataRowProps } from "@/components/section/data-row";

const course = ["railway", "group-d"];

const CHSLPage = ({ data }: any) => {
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
        <h1>CGL Test Series</h1>
        <Button
          color={"cyan"}
          onClick={() => push(`/series/category/railway/group-d/create`)}
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
              return (
                <DataRow
                  key={index}
                  {...item}
                  onView={() =>
                    router.push(
                      `/series/category/railway/group-d/sections?series_id=${item?._id}`
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
export default CHSLPage;

export const getServerSideProps = async () => {
  const response = await fetch(
    `http://localhost:4000/api/v1/series/${course.join("+")}`
  );
  const data = await response.json();
  console.log({ serverData: data });
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
