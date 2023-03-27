import React from "react";
import moment from "moment";
import EditIcon from "@/icons/edit";
import ViewIcon from "@/icons/view";
import View from "@/components/view";
import DeleteIcon from "@/icons/delete";
import Checkbox from "@/components/checkbox";
import styles from "@/styles/table.module.scss";
import TableRow from "@/components/table/t-row";
import TableData from "@/components/table/t-data";

export interface DataRowProps {
  questionsCount?: string;
  _id?: string;
  title?: string;
  createdAt?: string;
  sections?: string[];
  course?: string[];
  onEdit?: () => void;
  onView?: () => void;
  onDelete?: () => void;
}

const DataRow = ({
  title,
  sections,
  createdAt,
  onDelete,
  onEdit,
  onView,
  _id,
  course,
  questionsCount,
}: DataRowProps) => {
  return (
    <TableRow>
      <TableData>
        <Checkbox />
      </TableData>
      <TableData>
        <View>{title}</View>
      </TableData>
      {course && (
        <TableData className={`text-align-center`}>
          <View>{course?.join(", ")}</View>
        </TableData>
      )}
      {questionsCount && (
        <TableData className={`text-align-center`}>
          <View>{questionsCount}</View>
        </TableData>
      )}

      <TableData className={`text-align-center`}>
        <View>{sections?.length}</View>
      </TableData>

      <TableData className={`text-align-center`}>
        <View>{moment().format(`DD MMM YYYY HH:MM`)}</View>
      </TableData>
      <TableData>
        <View className={styles["controls"]}>
          <View onClick={onView} className={styles["items"]}>
            <ViewIcon fill="#fff" height={16} width={16} />
          </View>
          <View onClick={onEdit} className={styles["items"]}>
            <EditIcon fill="#fff" height={16} width={16} />
          </View>
          <View onClick={onDelete} className={styles["items"]}>
            <DeleteIcon fill="#fff" height={16} width={16} />
          </View>
        </View>
      </TableData>
    </TableRow>
  );
};

export default DataRow;
