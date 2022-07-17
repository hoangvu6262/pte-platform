import {
  listReadAloud,
  listRepeatSentence,
  listRetellLecture,
  listDescribeImage,
  listAnsShortQues,
} from "../../data/speakingTestExam";

import {
  listSummarizeText,
  listWriteEssayText
} from "../../data/writingTestExam"

import { 
  listReadingAndWriting, 
  listMultipleChoice, 
  listReorder, 
  listFillInBlank, 
  listSingleChoice 
} from "../../data/readingTestExam"

import {
  listSummarizeSpoken,
  listMultipleChoiceLis,
  listFillBlanks,
  listHighlightCorrect,
  listSingleChoiceLis,
  listSelectMissing,
  listHighlightIncorrect,
  listWriteFromDictation
} from "../../data/listeningTestExam"

const menuList = [
  {
    title: "Speaking",
    listItem: [
      {
        name: "Read Aloud",
        link: `read_aloud/s1/${listReadAloud[0].code}`,
        key: "s1",
      },
      {
        name: "Repeat Sentence",
        link: `repeat_sentence/s2/${listRepeatSentence[0].code}`,
        key: "s2",
      },
      {
        name: "Describe Image",
        link: `describe_image/s3/${listDescribeImage[0].code}`,
        key: "s3",
      },
      {
        name: "Re-tell Lecture",
        link: `re-tell_lecture/s4/${listRetellLecture[0].code}`,
        key: "s4",
      },
      {
        name: "Answer Short Question",
        link: `answer_short_question/s5/${listAnsShortQues[0].code}`,
        key: "s5",
      },
    ],
  },
  {
    title: "Writing",
    listItem: [
      {
        name: "Summarize Written Text",
        link: `summarize_written_text/w1/${listSummarizeText[0].code}`,
        key: "w1",
      },
      {
        name: "Write Essay",
        link: `write_essay/w2/${listWriteEssayText[0].code}`,
        key: "w2",
      },
    ],
  },
  {
    title: "Reading",
    listItem: [
      {
        name: "Reading & Writing：Fill in the blanks",
        link: `read_and_writing/r1/${listReadingAndWriting[0].code}`,
        key: "r1",
      },

      {
        name: "Multiple Choice (Multiple)",
        link: `multiple_choice/r2/${listMultipleChoice[0].code}`,
        key: "r2",
      },
      {
        name: "Re-order Paragraphs",
        link: `reorder/r3/${listReorder[0].code}`,
        key: "r3",
      },
      {
        name: "Reading: Fill in the Blanks",
        link: `read_fill_blanks/r4/${listFillInBlank[0].code}`,
        key: "r4",
      },
      {
        name: "Multiple Choice (Single)",
        link: `single_choice/r5/${listSingleChoice[0].code}`,
        key: "r5",
      },
    ],
  },
  {
    title: "Listening",
    listItem: [
      {
        name: "Summarize Spoken Text",
        link: `summarize_spoken/l1/${listSummarizeSpoken[0].code}`,
        key: "l1",
      },
      {
        name: "Multiple Choice (Multiple)",
        link: `multiple_choice_lis/l2/${listMultipleChoiceLis[0].code}`,
        key: "l2",
      },
      {
        name: "Fill in the Blanks",
        link: `listFillBlanks/l3/${listFillBlanks[0].code}`,
        key: "l3",
      },
      {
        name: "Highlight Correct Summary",
        link: `highlight_correct/l4/${listHighlightCorrect[0].code}`,
        key: "l4",
      },
      {
        name: "Multiple Choice (Single)",
        link: `single_choice_lis/l5/${listSingleChoiceLis[0].code}`,
        key: "l5",
      },

      {
        name: "Select Missing Word",
        link: `select_missing/l6/${listSelectMissing[0].code}`,
        key: "l6",
      },

      {
        name: "Highlight Incorrect Words",
        link: `highlight_incorrect/l7/${listHighlightIncorrect[0].code}`,
        key: "l7",
      },
      {
        name: "Write From Dictation",
        link: `write_from_dictation/l8/${listWriteFromDictation[0].code}`,
        key: "l8",
      },
    ],
  },
];

// menuList.map((list) => {
//   return list.listItem.map((item) => {
//     const routerLink = practiceRouter.filter(route => route.id === item.key)[0].path
//     item.link = routerLink
//     return item
//   })
// })

export default menuList;
