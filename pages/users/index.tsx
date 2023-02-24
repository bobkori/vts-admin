import React from "react";
import moment from "moment";
import EditIcon from "@/icons/edit";
import View from "@/components/view";
import Table from "@/components/table";
import DeleteIcon from "@/icons/delete";
import css from "@/styles/table.module.scss";
import Checkbox from "@/components/checkbox";
import TableHead from "@/components/table/head";
import TableBody from "@/components/table/body";
import TableRow from "@/components/table/t-row";
import TableData from "@/components/table/t-data";
import TableHeader from "@/components/table/header";

const UsersPage = ({ users }: any) => {
  return (
    <div className={`${css["table-container"]}`}>
      <View>
        <h1>Users Management</h1>
      </View>
      <Table>
        <React.Fragment>
          <TableHead>
            <TableHeader listArray={headerArray} />
          </TableHead>
          <TableBody>
            {users.map((item: DataRowProps, index: number) => {
              return <DataRow key={index} {...item} />;
            })}
          </TableBody>
        </React.Fragment>
      </Table>
    </div>
  );
};
export default UsersPage;

interface DataRowProps {
  name?: string;
  email?: string;
  role?: string;
  createdAt?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const DataRow = ({
  name,
  email,
  createdAt: date,
  role,
  onDelete,
  onEdit,
}: DataRowProps) => {
  const [select, setSelect] = React.useState(false);
  return (
    <TableRow>
      <TableData>
        <Checkbox checked={select} onClick={() => setSelect(!select)} />
      </TableData>
      <TableData className={`text-align-center`}>
        <View>😍</View>
      </TableData>
      <TableData>
        <View>{name}</View>
      </TableData>
      <TableData>
        <View>{email}</View>
      </TableData>
      <TableData className={`text-align-center`}>
        <View>{role}</View>
      </TableData>
      <TableData className={`text-align-center`}>
        <View>{moment(date).format(`DD MMM YYYY HH:MM`)}</View>
      </TableData>
      <TableData>
        <View className={css["controls"]}>
          <View className={css["items"]} onClick={onEdit}>
            <EditIcon fill="#fff" height={16} width={16} />
          </View>
          <View className={css["items"]} onClick={onDelete}>
            <DeleteIcon fill="#fff" height={16} width={16} />
          </View>
        </View>
      </TableData>
    </TableRow>
  );
};

const headerArray = [
  {
    name: "Image",
  },
  {
    name: "Name",
  },
  {
    name: "Email",
  },
  {
    name: "Role",
  },
  {
    name: "Created Date",
  },
  {
    name: "Action",
  },
];

export const getServerSideProps = async () => {
  const response = await fetch(`http://localhost:4000/api/v1/user`);

  const users = await response.json();
  console.log(users);

  return {
    props: {
      users,
    },
  };
};
