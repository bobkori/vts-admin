import React from "react";
import useAppDispatch from "./use-dispatch";
import useAppSelector from "./use-selector";
import sidebar from "@/store/slices/sidebar";

/**
 * side-bar Hook
 * @returns
 */
const useSidebar = () => {
  const state = useAppSelector((state) => state.sidebar);

  const send = useAppDispatch();

  const updateSide = React.useCallback(
    (value: boolean) => {
      send(sidebar.actions.updateSide(value));
    },
    [send]
  );
  // Return Values
  return {
    sideBarState: state,
    updateSide: React.useMemo(() => updateSide, [updateSide]),
  };
};
export default useSidebar;
