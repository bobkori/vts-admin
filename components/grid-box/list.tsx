import React from "react";
import css from "@/styles/grid.module.scss";

interface GridItemsProps {
  name: string;
  icon?: JSX.Element;
  active?: boolean;
  onSelect?: () => void;
}

const GridItem = ({ onSelect, active, icon, name: name }: GridItemsProps) => {
  return (
    <div
      onClick={onSelect && onSelect}
      className={`${css["items"]} ${active ? css["active"] : ""}`}
    >
      {icon && <span>{icon}</span>}
      {name}
    </div>
  );
};

export default GridItem;
