import UUID from "@/utils/uuid";
import React from "react";
import { createAction, createReducer } from "@reduxjs/toolkit";

type State = {
  QSNo: number;
  SSNo: number;
  SSSNo: number;
  type: string;
  hindi: {
    question: string;
    options: {
      prompt: string;
      value: string;
    }[];
  };
  english: {
    question: string;
    options: {
      prompt: string;
      value: string;
    }[];
  };
};

export const CreateSeriesContext = React.createContext(null);

const _Provider = () => {
  return <CreateSeriesContext.Provider value={}></CreateSeriesContext.Provider>;
};

export default _Provider;

const ADDITEM = "";
const DELETEITEM = "";
const ONCHANGEQUESTION = "";
const ONCHANGEOPTIONS = "";

const slice = {
  initialState: {
    uid: UUID(4),
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
        type: "",
        QSNo: "",
        SSNo: "",
        SSSNo: "",
        hindi: {
          question: "",
          options: [
            {
              prompt: "",
              value: "",
            },
          ],
        },
        english: {
          question: "",
          options: [
            {
              prompt: "",
              value: "",
            },
          ],
        },
      },
    ],
  },
  reducer: (state, action) => {
    switch (action.key) {
      case value:
        break;

      default:
        break;
    }
  },
};

const increment = createAction<number>("increment");
const decrement = createAction<number>("decrement");

const hell = createReducer({ some: 0 }, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.some = action.payload;
  });
  builder.addCase(decrement, (state, action) => {
    state.some = action.payload;
  });
});
