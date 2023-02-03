import React from "react";

type OnlyKeys = keyof StateTypes;
type mixed = string | number | undefined;

interface CreateSeriesContextTypes {
  state: StateTypes;
  onAddQuestion: () => void;
  onDeleteQuestion: (index: number) => void;
  onChangeValues: (key: OnlyKeys, value: mixed) => void;
  onChangeQuestion: (value: mixed, language: any, index: number) => void;
  onChangeOptions: (
    value: mixed,
    language: any,
    index: {
      parentIndex: number;
      childIndex: number;
    }
  ) => void;
}

type StateTypes = {
  uuid: string;
  slug: string;
  time: string;
  title: string;
  is_saved: string;
  is_marked: string;
  question_score: string;
  user_attempt_list: string;
  marks: {
    positive: number;
    negative: number;
  };
  questions: QuestionsTypes[];
};

type QuestionsTypesKeys = keyof QuestionsTypes;
type QuestionsTypes = {
  uuid: string;
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
