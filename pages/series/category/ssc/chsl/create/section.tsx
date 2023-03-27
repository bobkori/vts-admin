import pMap from "p-map";
import React from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import { useRouter } from "next/router";
import Input from "@/components/inputs";
import Button from "@/components/button";
import Select from "@/components/select";
import PerPageLayout from "@/layout/perpage";
import css from "@/styles/series.module.scss";
import Option from "@/components/select/option";
import uploadImage from "@/endpoints/api/upload-series-image";
import QuestionContainer from "@/components/section/question-container";
import useCreateSection from "@/components/series/use-create-section";

type FEvent = React.ChangeEvent<HTMLFormElement>;

const SectionCreation = () => {
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

  console.log(state);
  const onSubmitData = React.useCallback(
    async (event: FEvent) => {
      event.preventDefault();

      try {
        const cloned = cloneDeep(state.questions);

        const value = await pMap(cloned, async (item) => {
          if (item.english.image !== null) {
            item.english.image = await uploadImage(item.english.image);
            item.english.options.map(async (item) => {
              if (item.image !== null) {
                item.image = await uploadImage(item.image);
              }
            });
          }
          if (item.hindi.image !== null) {
            item.hindi.image = await uploadImage(item.hindi.image);
            item.hindi.options.map(async (item) => {
              if (item.image !== null) {
                item.image = await uploadImage(item.image);
              }
            });
          }
          return item;
        });
        const _data = {
          title: state.title,
          questionsCount: state.questions.length,
          marks: {
            positive: state.marks.positive,
            negative: state.marks.negative,
          },
          questions: value,
        };
        axios
          .post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/sections/create/${query?.series_id}`,
            _data
          )
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              back();
              alert(`Section created for ${query?.series_id} Series`);
            }
          });
      } catch (error) {
        console.log();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      state.title,
      state.questions,
      state.marks.positive,
      state.marks.negative,
      query?.series_id,
    ]
  );

  return (
    <div className={css["series-container"]}>
      <div className={css["question-detail"]}>
        <h2>Create Section </h2>
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
export default SectionCreation;

SectionCreation.perpage = PerPageLayout;
