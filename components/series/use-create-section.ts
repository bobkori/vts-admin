import React from "react";
import { useImmer } from "use-immer";
import { SectionQuestionsTypes } from "@/typings/series";

type IEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type TEvent = React.ChangeEvent<HTMLTextAreaElement>;

const options = Array.from({ length: 4 }).map((_) => {
  return {
    value: "",
    correct: false,
    image: null,
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
          image: null,
          options: options,
        },
        english: {
          question: "",
          solution: "",
          image: null,
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
      if (window.confirm("Are You sure to delete this question")) {
        updateQuestionState((draft) => {
          draft.questions.splice(index, 1);
        });
      }
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

  // Update Question
  const onAddImageToQuestion = React.useCallback(
    (file: File, language: string, index: number) => {
      if (file) {
        updateQuestionState((draft) => {
          const question = draft.questions[index] as any;
          question[language].image = file;
        });
      }
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
  const onAddImageToOptions = React.useCallback(
    (
      file: File,
      language: string,
      index: {
        parentIndex: number;
        childIndex: number;
      }
    ) => {
      // const { files } = event.target;
      console.log({ from: file });
      if (file) {
        updateQuestionState((draft) => {
          // @ts-ignore
          const _draft = draft.questions[index.parentIndex][language];
          _draft.options[index.childIndex].image = file;
        });
      }
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
    onAddImageToQuestion: React.useMemo(
      () => onAddImageToQuestion,
      [onAddImageToQuestion]
    ),
    onAddImageToOptions: React.useMemo(
      () => onAddImageToOptions,
      [onAddImageToOptions]
    ),
  };
};
export default useCreateSection;
