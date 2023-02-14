const railwayPattern = [
  {
    name: "NTPC",
    duration: 60, // 1 Hour
    questionsCount: null,
    tiers: [
      {
        name: "Tier 1",
        marks: {
          correct: 2,
          inCorrect: 0.5,
          notAttempted: 0,
        },
        sections: [
          {
            name: null,
            subjects: [
              {
                name: "Reasoning",
                questionsCount: 25,
              },
              {
                name: "GS",
                questionsCount: 25,
              },
              {
                name: "Maths",
                questionsCount: 25,
              },
              {
                name: "English",
                questionsCount: 25,
              },
            ],
          },
        ],
      },
      {
        name: "Tier 2",
        marks: {
          correct: 3,
          inCorrect: 0.5,
          notAttempted: 0,
        },
        sections: [
          {
            name: "Section I (Maths & LR)",
            subjects: [
              {
                name: "Maths",
                questionsCount: 30,
              },
              {
                name: "LR",
                questionsCount: 30,
              },
            ],
          },
          {
            name: "Section II (English & GA)",
            subjects: [
              {
                name: "English",
                questionsCount: 45,
              },
              {
                name: "GA",
                questionsCount: 25,
              },
            ],
          },
          {
            name: "Section III (Computer, Marks-0)",
            subjects: [
              {
                name: "Computer",
                questionsCount: 20,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ALP",
    duration: 60, // 1 Hour
    questionsCount: null,
    tiers: [
      {
        name: "Tier 1",
        marks: {
          correct: 2,
          inCorrect: 0.5,
          notAttempted: 0,
        },
        sections: [
          {
            name: null,
            subjects: [
              {
                name: "Reasoning",
                questionsCount: 25,
              },
              {
                name: "GS",
                questionsCount: 25,
              },
              {
                name: "Maths",
                questionsCount: 25,
              },
              {
                name: "English",
                questionsCount: 25,
              },
            ],
          },
        ],
      },
      {
        name: "Tier 2",
        marks: {
          correct: 3,
          inCorrect: 0.5,
          notAttempted: 0,
        },
        sections: [
          {
            name: "Section I (Maths & LR)",
            subjects: [
              {
                name: "Maths",
                questionsCount: 30,
              },
              {
                name: "LR",
                questionsCount: 30,
              },
            ],
          },
          {
            name: "Section II (English & GA)",
            subjects: [
              {
                name: "English",
                questionsCount: 45,
              },
              {
                name: "GA",
                questionsCount: 25,
              },
            ],
          },
          {
            name: "Section III (Computer, Marks-0)",
            subjects: [
              {
                name: "Computer",
                questionsCount: 20,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Group-D",
    duration: 60, // 1 Hour
    questionsCount: null,
    tiers: [
      {
        name: "Tier 1",
        marks: {
          correct: 2,
          inCorrect: 0.5,
          notAttempted: 0,
        },
        sections: [
          {
            name: null,
            subjects: [
              {
                name: "Reasoning",
                questionsCount: 25,
              },
              {
                name: "GS",
                questionsCount: 25,
              },
              {
                name: "Maths",
                questionsCount: 25,
              },
              {
                name: "English",
                questionsCount: 25,
              },
            ],
          },
        ],
      },
      {
        name: "Tier 2",
        marks: {
          correct: 1,
          inCorrect: 0.5,
          //   notAttempted: 0,
        },
        sections: [],
      },
    ],
  },
];

export default railwayPattern;
