import React from "react";
import Input from "@/components/inputs";
import css from "@/styles/series.module.scss";
import useCreateSeries from "./use-create-series";
import Select from "../select";
import Option from "../select/option";
import timer from "@/utils/timer";
import slugMaker from "@/utils/slug-maker";
import { SeriesStateType } from "@/typings/series";

type Event = React.ChangeEvent<HTMLFormElement>;
type TestSeriesHomeProps = {
  course: string[];
  onSubmit: (value: SeriesStateType) => void;
};

const CreateSeries = ({ course, onSubmit }: TestSeriesHomeProps) => {
  const { onChangeValues, state, valid } = useCreateSeries<SeriesStateType>({
    title: "",
    slug: "",
    duration: 3600,
    is_saved: false,
    is_marked: false,
    question_score: "56%",
    user_attempt_list: ["90%", "85%"],
    course: course[1],
  });

  const onSubmitData = React.useCallback(
    async (event: Event) => {
      event.preventDefault();
      if (onSubmit) {
        onSubmit(state);
      }
    },
    [onSubmit, state]
  );

  return (
    <div className={css["series-container"]}>
      <div className={css["question-detail"]}>
        <h2>Create Section</h2>
      </div>
      <form
        onSubmit={onSubmitData}
        style={{
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={`${css["question-container"]}`}>
          <div className={`row`}>
            <div className="col-lg-12">
              <Input
                label="Title"
                value={state.title}
                onChange={({ target }) => onChangeValues("title", target.value)}
              />
            </div>
            <div className="col-lg-12">
              <Input
                value={state.slug}
                label="Slug"
                onChange={({ target }) =>
                  onChangeValues("slug", slugMaker(target.value))
                }
              />
            </div>
            <div className="col-lg-12">
              <Input readOnly label="Course" value={course[1].toUpperCase()} />
            </div>
            <div className="col-lg-12">
              <Select
                label="Duration"
                value={state.duration}
                onChange={({ target }) =>
                  onChangeValues("duration", Number(target.value))
                }
              >
                <Option value={timer(30)}>30 Min</Option>
                <Option value={timer(45)}>45 Min</Option>
                <Option value={timer(60)}>1 Hour</Option>
                <Option value={timer(60 + 30)}>1:30 Hour</Option>
              </Select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={!valid}
              style={{
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              Submit Data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateSeries;
