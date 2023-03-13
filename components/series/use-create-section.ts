import React from "react";
import { useImmer } from "use-immer";
import { SectionQuestionsTypes } from "@/typings/series";

type IEvent = React.ChangeEvent<HTMLInputElement>;
type TEvent = React.ChangeEvent<HTMLTextAreaElement>;

const options = Array.from({ length: 4 }).map((_, index) => {
  return {
    prompt: index + 1,
    value: "",
    correct: false,
  };
});

const useCreateSection = () => {
  const questions: SectionQuestionsTypes[] = React.useMemo(
    () => [
      {
        type: "mcq",
        QSNo: 1,
        SSNo: 1,
        SSSNo: 0,
        hindi: {
          question: "",
          solution: "",
          options: options,
        },
        english: {
          question: "",
          solution: "",
          options: options,
        },
      },
    ],
    []
  );

  const [state, updateQuestionState] = useImmer({
    title: "",
    questionsCount: "",
    time: 3000,
    marks: {
      positive: 2,
      negative: -0.5,
    },
    questions: questions,
  });
  // ADD QUESTION IN STATE
  const onAddQuestion = React.useCallback(() => {
    updateQuestionState((draft) => {
      draft.questions.push(...questions);
    });
  }, [questions, updateQuestionState]);

  const onDeleteQuestion = React.useCallback(
    (index: number) => {
      updateQuestionState((draft) => {
        // draft.questions.filter((_d, _i) => index !== _i);
        draft.questions.splice(index, 1);
      });
    },
    [updateQuestionState]
  );

  const onChangeValues = React.useCallback(
    (key: any, value: any) => {
      updateQuestionState((draft: any) => {
        draft[key] = value;
      });
    },
    [updateQuestionState]
  );
  const onChangeMarks = React.useCallback(
    (key: any, value: any) => {
      updateQuestionState((draft: any) => {
        draft["marks"][key] = value;
      });
    },
    [updateQuestionState]
  );
  // Update Question
  const onChangeQuestion = React.useCallback(
    (event: IEvent, language: string, index: number) => {
      const { value } = event.target;
      updateQuestionState((draft) => {
        const question = draft.questions[index] as any;
        question[language].question = value;
      });
    },
    [updateQuestionState]
  );
  // Update Solution
  const onChangeSolution = React.useCallback(
    (event: TEvent, language: string, index: number) => {
      const { value } = event.target;
      updateQuestionState((draft) => {
        const question = draft.questions[index] as any;
        question[language].solution = value;
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
        childIndex: number;
      }
    ) => {
      const { value } = event.target;
      updateQuestionState((draft) => {
        // @ts-ignore
        const _draft = draft.questions[index.parentIndex][language];
        _draft.options[index.childIndex].value = value;
      });
    },
    [updateQuestionState]
  );
  const onChangeCorrect = React.useCallback(
    (
      event: IEvent,
      language: string,
      index: {
        parentIndex: number;
        childIndex: number;
      }
    ) => {
      updateQuestionState((draft) => {
        // @ts-ignore
        const _draft = draft.questions[index.parentIndex][language];
        _draft.options.map((_item: { correct: boolean }, _index: number) => {
          if (_index === index.childIndex) {
            _item.correct = !_item.correct;
          } else {
            _item.correct = false;
          }
        });
      });
    },
    [updateQuestionState]
  );
  return {
    state,
    onChangeValues: React.useMemo(() => onChangeValues, [onChangeValues]),
    onAddQuestion: React.useMemo(() => onAddQuestion, [onAddQuestion]),
    onDeleteQuestion: React.useMemo(() => onDeleteQuestion, [onDeleteQuestion]),
    onChangeQuestion: React.useMemo(() => onChangeQuestion, [onChangeQuestion]),
    onChangeMarks: React.useMemo(() => onChangeMarks, [onChangeMarks]),
    onChangeOptions: React.useMemo(() => onChangeOptions, [onChangeOptions]),
    onChangeSolution: React.useMemo(() => onChangeSolution, [onChangeSolution]),
    onChangeCorrect: React.useMemo(() => onChangeCorrect, [onChangeCorrect]),
  };
};
export default useCreateSection;
