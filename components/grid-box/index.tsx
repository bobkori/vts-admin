import React from "react";
import css from "@/styles/grid.module.scss";

interface OptionsProps {
  title: string;
  icon: JSX.Element;
}

interface GridItemsProps {
  value: string;
  items: OptionsProps[];
  onSelect: (value: string) => void;
}

const GridItems = ({ value, items, onSelect }: GridItemsProps) => {
  const [selected, setSelected] = React.useState(value);
  const _onSelect = React.useCallback(
    (value: string) => {
      onSelect(value);
      setSelected(value);
    },
    [onSelect]
  );
  return (
    <div className={css["grid"]}>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`${css["items"]} ${
              selected === item.title ? css["active"] : ""
            }`}
            onClick={() => _onSelect(item.title)}
          >
            <span>{item.icon}</span>
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default GridItems;
