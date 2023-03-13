import React from "react";

type SeriesStateType = {
  title: string;
  slug: string;
  duration: number;
  is_saved: boolean;
  is_marked: boolean;
  question_score: string;
  user_attempt_list: string[];
  [K: string]: any;
};

type SectionStateType = {
  title: string;
  questionsCount: string;
  time: number;
  marks: {
    positive: number;
    negative: number;
  };
  questions: SectionQuestionsTypes;
};
type SectionQuestionsTypes = {
  type: string;
  QSNo: number;
  SSNo: number;
  SSSNo: number;
  hindi: {
    question: string;
    solution: string;
    options: {
      prompt: number;
      value: string;
      correct: boolean;
    }[];
  };
  english: {
    question: string;
    solution: string;
    options: {
      prompt: number;
      value: string;
      correct: boolean;
    }[];
  };
};
