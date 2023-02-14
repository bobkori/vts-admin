import React from "react";
import css from "@/styles/series.module.scss";
import Input from "@/components/inputs";
import Button from "@/components/button";
import { useImmer } from "use-immer";
import axios from "axios";
import { useRouter } from "next/router";

interface State {
  title: string;
  slug: string;
  time: number;
  is_saved: boolean;
  is_marked: boolean;
  question_score: string;
  user_attempt_list: string[];
}

const options = Array.from({ length: 4 }).map((_, index) => {
  return {
    prompt: index + 1,
    value: "",
  };
});

type FEvent = React.ChangeEvent<HTMLFormElement>;

const TestSeriesHome = () => {
  const router = useRouter();

  const [state, updateQuestionState] = useImmer({
    title: "",
    slug: "",
    time: 3600,
    is_saved: false,
    is_marked: false,
    question_score: "56%",
    user_attempt_list: ["90%", "85%"],
  });

  const onChangeValues = React.useCallback(
    (key: keyof State, value: any) => {
      updateQuestionState((draft: any) => {
        draft[key] = value;
      });
    },
    [updateQuestionState]
  );

  const onSubmitData = React.useCallback(
    async (event: FEvent) => {
      event.preventDefault();
      console.log(state);
      try {
        const { data, status } = await axios({
          url: "http://localhost:4000/api/v1/series",
          method: "post",
          data: state,
        });
        if (status === 200) {
          router.back();
          alert(`Series created Successfully`);
        }
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    [state]
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
        </div>
        <div>
          <Button type="submit">Submit Data</Button>
        </div>
      </form>
    </div>
  );
};
export default TestSeriesHome;
