/* eslint-disable @next/next/no-img-element */
import React from "react";
import useTabs from "../series/use-tabs";
import DeleteIcon from "@/icons/DeleteIcon";
import Textarea from "@/components/textarea";
import css from "@/styles/series.module.scss";
import TextAreaWithImage from "../textarea/textarea-image";
import { SectionQuestionsTypes as QuestionsTypes } from "@/typings/series";
import ImagePreview from "../textarea/preview";

type IEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
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
  onChangeCorrect: (
    language: string,
    index: {
      parentIndex: number;
      childIndex: number;
    }
  ) => void;
  onDeleteQuestion: (index: number) => void;
  onAddImageToQuestion: (files: File, language: string, index: number) => void;
  onAddImageToOptions: (
    files: File,
    language: string,
    index: {
      parentIndex: number;
      childIndex: number;
    }
  ) => void;
}

const QuestionContainer = ({
  data,
  parentIndex,
  onChangeOptions,
  onChangeQuestion,
  onDeleteQuestion,
  onChangeSolution,
  onChangeCorrect,
  onAddImageToOptions,
  onAddImageToQuestion,
}: QuestionContainerProps) => {
  // const { onSelectTab, selectedTab, tabsArray } = useTabs();

  const HindiContainer = React.useMemo(() => {
    return (
      <div className="row">
        <div className="col">
          <h4>English Question</h4>
          <br />
          <TextAreaWithImage
            name="question"
            // label="Hindi Question"
            value={data.hindi?.question}
            onChange={(event) => onChangeQuestion(event, "hindi", parentIndex)}
            showImage
            onPickImage={(file) =>
              onAddImageToQuestion(file, "hindi", parentIndex)
            }
            imageValue={data.hindi.image}
          />
        </div>
        {data.hindi?.options.map((_opt, childIndex) => (
          <div className="col-lg-12" key={childIndex}>
            <TextAreaWithImage
              label={`Option ${numberToWord[childIndex]} ${
                _opt.correct ? "(Mark As Correct)" : ""
              }`}
              value={_opt.value}
              showImage={true}
              onChange={(event) =>
                onChangeOptions(event, "hindi", {
                  parentIndex,
                  childIndex,
                })
              }
              markAsProps={{
                show: true,
                checked: _opt.correct,
                onClick: () => {
                  onChangeCorrect("hindi", {
                    parentIndex,
                    childIndex,
                  });
                },
              }}
              onPickImage={(image) =>
                onAddImageToOptions(image, "hindi", {
                  parentIndex,
                  childIndex,
                })
              }
              imageValue={_opt.image}
            />
          </div>
        ))}
        <div className="col">
          <Textarea
            label="Add Solution"
            value={data.hindi.solution}
            onChange={(event) => onChangeSolution(event, "hindi", parentIndex)}
          />
        </div>
      </div>
    );
  }, [
    data.hindi?.question,
    data.hindi?.options,
    data.hindi.solution,
    onChangeQuestion,
    parentIndex,
    onAddImageToQuestion,
    onChangeOptions,
    onChangeCorrect,
    onAddImageToOptions,
    onChangeSolution,
  ]);

  const EnglishContainer = React.useMemo(() => {
    return (
      <div className="row">
        <div className="col">
          <h4>English Question</h4>
          <br />
          <TextAreaWithImage
            name="question"
            value={data.english?.question}
            onChange={(event) =>
              onChangeQuestion(event, "english", parentIndex)
            }
            showImage
            onPickImage={(file) =>
              onAddImageToQuestion(file, "english", parentIndex)
            }
            imageValue={data.english.image}
          />
        </div>
        {data.english?.options.map((_opt, childIndex) => (
          <div className="col-lg-12" key={childIndex}>
            <TextAreaWithImage
              label={`Option ${numberToWord[childIndex]} ${
                _opt.correct ? "(Mark As Correct)" : ""
              }`}
              value={_opt.value}
              showImage={true}
              onChange={(event) =>
                onChangeOptions(event, "english", {
                  parentIndex,
                  childIndex,
                })
              }
              markAsProps={{
                show: true,
                checked: _opt.correct,
                onClick: () => {
                  onChangeCorrect("english", {
                    parentIndex,
                    childIndex,
                  });
                },
              }}
              onPickImage={(image) =>
                onAddImageToOptions(image, "english", {
                  parentIndex,
                  childIndex,
                })
              }
              imageValue={_opt.image}
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
  }, [
    data.english?.question,
    data.english?.options,
    data.english.solution,
    onChangeQuestion,
    parentIndex,
    onAddImageToQuestion,
    onChangeOptions,
    onChangeCorrect,
    onAddImageToOptions,
    onChangeSolution,
  ]);

  // const RenderTabs = React.useMemo(() => {
  //   switch (selectedTab) {
  //     case tabsArray[1].label:
  //       return HindiContainer;

  //     default:
  //       return EnglishContainer;
  //   }
  // }, [selectedTab]);

  return (
    <React.Fragment>
      {/* <div className={css["question-detail"]}>
        <h2>Question : {parentIndex + 1}</h2>
      </div> */}
      <div className={css["question-container"]}>
        <div className={css["tab-container"]}>
          <ul className={css["tab-controls"]}>
            {/* {tabsArray.map(({ label }, i) => (
              <li
                key={i}
                onClick={() => onSelectTab(label)}
                className={label === selectedTab ? css["active"] : ""}
              >
                {label}
              </li>
            ))} */}
            <h3>Question : {parentIndex + 1}</h3>
          </ul>
          <ul className={css["list-controls"]}>
            <li>
              <i onClick={() => onDeleteQuestion(parentIndex)}>
                <DeleteIcon height={18} width={18} fill={"#ffafcc"} />
              </i>
            </li>
          </ul>
        </div>
        <div className="flex">
          {EnglishContainer}
          {HindiContainer}
        </div>
      </div>
    </React.Fragment>
  );
};

const numberToWord = ["One", "Two", "Three", "Four"];

export default QuestionContainer;
