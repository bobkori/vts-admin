import React from "react";
import css from "@/styles/series.module.scss";
import Input from "@/components/inputs";
import Button from "@/components/button";
import { CreateSeriesContext } from "@/context/create-series";
import DeleteIcon from "@/icons/DeleteIcon";
import {
  QuestionsTypes,
  CreateSeriesContextTypes,
} from "@/context/types/series";
import axios from "axios";
import * as endpoints from "@/endpoints";
import RichTextEditor from "@/components/rich-text-editor";

type FEvent = React.ChangeEvent<HTMLFormElement>;

const TestSeriesHome = () => {
  const {
    state,
    onAddQuestion,
    onChangeOptions,
    onChangeQuestion,
    onChangeValues,
    onDeleteQuestion,
  } = React.useContext(CreateSeriesContext);

  console.log(state?.questions);

  // const onSubmitData = React.useCallback(async (event: FEvent) => {
  //   event.preventDefault();
  // }, []);

  const onSubmitData = React.useCallback(
    async (event: FEvent) => {
      event.preventDefault();
      try {
        const senderData = {
          slug: state?.slug,
          title: state?.title,
          is_saved: false,
          is_marked: false,
          question_score: "20%",
          user_attempt_list: [],
          marks: {
            positive: 2,
            negative: 0.5,
          },
          questions: state?.questions,
        };
        console.log({ senderData });
        const { data } = await axios({
          method: "post",
          url: endpoints.TestSeries,
          data: senderData,
        });
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    [state?.questions, state?.slug, state?.title]
  );

  return (
    <div className={css["series-container"]}>
      <h4>Basic Info</h4>
      <form
        onSubmit={onSubmitData}
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <div className="row">
          <div className="col-lg-4">
            <Input
              label="Title"
              onChange={({ target }) => onChangeValues("title", target.value)}
            />
          </div>
          <div className="col-lg-4">
            <Input
              label="slug"
              onChange={({ target }) => onChangeValues("slug", target.value)}
            />
          </div>
        </div>
        {/* FOR question */}
        <div
          style={{
            gap: ".5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {state?.questions.map((data, index) => {
            return (
              <QuestionContainer
                key={index}
                data={data}
                parentIndex={index}
                onChangeOptions={onChangeOptions}
                onChangeQuestion={onChangeQuestion}
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

interface QuestionContainerProps extends CreateSeriesContextTypes {
  data: QuestionsTypes;
  parentIndex: number;
}

const QuestionContainer = ({
  onChangeOptions,
  onChangeQuestion,
  onDeleteQuestion,
  data,
  parentIndex,
}: QuestionContainerProps) => {
  const tabsArray = [
    {
      label: "English",
    },
    {
      label: "Hindi",
    },
  ];
  const [selectedTab, setSelectedTab] = React.useState(tabsArray[0].label);

  const LanguageContainer = React.useMemo(() => {
    switch (selectedTab) {
      case "Hindi":
        return (
          <div className="row">
            <div className="col">
              <Input
                label="Question"
                value={data.hindi?.question}
                onChange={({ target }) =>
                  onChangeQuestion(target.value, "hindi", parentIndex)
                }
              />
            </div>
            {data.hindi?.options.map((_o, _i) => (
              <div className="col-lg-6" key={_i}>
                <Input
                  label={`Option ${numberToWord[_i]}`}
                  value={_o.value}
                  onChange={({ target: { value } }) =>
                    onChangeOptions(value, "hindi", {
                      parentIndex: parentIndex,
                      childIndex: _i,
                    })
                  }
                />
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="row">
            <div className="col">
              <Input
                name="question"
                label="Question"
                value={data.english?.question}
                onChange={({ target }) =>
                  onChangeQuestion(target.value, "english", parentIndex)
                }
              />
            </div>
            <div className="row">
              <RichTextEditor
                value={""}
                onChange={(value) => console.log(value)}
                id="rte"
              />
            </div>
            {data.english?.options.map((_o, _i) => (
              <div className="col-lg-6" key={_i}>
                <Input
                  label={`Option ${numberToWord[_i]}`}
                  value={_o.value}
                  onChange={({ target: { value } }) =>
                    onChangeOptions(value, "english", {
                      parentIndex: parentIndex,
                      childIndex: _i,
                    })
                  }
                />
              </div>
            ))}
          </div>
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    parentIndex,
    selectedTab,
    data.hindi?.options,
    data.hindi?.question,
    data.english?.options,
    data.english?.question,
  ]);

  return (
    <div className={css["question-container"]}>
      <div className={css["question-detail"]}>
        <h2>Question : {parentIndex + 1}</h2>
        {/* <h2>UUID : {data.uuid}</h2> */}
      </div>
      <div className={css["tab-container"]}>
        <ul className={css["tab-controls"]}>
          {tabsArray.map((t, i) => (
            <li
              key={i}
              onClick={() => setSelectedTab(t.label)}
              className={t.label === selectedTab ? css["active"] : ""}
            >
              {t.label}
            </li>
          ))}
        </ul>
        <ul className={css["list-controls"]}>
          {/* <li>
            <i onClick={() => onDeleteQuestion(parentIndex)}>
              <DeleteIcon height={18} width={18} />
            </i>
          </li> */}
          <li>
            <i onClick={() => onDeleteQuestion(parentIndex)}>
              <DeleteIcon height={18} width={18} />
            </i>
          </li>
        </ul>
      </div>
      <div className="flex">{LanguageContainer}</div>
    </div>
  );
};

const numberToWord = ["One", "Two", "Three", "Four"];
