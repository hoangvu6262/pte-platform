import { SummarizeWritten, WriteEssay } from "../page/practice/Writing/";
import {
  ReadAloud,
  RepeatSentence,
  DescribeIamge,
  ReTellLecture,
  AnswerShortQuestion,
} from "../page/practice/Speaking";

import { 
  HighlightCorrectSummary,
  SummarizeSpokenText,
  WriteFromDictation,
  MultipleChoiceListening,
  SingleChoiceListening,
  SelectMissingWord
} from "../page/practice/Listening";

import {
  MultipleChoice as ReadingMultiChoice,
  SigleChoice as ReadingSigleChoice,
} from "../page/practice/Reading";

const speakingRouter = [
  {
    id: "s1",
    path: "read_aloud/:key/:code",
    Component: ReadAloud,
  },
  {
    id: "s2",
    path: "repeat_sentence/:key/:code",
    Component: RepeatSentence,
  },
  {
    id: "s3",
    path: "describe_image/:key/:code",
    Component: DescribeIamge,
  },
  {
    id: "s4",
    path: "re-tell_lecture/:key/:code",
    Component: ReTellLecture,
  },
  {
    id: "s5",
    path: "answer_short_question/:key/:code",
    Component: AnswerShortQuestion,
  },
];

const writingRouter = [
  {
    id: "w1",
    path: "summarize_written_text/:key/:code",
    Component: SummarizeWritten,
  },
  {
    id: "w2",
    path: "write_essay/:key/:code",
    Component: WriteEssay,
  },
];

const readingRouter = [
  {
    id: "r1",
    path: "read_and_writing/:key/:code",
    Component: "",
  },
  {
    id: "r2",
    path: "multiple_choice/:key/:code",
    Component: ReadingMultiChoice,
  },
  {
    id: "r3",
    path: "reorder/:key/:code",
    Component: "",
  },
  {
    id: "r4",
    path: "read_fill_blanks/:key/:code",
    Component: "",
  },
  {
    id: "r5",
    path: "single_choice/:key/:code",
    Component: ReadingSigleChoice,
  },
];

const listeningRouter = [
  {
    id: "l1",
    path: "summarize_spoken/:key/:code",
    Component: SummarizeSpokenText,
  },
  {
    id: "l2",
    path: "multiple_choice_lis/:key/:code",
    Component: MultipleChoiceListening,
  },
  {
    id: "l3",
    path: "fill_blanks/:key/:code",
    Component: "",
  },
  {
    id: "l4",
    path: "highlight_correct/:key/:code",
    Component: HighlightCorrectSummary,
  },
  {
    id: "l5",
    path: "single_choice_lis/:key/:code",
    Component: SingleChoiceListening,
  },
  {
    id: "l6",
    path: "select_missing/:key/:code",
    Component: SelectMissingWord,
  },
  {
    id: "l7",
    path: "highlight_incorrect/:key/:code",
    Component: "",
  },
  {
    id: "l8",
    path: "write_from_dictation/:key/:code",
    Component: WriteFromDictation,
  },
];

export const practiceRouter = [
  ...speakingRouter,
  ...writingRouter,
  ...readingRouter,
  ...listeningRouter,
];
