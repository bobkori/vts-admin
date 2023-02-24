import React from "react";
import { useImmer } from "use-immer";

export interface State {
  title: string;
  slug: string;
  time: number;
  is_saved: boolean;
  is_marked: boolean;
  question_score: string;
  user_attempt_list: string[];
  [K: string]: any;
}

const useCreateSeries = (_state: State) => {
  const [state, updateState] = useImmer(_state);

  const onChangeValues = React.useCallback(
    (key: keyof typeof _state, value: any) => {
      updateState((draft: any) => {
        draft[key] = value;
      });
    },
    [updateState]
  );

  // Return Values
  return { onChangeValues, state };
};
export default useCreateSeries;
