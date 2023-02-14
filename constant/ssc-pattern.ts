const sscPattern = [
  {
    name: "CGL",
    duration: 60, // 1 Hour
    questionsCount: null,
    href: "/cgl",
    tiers: [
      {
        name: "Tier 1",
        marks: {
          correct: 2,
          inCorrect: 0.5,
          notAttempted: 0,
        },
        href: "/tier-one",
        sections: [
          {
            name: null,
            subjects: [
              {
                name: "Reasoning",
                questionsCount: 25,
                href: "/reasoning",
              },
              {
                name: "GS",
                questionsCount: 25,
                href: "/gs",
              },
              {
                name: "Maths",
                questionsCount: 25,
                href: "/maths",
              },
              {
                name: "English",
                questionsCount: 25,
                href: "/english",
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
        href: "/tier-one",
        sections: [
          {
            name: "Section I (Maths & LR)",
            href: "/maths-and-lr",
            subjects: [
              {
                name: "Maths",
                questionsCount: 30,
                href: "/maths",
              },
              {
                name: "LR",
                questionsCount: 30,
                href: "/lr",
              },
            ],
          },
          {
            name: "Section II (English & GA)",
            href: "/english-and-ga",
            subjects: [
              {
                name: "English",
                questionsCount: 45,
                href: "/english",
              },
              {
                name: "GA",
                questionsCount: 25,
                href: "/ga",
              },
            ],
          },
          {
            name: "Section III (Computer, Marks-0)",
            href: "/computer",
            subjects: [
              {
                name: "Computer",
                questionsCount: 20,
                href: "/computer",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "CHSL",
    duration: 60, // 1 Hour
    questionsCount: null,
    href: "/chsl",
    tiers: [
      {
        name: "Tier 1",
        marks: {
          correct: 2,
          inCorrect: 0.5,
          notAttempted: 0,
        },
        href: "/tier-one",
        sections: [
          {
            name: null,
            subjects: [
              {
                name: "Reasoning",
                questionsCount: 25,
                href: "/reasoning",
              },
              {
                name: "GS",
                questionsCount: 25,
                href: "/gs",
              },
              {
                name: "Maths",
                questionsCount: 25,
                href: "/maths",
              },
              {
                name: "English",
                questionsCount: 25,
                href: "/english",
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
        href: "/tier-one",
        sections: [
          {
            name: "Section I (Maths & LR)",
            href: "/maths-and-lr",
            subjects: [
              {
                name: "Maths",
                questionsCount: 30,
                href: "/maths",
              },
              {
                name: "LR",
                questionsCount: 30,
                href: "/lr",
              },
            ],
          },
          {
            name: "Section II (English & GA)",
            href: "/english-and-ga",
            subjects: [
              {
                name: "English",
                questionsCount: 45,
                href: "/english",
              },
              {
                name: "GA",
                questionsCount: 25,
                href: "/ga",
              },
            ],
          },
          {
            name: "Section III (Computer, Marks-0)",
            href: "/computer",
            subjects: [
              {
                name: "Computer",
                questionsCount: 20,
                href: "/computer",
              },
            ],
          },
        ],
      },
    ],
  },

  // {
  //   name: "CPO",
  //   duration: 60, // 1 Hour
  //   questionsCount: null,
  //   href: "/cpo",
  //   tiers: [
  //     {
  //       name: "Tier 1",
  //       marks: {
  //         correct: 2,
  //         inCorrect: 0.5,
  //         notAttempted: 0,
  //       },
  //       href: "/tier-one",

  //       sections: [
  //         {
  //           name: null,
  //           subjects: [
  //             {
  //               name: "Reasoning",
  //               questionsCount: 25,
  //             },
  //             {
  //               name: "GS",
  //               questionsCount: 25,
  //             },
  //             {
  //               name: "Maths",
  //               questionsCount: 25,
  //             },
  //             {
  //               name: "English",
  //               questionsCount: 25,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Tier 2",
  //       href: "/tier-two",
  //       marks: {
  //         correct: 1,
  //         inCorrect: 0.5,
  //         //   notAttempted: 0,
  //       },
  //       sections: [],
  //     },
  //   ],
  // },
  // {
  //   name: "MTS",
  //   duration: 60, // 1 Hour
  //   questionsCount: null,
  //   tiers: [
  //     {
  //       name: "Session-1",
  //       marks: {
  //         correct: 3,
  //         inCorrect: 0.5,
  //         notAttempted: 0,
  //       },
  //       questionsCount: 40,
  //       href: "/session-one",
  //       sections: [
  //         {
  //           name: null,
  //           subjects: [
  //             {
  //               name: "Maths",
  //               questionsCount: 20,
  //             },
  //             {
  //               name: "Reasoning",
  //               questionsCount: 20,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Session-2",
  //       marks: {
  //         correct: 3,
  //         inCorrect: 1,
  //         notAttempted: 0,
  //       },
  //       questionsCount: 50,
  //       href: "/session-two",
  //       sections: [
  //         {
  //           name: null,
  //           subjects: [
  //             {
  //               name: "English",
  //               questionsCount: 25,
  //               href: "/english",
  //             },
  //             {
  //               name: "GS",
  //               questionsCount: 25,
  //               href: "/gs",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "GD",
  //   duration: 60, // 1 Hour
  //   questionsCount: null,
  //   href: "/gd",
  //   tiers: [
  //     {
  //       name: null,
  //       marks: {
  //         correct: 2,
  //         inCorrect: 0.5,
  //       },
  //       questionsCount: 80,
  //       sections: [
  //         {
  //           name: null,
  //           subjects: [
  //             {
  //               name: "English",
  //               questionsCount: 20,
  //               href: "/english",
  //             },
  //             {
  //               name: "Math",
  //               questionsCount: 20,
  //               href: "/math",
  //             },
  //             {
  //               name: "GS",
  //               questionsCount: 20,
  //               href: "/gs",
  //             },
  //             {
  //               name: "Language",
  //               questionsCount: 20,
  //               href: "/language",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default sscPattern;
