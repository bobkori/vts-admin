import React from "react";
import Input from "@/components/inputs";
import DeleteIcon from "@/icons/DeleteIcon";
import Textarea from "@/components/textarea";
import css from "@/styles/series.module.scss";

type QuestionsTypes = {
  QSNo: number;
  SSNo: number;
  SSSNo: number;
  type: string;
  hindi: {
    question: string;
    options: {
      prompt: string | number;
      value: string;
    }[];
  };
  english: {
    question: string;
    options: {
      prompt: string | number;
      value: string;
    }[];
  };
};

type IEvent = React.ChangeEvent<HTMLInputElement>;

interface QuestionContainerProps {
  data: QuestionsTypes;
  parentIndex: number;
  onChangeQuestion: (event: IEvent, language: string, index: number) => void;
  onChangeOptions: (
    event: IEvent,
    language: string,
    index: {
      parentIndex: number;
      childIndex: number;
    }
  ) => void;
  onDeleteQuestion: (index: number) => void;
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
                onChange={(event) =>
                  onChangeQuestion(event, "hindi", parentIndex)
                }
              />
            </div>
            {data.hindi?.options.map((_o, childIndex) => (
              <div className="col-lg-6" key={childIndex}>
                <Input
                  label={`Option ${numberToWord[childIndex]}`}
                  value={_o.value}
                  onChange={(event) =>
                    onChangeOptions(event, "hindi", {
                      parentIndex,
                      childIndex,
                    })
                  }
                />
              </div>
            ))}
            <div className="col">
              <Textarea label="Add Solution" />
            </div>
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
                onChange={(event) =>
                  onChangeQuestion(event, "english", parentIndex)
                }
              />
            </div>
            {data.english?.options.map((_o, childIndex) => (
              <div className="col-lg-6" key={childIndex}>
                <Input
                  label={`Option ${numberToWord[childIndex]}`}
                  value={_o.value}
                  onChange={(event) =>
                    onChangeOptions(event, "english", {
                      parentIndex,
                      childIndex,
                    })
                  }
                />
              </div>
            ))}
            <div className="col">
              <Textarea label="Add Solution" />
            </div>
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
    <React.Fragment>
      <div className={css["question-detail"]}>
        <h2>Question : {parentIndex + 1}</h2>
      </div>
      <div className={css["question-container"]}>
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
            <li>
              <i onClick={() => onDeleteQuestion(parentIndex)}>
                <DeleteIcon height={18} width={18} />
              </i>
            </li>
          </ul>
        </div>
        <div className="flex">{LanguageContainer}</div>
      </div>
    </React.Fragment>
  );
};

const numberToWord = ["One", "Two", "Three", "Four"];

export default QuestionContainer;
