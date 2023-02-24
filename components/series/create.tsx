import React from "react";
import Input from "@/components/inputs";
import Button from "@/components/button";
import css from "@/styles/series.module.scss";
import useCreateSeries, { State } from "./use-create";

type Event = React.ChangeEvent<HTMLFormElement>;
interface TestSeriesHomeProps {
  course: string[];
  onSubmit: (value: State) => void;
}

const CreateSeries = ({ course, onSubmit }: TestSeriesHomeProps) => {
  const { onChangeValues, state } = useCreateSeries({
    title: "",
    slug: "",
    time: 3600,
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
                onChange={({ target }) => onChangeValues("title", target.value)}
              />
            </div>
            <div className="col-lg-12">
              <Input
                label="Slug"
                onChange={({ target }) => onChangeValues("slug", target.value)}
              />
            </div>
            <div className="col-lg-12">
              <Input
                type={"number"}
                label="Duration"
                onChange={({ target }) => onChangeValues("time", target.value)}
              />
            </div>
          </div>
          <div>
            <Button type="submit">Submit Data</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateSeries;
