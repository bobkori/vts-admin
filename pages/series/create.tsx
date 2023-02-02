import React from "react";
import css from "@/styles/series.module.scss";
import Input from "@/components/inputs";
import { useImmer } from "use-immer";
import Button from "@/components/button";
import axios from "axios";
import { TestSeries } from "@/endpoints";

type IEvent = React.ChangeEvent<HTMLInputElement>;
type FEvent = React.ChangeEvent<HTMLFormElement>;

type State = {
  QSNo: number;
  SSNo: number;
  SSSNo: number;
  type: string;
  hindi: {
    question: string;
    options: {
      prompt: string;
      value: string;
    }[];
  };
  english: {
    question: string;
    options: {
      prompt: string;
      value: string;
    }[];
  };
};

// const fetcher = (...args) => fetch(...args).then(res => res.json())

const TestSeriesHome = () => {
  // const { data, mutate } = useSWR('http://localhost:3000/v1/series/', fetcher)

  const [questionState, updateQuestionState] = useImmer<State[]>([...state]);

  // Update Question
  const updateQuestion = React.useCallback(
    (event: IEvent, language: string, index: number) => {
      const { value } = event.target;
      updateQuestionState((draft) => {
        draft[index][language].question = value;
      });
    },
    [updateQuestionState]
  );

  // Update Options
  const updateOptions = React.useCallback(
    (
      event: IEvent,
      language: string,
      index: {
        _i1: number;
        _i2: number;
      }
    ) => {
      const { value } = event.target;
      updateQuestionState((draft) => {
        const _draft = draft[index._i1][language];
        _draft.options[index._i2].value = value;
      });
    },
    [updateQuestionState]
  );

  const addInArray = React.useCallback(() => {
    updateQuestionState((draft) => {
      draft.push(...state);
    });
  }, [updateQuestionState]);

  const delteInArray = React.useCallback(
    (index: number) => {
      updateQuestionState((draft) => {
        draft.filter((_d, _i) => index !== _i);
      });
    },
    [updateQuestionState]
  );

  // const {mutate,data}=useSwr()

  const onSubmitData = React.useCallback(
    async (event: FEvent) => {
      event.preventDefault();
      console.log(questionState);
      try {
        const senderData = {
          slug: "ssc-maths-previous-year-questions again ",
          title: "Australia Open 2023: Super Sports Quiz",
          is_saved: false,
          is_marked: false,
          question_score: "20%",
          user_attempt_list: [],
          marks: {
            positive: 2,
            negative: 0.5,
          },
          questions: questionState,
        };

        console.log(senderData);
        const { data } = await axios({
          method: "post",
          url: TestSeries,
          data: senderData,
        });
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    [questionState]
  );

  return (
    <div className={css["series-container"]}>
      <h4>Basic Info</h4>
      <form onSubmit={onSubmitData}>
        <div className="row">
          <div className="col-lg-4">
            <Input label="Title" />
          </div>
          <div className="col-lg-4">
            <Input label="slug" />
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
          {questionState.map((data, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: ".5rem",
                  borderRadius: "10px",
                  border: "1.5px solid #c5cde6",
                }}
              >
                <button onClick={() => delteInArray(index)}>Delete This</button>
                <p>Question :{index + 1}</p>
                <div className="flex">
                  <h2>English</h2>
                  <div className="row">
                    <div className="col">
                      <Input
                        name="question"
                        label="Question"
                        value={data.english?.question}
                        onChange={(event) =>
                          updateQuestion(event, "english", index)
                        }
                      />
                    </div>
                    {data.english?.options.map((_o, _i) => (
                      <div className="col-lg-6" key={_i}>
                        <Input
                          label="Option One"
                          value={_o.value}
                          onChange={(event) =>
                            updateOptions(event, "english", {
                              _i1: index,
                              _i2: _i,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <h2>Hindi</h2>
                  <div className="row">
                    <div className="col">
                      <Input
                        label="Question"
                        value={data.hindi?.question}
                        onChange={(event) =>
                          updateQuestion(event, "hindi", index)
                        }
                      />
                    </div>
                    {data.hindi?.options.map((_o, _i) => (
                      <div className="col-lg-6" key={_i}>
                        <Input
                          label="Option One"
                          value={_o.value}
                          onChange={(event) =>
                            updateOptions(event, "hindi", {
                              _i1: index,
                              _i2: _i,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <br />
        <div>
          <Button type="button" onClick={addInArray}>
            Add Question
          </Button>
        </div>

        <br />
        <div>
          <Button type="submit">Submit Data</Button>
        </div>
      </form>
    </div>
  );
};
export default TestSeriesHome;

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3000/api/v1/series");
//   const data = await response.json();
//   return {
//     props: {
//       series: data,
//     },
//   };
// };

// const state = [
//   {
//     hindi: {
//       question: "",
//       options: [
//         {
//           value: "",
//         },
//       ],
//     },
//     english: {
//       question: "",
//       options: [
//         {
//           value: "",
//         },
//       ],
//     },
//   },
// ];

const state = [
  {
    QSNo: 1,
    SSNo: 1,
    SSSNo: 0,
    type: "mcq",
    hindi: {
      question: "",
      options: [
        {
          prompt: "1",
          value: "",
        },
        {
          prompt: "2",
          value: "",
        },
        {
          prompt: "3",
          value: "",
        },
        {
          prompt: "4",
          value: "",
        },
      ],
    },
    english: {
      question: "",
      options: [
        {
          prompt: "1",
          value: "",
        },
        {
          prompt: "2",
          value: "",
        },
        {
          prompt: "3",
          value: "",
        },
        {
          prompt: "4",
          value: "",
        },
      ],
    },
  },
];
