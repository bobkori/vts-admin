import UUID from "@/utils/uuid";
import React from "react";
import { createAction, createReducer, nanoid } from "@reduxjs/toolkit";
import { useImmerReducer } from "use-immer";
import {
  CreateSeriesContextTypes,
  mixed,
  OnlyKeys,
  StateTypes,
} from "./types/series";
import sleep from "@/utils/sleep";

export const CreateSeriesContext = React.createContext<
  Partial<CreateSeriesContextTypes>
>({});

const options = Array.from({ length: 4 }).map((_, _i) => {
  return {
    prompt: _i.toString(),
    value: "",
  };
});

const initialState: StateTypes = {
  uuid: nanoid(4),
  slug: "",
  time: "",
  title: "",
  is_saved: "",
  is_marked: "",
  question_score: "",
  user_attempt_list: "",
  marks: {
    positive: 2,
    negative: 0.5,
  },
  questions: [
    {
      uuid: nanoid(4),
      type: "",
      QSNo: 0,
      SSNo: 0,
      SSSNo: 0,
      hindi: {
        question: "",
        options: options,
      },
      english: {
        question: "",
        options: options,
      },
    },
  ],
};
// ACTION CREATOR
const changeQuestion = createAction(
  "series/question",
  (value: mixed, language, index: number) => {
    return {
      payload: {
        value,
        index,
        language,
      },
    };
  }
);
const changeOptions = createAction(
  "series/options",
  (
    value: mixed,
    language,
    index: { parentIndex: number; childIndex: number }
  ) => {
    return {
      payload: {
        value,
        index,
        language,
      },
    };
  }
);
const valuesAction = createAction(
  "series/values",
  (key: OnlyKeys, value: any) => {
    return {
      payload: {
        key,
        value,
      },
    };
  }
);
const addQuestion = createAction("series/add", () => {
  return {
    payload: initialState.questions,
  };
});
const deleteQuestion = createAction("series/delete", (index: number) => {
  return {
    payload: index,
  };
});

// REDUCER
const reducer = createReducer(initialState, (builder) => {
  builder.addCase(valuesAction, (draft, action) => {
    draft[action.payload.key] = action.payload.value;
  });
  builder.addCase(addQuestion, (draft, action) => {
    draft.questions.push(...action.payload);
  });
  builder.addCase(deleteQuestion, (draft, action) => {
    draft.questions.splice(action.payload, 1);
  });
  builder.addCase(changeQuestion, (draft, action) => {
    const { value, language, index } = action.payload;
    draft.questions[index][language].question = value;
  });

  builder.addCase(changeOptions, (draft, action) => {
    const { value, language, index } = action.payload;
    const _draft = draft.questions[index.parentIndex][language];
    _draft.options[index.childIndex].value = value;
  });
});

const CreateSeriesProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const onChangeValues = React.useCallback(
    (key: OnlyKeys, value: any) => {
      dispatch(valuesAction(key, value));
    },
    [dispatch]
  );

  const onAddQuestion = React.useCallback(async () => {
    await sleep(500);
    dispatch(addQuestion());
  }, [dispatch]);

  const onDeleteQuestion = React.useCallback(
    (index: number) => {
      dispatch(deleteQuestion(index));
    },
    [dispatch]
  );

  const onChangeQuestion = React.useCallback(
    (value: mixed, language: any, index: number) => {
      dispatch(changeQuestion(value, language, index));
    },
    [dispatch]
  );
  const onChangeOptions = React.useCallback(
    (
      value: mixed,
      language: any,
      index: { parentIndex: number; childIndex: number }
    ) => {
      dispatch(changeOptions(value, language, index));
    },
    [dispatch]
  );
  return (
    <CreateSeriesContext.Provider
      value={{
        state,
        onChangeValues,
        onAddQuestion,
        onDeleteQuestion,
        onChangeQuestion,
        onChangeOptions,
      }}
    >
      {children}
    </CreateSeriesContext.Provider>
  );
};

export default CreateSeriesProvider;
