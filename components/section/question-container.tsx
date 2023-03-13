import React from "react";
import Input from "@/components/inputs";
import DeleteIcon from "@/icons/DeleteIcon";
import Textarea from "@/components/textarea";
import css from "@/styles/series.module.scss";
import InputWithRadio from "../inputs/with-radio";
import { SectionQuestionsTypes as QuestionsTypes } from "@/typings/series";

type IEvent = React.ChangeEvent<HTMLInputElement>;
type TEvent = React.ChangeEvent<HTMLTextAreaElement>;

type SHandler<E> = (event: E, language: string, index: number) => void;
type LHandler = (
  event: IEvent,
  language: string,
  index: {
    parentIndex: number;
    childIndex: number;
  }
) => void;

interface QuestionContainerProps {
  data: QuestionsTypes;
  parentIndex: number;
  onChangeQuestion: SHandler<IEvent>;
  onChangeSolution: SHandler<TEvent>;
  onChangeOptions: LHandler;
  onChangeCorrect: LHandler;
  onDeleteQuestion: (index: number) => void;
}

const QuestionContainer = ({
  data,
  parentIndex,
  onChangeOptions,
  onChangeQuestion,
  onDeleteQuestion,
  onChangeSolution,
  onChangeCorrect,
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
                <InputWithRadio
                  label={`Option ${numberToWord[childIndex]} ${
                    _o.correct ? "(Correct)" : ""
                  }`}
                  value={_o.value}
                  onChange={(event) =>
                    onChangeOptions(event, "hindi", {
                      parentIndex,
                      childIndex,
                    })
                  }
                  radioProps={{
                    onChange: (event) => {
                      onChangeCorrect(event, "hindi", {
                        parentIndex,
                        childIndex,
                      });
                    },
                  }}
                />
              </div>
            ))}
            <div className="col">
              <Textarea
                label="Add Solution"
                value={data.hindi.solution}
                onChange={(event) =>
                  onChangeSolution(event, "hindi", parentIndex)
                }
              />
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
                <InputWithRadio
                  label={`Option ${numberToWord[childIndex]} ${
                    _o.correct ? "(Correct)" : ""
                  }`}
                  value={_o.value}
                  onChange={(event) =>
                    onChangeOptions(event, "english", {
                      parentIndex,
                      childIndex,
                    })
                  }
                  radioProps={{
                    onChange: (event) => {
                      onChangeCorrect(event, "english", {
                        parentIndex,
                        childIndex,
                      });
                    },
                  }}
                />
              </div>
            ))}
            <div className="col">
              <Textarea
                label="Add Solution"
                value={data.english.solution}
                onChange={(event) =>
                  onChangeSolution(event, "english", parentIndex)
                }
              />
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
    data.hindi?.solution,
    data.english?.options,
    data.english?.question,
    data.english?.solution,
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
