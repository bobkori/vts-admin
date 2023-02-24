import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/table.module.scss";
import TableHeader from "@/components/table/header";
import Table from "@/components/table";
import TableHead from "@/components/table/head";
import TableBody from "@/components/table/body";
import TableRow from "@/components/table/t-row";
import TableData from "@/components/table/t-data";
import Checkbox from "@/components/checkbox";
import View from "@/components/view";
import EditIcon from "@/icons/edit";
import DeleteIcon from "@/icons/delete";
import Button from "@/components/button";
import { GetServerSidePropsContext } from "next";

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
              `/series/category/ssc/gd/create/section?series_id=${router.query?.series_id}`
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

interface DataRowProps {
  _id?: string;
  title?: string;
  createdAt?: string;
  questionsCount?: number | string;
  onEdit?: () => void;
  // onView?: () => void;
  onDelete?: () => void;
}

const DataRow = ({
  title,
  questionsCount,
  createdAt,
  onDelete,
  onEdit,
}: DataRowProps) => {
  return (
    <TableRow>
      <TableData>
        <Checkbox />
      </TableData>
      <TableData>
        <View>{title}</View>
      </TableData>
      {/* <TableData className={`text-align-center`}>
        <View>SSC</View>
      </TableData> */}
      <TableData className={`text-align-center`}>
        <View>{questionsCount}</View>
      </TableData>
      {/* <TableData className={`text-align-center`}>
        <View>{moment().format(`DD MMM YYYY HH:MM`)}</View>
      </TableData> */}
      <TableData>
        <View className={styles["controls"]}>
          {/* <View className={styles["items"]}>
            <ViewIcon fill="#fff" height={16} width={16} />
          </View> */}
          <View className={styles["items"]}>
            <EditIcon fill="#fff" height={16} width={16} />
          </View>
          <View className={styles["items"]}>
            <DeleteIcon fill="#fff" height={16} width={16} />
          </View>
        </View>
      </TableData>
    </TableRow>
  );
};

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
