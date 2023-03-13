import React from "react";
import { useImmer } from "use-immer";
import { SeriesStateType } from "@/typings/series";

const useCreateSeries = <S extends SeriesStateType>(_state: S) => {
  const [state, updateState] = useImmer(_state);
  const [valid, updateValid] = useImmer(false);

  const onChangeValues = React.useCallback(
    (key: keyof typeof _state, value: any) => {
      updateState((draft: any) => {
        draft[key] = value;
      });
    },
    [updateState]
  );

  // Validation Simple
  React.useEffect(() => {
    const { title, slug, duration } = state;
    if (title && slug && duration) {
      updateValid(true);
    } else {
      updateValid(false);
    }
  }, [state, updateValid]);

  // Return Values
  return {
    state,
    valid,
    onChangeValues: React.useMemo(() => onChangeValues, [onChangeValues]),
  };
};
export default useCreateSeries;
