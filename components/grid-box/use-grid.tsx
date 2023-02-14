import React from "react";

type StateType = {
  name: string;
  href: string;
  [K: string]: any;
};

const useGrid = (state: StateType) => {
  const [selected, setSelected] = React.useState(state);
  const onSelect = React.useCallback((value: StateType) => {
    setSelected(value);
  }, []);
  // Return Values
  return { selected, onSelect };
};
export default useGrid;
