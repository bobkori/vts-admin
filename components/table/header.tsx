import React from "react";
import css from "styles/order.module.scss";
import Checkbox from "../checkbox";

interface TableHeaderProps {
  listArray: {
    name: string;
  }[];
}

const TableHeader = ({ listArray }: TableHeaderProps) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <tr>
      <th>
        <div className={css.topcheckbox}>
          <div className={css.checkbox}>
            <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
          </div>
        </div>
      </th>
      {listArray.map(({ name }, i) => (
        <th key={i}>{name}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
