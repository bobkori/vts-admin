/* eslint-disable @next/next/no-img-element */
import EditIcon from "icons/edit";
import ViewIcon from "icons/view";
import DeleteIcon from "icons/delete";
import css from "styles/table.module.scss";
import Checkbox from "../checkbox";
import React from "react";

interface TableListProps {
  name: string;
  date: string;
  image: string;
  price?: string;
  status?: string;
  categories: string[];
  onDelete?: () => void;
  onView?: () => void;
  onEdit?: (value: any) => any;
  showDelete?: boolean;
}
const ProductList = ({
  name,
  date,
  image,
  onView,
  onEdit,
  onDelete,
  categories,
  showDelete = true,
}: TableListProps) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <tr>
      <td>
        <div className={css.checkbox}>
          {/* <input type="checkbox" /> */}
          <Checkbox checked={checked} onClick={() => setChecked(!checked)} />
        </div>
      </td>
      <td>
        <div className={css.productrname}>
          <p>{name}</p>
        </div>
      </td>
      <td>
        <div className={css.price}>
          {categories?.map((item) => {
            return (
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: "4px 0",
                  padding: "2px 4px",
                  borderRadius: 12,
                  fontSize: "10px",
                  backgroundColor: "#3f8a62",
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
      </td>
      <td>
        <div className={`${css.status} ${css.approved}`}>Approved</div>
      </td>
      <td>
        <div className={css.date}>
          {date
            ? new Intl.DateTimeFormat("en-GB", {
                dateStyle: "long",
                timeStyle: "short",
              }).format(new Date(date))
            : "-"}
        </div>
      </td>
      <td>
        <div className={css.actionbtn}>
          <ul className={css.actionbtnul}>
            <li onClick={onView} title="View">
              <ViewIcon height={16} width={16} />
            </li>
            <li onClick={onEdit} title="Edit">
              <EditIcon height={16} width={16} />
            </li>
            {showDelete && (
              <li onClick={onDelete} title="Delete">
                <DeleteIcon height={16} width={16} />
              </li>
            )}
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default ProductList;
