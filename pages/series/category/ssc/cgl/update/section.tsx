import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "@/components/inputs";
import Button from "@/components/button";
import Select from "@/components/select";
import css from "@/styles/series.module.scss";
import Option from "@/components/select/option";
import QuestionContainer from "@/components/section/question-container";
import useCreateSection from "@/components/series/use-create-section";

type FEvent = React.ChangeEvent<HTMLFormElement>;

const TestSeriesHome = () => {
  const { query, back } = useRouter();

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
    onAddImageToOptions,
    onAddImageToQuestion,
  } = useCreateSection();

  const onSubmitData = React.useCallback(
    async (event: FEvent) => {
      event.preventDefault();
      const _data = {
        title: state.title,
        questionsCount: state.questions.length,
        marks: {
          positive: state.marks.positive,
          negative: state.marks.negative,
        },
        questions: state.questions,
      };
      try {
        const { status } = await axios({
          url: `http://localhost:4000/api/v1/sections/${query?.series_id}`,
          method: "post",
          data: _data,
        });

        if (status === 200) {
          back();
          alert(`Section created for ${query?.series_id} Series`);
        }
        console.log(_data);
      } catch (err) {
        console.log(err);
      }
    },
    [
      back,
      state.title,
      state.questions,
      query?.series_id,
      state.marks.negative,
      state.marks.positive,
    ]
  );

  console.log(state);

  return (
    <div className={css["series-container"]}>
      <div className={css["question-detail"]}>
        <h2>Update Section</h2>
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
                onAddImageToQuestion={onAddImageToQuestion}
                onAddImageToOptions={onAddImageToOptions}
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
