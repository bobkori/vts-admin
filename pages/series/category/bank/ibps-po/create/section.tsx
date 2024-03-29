import React from "react";
import axios from "axios";
import { useImmer } from "use-immer";
import { useRouter } from "next/router";
import Input from "@/components/inputs";
import Button from "@/components/button";
import Select from "@/components/select";
import Option from "@/components/select/option";
import css from "@/styles/series.module.scss";
import QuestionContainer from "@/components/section/question-container";

type IEvent = React.ChangeEvent<HTMLInputElement>;

const options = Array.from({ length: 4 }).map((_, index) => {
  return {
    prompt: index + 1,
    value: "",
  };
});

type FEvent = React.ChangeEvent<HTMLFormElement>;

const TestSeriesHome = () => {
  const { query } = useRouter();
  // console.log(query?.series_id);

  const questions = [
    {
      type: "mcq",
      QSNo: 1,
      SSNo: 1,
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
  ];

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
  }, [state, updateQuestionState]);

  const onDeleteQuestion = React.useCallback(
    (index: number) => {
      updateQuestionState((draft) => {
        draft.questions.filter((_d, _i) => index !== _i);
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

  const onSubmitData = React.useCallback(
    async (event: FEvent) => {
      event.preventDefault();
      query?.series_id;
      const _data = {
        title: state.title,
        questionsCount: state.questions.length,
        time: state.time,
        marks: {
          positive: 2,
          negative: -0.5,
        },
        questions: state.questions,
      };
      console.log(_data);
      try {
        const { data, status } = await axios({
          url: `http://localhost:4000/api/v1/sections/${query?.series_id}`,
          method: "post",
          data: _data,
        });
        console.log(data);
        if (status === 200) {
          alert(`Section created for ${query?.series_id} Series`);
        }
      } catch (err) {
        console.log(err);
      }
      console.log(state);
    },
    [query?.series_id, state]
  );

  return (
    <div className={css["series-container"]}>
      <div className={css["question-detail"]}>
        <h2>Create Section One</h2>
      </div>
      <form
        onSubmit={onSubmitData}
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <div className={`${css["question-container"]}`}>
          <div className={`row`}>
            <div className="col-lg-6">
              <Select
                label="Select Subject"
                onChange={({ target }) => onChangeValues("title", target.value)}
              >
                <Option>Reasoning</Option>
                <Option>GS</Option>
                <Option>Maths</Option>
                <Option>English</Option>
              </Select>
            </div>
            <div className="col-lg-6">
              <Input
                type={"number"}
                label="Duration"
                onChange={({ target }) => onChangeValues("time", target.value)}
              />
            </div>
            <div className="col-lg-6">
              <Input type={"number"} label="Negative Marking" />
            </div>
            <div className="col-lg-6">
              <Input type={"number"} label="Positive Marking" />
            </div>
          </div>
        </div>

        <div
          style={{
            gap: ".5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {state.questions.map((data, index) => {
            return (
              <QuestionContainer
                key={index}
                data={data}
                parentIndex={index}
                onChangeQuestion={onChangeQuestion}
                onChangeOptions={onChangeOptions}
                onDeleteQuestion={onDeleteQuestion}
              />
            );
          })}
        </div>
        <div>
          <Button type="button" onClick={onAddQuestion}>
            Add Question
          </Button>
        </div>
        <div>
          <Button type="submit">Submit Data</Button>
        </div>
      </form>
    </div>
  );
};
export default TestSeriesHome;
