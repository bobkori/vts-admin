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
import useCreateSection from "@/components/series/use-create-section";

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

  const {
    state,
    onAddQuestion,
    onChangeCorrect,
    onChangeOptions,
    onChangeQuestion,
    onChangeSolution,
    onChangeValues,
    onDeleteQuestion,
    onChangeMarks,
  } = useCreateSection();

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
            <div className="col-lg-12">
              <Select
                label="Select Subject"
                value={state.title}
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
                label="Negative Marking"
                value={state.marks.negative}
                onChange={({ target }) =>
                  onChangeMarks("negative", target.value)
                }
              />
            </div>
            <div className="col-lg-6">
              <Input
                type={"number"}
                label="Positive Marking"
                value={state.marks.positive}
                onChange={({ target }) =>
                  onChangeMarks("positive", target.value)
                }
              />
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
                onChangeSolution={onChangeSolution}
                onChangeCorrect={onChangeCorrect}
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
