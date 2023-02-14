import React from "react";
import UUID from "@/utils/uuid";
import { useImmer } from "use-immer";

type IEvent = React.ChangeEvent<HTMLInputElement>;
type FEvent = React.ChangeEvent<HTMLFormElement>;

type IState = {
  duration: unknown;
  uuid: string;
  slug: string;
  time: string;
  title: string;
  is_saved: boolean;
  is_marked: boolean;
  question_score: string;
  user_attempt_list: string;
  marks: {
    positive: number;
    negative: number;
  };
  questions: QuestionsTypes[];
};

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

type QKey = keyof IState;

const options = Array.from({ length: 4 }).map((_, _i) => {
  return {
    prompt: _i.toString(),
    value: "",
  };
});

const initialState: IState = {
  uuid: UUID(4),
  slug: "",
  time: "",
  title: "",
  is_saved: false,
  is_marked: false,
  question_score: "",
  user_attempt_list: "",
  marks: {
    positive: 2,
    negative: 0.5,
  },
  questions: [
    {
      uuid: UUID(4),
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
  duration: undefined,
};

const useCreate = (i = initialState) => {
  const [state, updateQuestionState] = useImmer<IState>(i);

  const onChangeValues = React.useCallback(
    (key: any, value: any) => {
      updateQuestionState((draft: any) => {
        draft[key] = value;
      });
    },
    [updateQuestionState]
  );
  // ADD QUESTION IN STATE
  const onAddQuestion = React.useCallback(() => {
    updateQuestionState((draft) => {
      draft.questions.push(...state.questions);
    });
  }, [state, updateQuestionState]);

  const onDeleteQuestion = React.useCallback(
    (index: number) => {
      updateQuestionState((draft) => {
        draft.questions.filter((_d, _i) => index !== _i);
      });
    },
    [updateQuestionState]
  );
  // Update Question
  const onChangeQuestion = React.useCallback(
    (event: IEvent, language: string, index: number) => {
      const { value } = event.target;
      updateQuestionState((draft) => {
        const q = draft.questions[index] as any;
        q[language].question = value;
      });
    },
    [updateQuestionState]
  );

  // Update Options
  const onChangeOptions = React.useCallback(
    (
      event: IEvent,
      language: string,
      index: {
        parentIndex: number;
        currentIndex: number;
      }
    ) => {
      const { value } = event.target;
      updateQuestionState((draft: any) => {
        const _draft = draft[index.parentIndex][language];
        _draft.options[index.currentIndex].value = value;
      });
    },
    [updateQuestionState]
  );

  // const {mutate,data}=useSwr()

  const onSubmitData = React.useCallback(async (event: FEvent) => {
    event.preventDefault();
  }, []);

  // Return Values
  return {
    state,
    onChangeValues,
    onSubmitData,
    onAddQuestion,
    onDeleteQuestion,
    onChangeQuestion,
    onChangeOptions,
  };
};
export default useCreate;
