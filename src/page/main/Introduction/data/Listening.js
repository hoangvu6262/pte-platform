import {
  listSummarizeSpoken,
  listMultipleChoiceLis,
  listFillBlanks,
  listSingleChoiceLis,
  listSelectMissing,
  listHighlightIncorrect
} from '../../../../data/listeningTestExam'

export const listeningIntro = [
{
  title: "Summarize Spoken Text",
  sections: [
    {
      name: "About",
      text: "Test takers will usually hear a lecture / dialogue（60s - 90s）before they are required to write a summary of what they have just heard. The word limit is 50 to 70 words. 10 minutes are given for each question. In exam, there are 1 to 2 SST questions."
    }, 
    {
      name: "Tips",
      text: "SST is actually a very simple question type in PTE. Many test takers will probably be daunted by SST, thinking without comprehension of the whole lecture/dialogue it is impossible to deliver a response. However, in SST grading content just accounts for 2 points out of the total 10 points, which means if only some single words or fragments are heard and written down the points of content will not be 0. Also, good application of the templates, correct grammar and spelling can assure the remaining 8 points, which is already enough for the 79-point level. "
    },
    {
      name: "Time Span",
      text: "In real tests SST’s time length is 10 minutes( with audio playing combined in). For each SST task, finishing a response with less than 10 minutes can not mean an addition to next question’s time length for the response. Therefor there is no need to rush, and responses should be carefully checked by test takers."},
    {
      name: "Practice Goal",
      text: `WHV: This is not worthy of attention for test taker targeting at WHV.

        50 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

        65 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

        79 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.
        `
    },
    {
      name: "Practice Task",
      text: "Get familiar with the tips and the temlates taught in the introductory classes. Before mock/ real tests, practice 5 or 6 tasks. Make sure to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "l1",
  link: `/practice/summarize_spoken/l1/${listSummarizeSpoken[0].code}`,
},

{
  title: "Listening Multiple Choices Multiple Answers",
  sections: [
    {
      name: "About",
      text: "Test takers will usually hear a lecture/dialogue（40s-90s）before required to accordingly choose 2 or 3 correct answers from given 5 to 7 options. For each wrongly selected option there will be 1 point deducted unless this deduction will make the score of this task below 0. This question type usually consists of 1 or 2 tasks."
    }, 
    {
      name: "Tips",
      text: "Multiple-choice-multiple-answer questions account for a insignificant amount of points in the Listening Section, so they deserve a very low priority in preparation for PTE. Before each audio is played, start reading what is asked and then listen to the audio in a targeted way, which will help to get key information answering to the question. According to the grading of this question type test takers achieve 1 point for each correct selection and lose 1 point for each wrong selection. So, do not select more than you are certain of. On the other hand at least 1 option should be chosen."
    },
    {
      name: "Time Span",
      text: "Multiple-choice-multiple-answer questions account for a insignificant amount of points in the Listening Section, so finish them as quick as possible, leaving more time to more worthy WFD. If sure to answer correctly, can spend 1.5 minutes at most in each question( with audio playing combined in). If not, do not spend too much time here, just make a rough choice immediately after the audio playing and enter next task."},
    {
      name: "Practice Task",
      text: "Before mock/ real tests, practice 1 whole set of questions to get familiar with them. And pay attention to time management."
    }
  ],
  id: "l2",
  link: `/practice/multiple_choice_lis/l2/${listMultipleChoiceLis[0].code}`,
},

{
  title: "Fill in Blank (R & W)",
  sections: [
    {
      name: "About",
      text: "Test takers will usually hear a audio clip and see a textual passage with blanks, beforerequired to write a correct word down in each blank according to the audio clip. This question type usually consists of 2 or 3 tasks."
    }, 
    {
      name: "Tips",
      text: `SLFIB, one of the key question types in the Listening Section, deserves great effort to guarantee correctness rate..
	In real tests, intervals between two blanks are usually very small, so shorten your typing and keep up with the audio. Thus there is no need to type the word completely once your hear it, because you can take your time to finish it after the audio ends.
	Note: Press the key of Tab to quickly jump to next blank.
	`
    },
    {
      name: "Time Span",
      text: "Despite LFIB’s significance in terms of points in the Listening Section, do not spend too much time in it, 2 minutes at most for each task."},
    {
      name: "Practice Goal",
      text: `WHV: This is not worthy of attention for test taker targeting at WHV.

		50 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

		65 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

		79 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.
	`
    },
    {
      name: "Practice Task",
      text: "Get familiar with the tips and the temlates taught in the introductory classes. Before mock/ real tests, practice 5 or 6 tasks. Make sure to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "l3",
  link: `/practice/listFillBlanks/l3/${listFillBlanks[0].code}`,
},
{
  title: "Multiple Choices Single Answer Listening",
  sections: [
    {
      name: "About",
      text: "Test takers will usually hear a lecture/dialogue（60s-90s）before required to accordingly choose a solely correct answer from given options. This question type usually consists of 1 or 2 tasks."
    }, 
    {
      name: "Time Span",
      text: "Multiple-choice-single-answer questions account for an insignificant amount of points in the Listening Section, so finish them as quick as possible, leaving more time to more worthy WFD. If sure to answer correctly, can spend 1.5 minutes at most in each question( with audio playing combined in). If not, do not spend too much time here, just make a rough choice immediately after the audio playing and enter next"
    },
    {
      name: "Practice Goal",
      text: "Practice Goal Multiple-choice-single-answer questions account for a insignificant amount of points in the Listening Section, so they deserve a very low priority in preparation for PTE. Before each audio is played, start reading what is asked and then listen to the audio in a targeted way, which will help to get key information answering to the question."
    },
    {
      name: "Practice Task",
      text: "Before mock/ real tests, practice 1 whole set of questions to get familiar with them. And pay attention to time management."
    }
  ],
  id: "l5",
  link: `/practice/single_choice_lis/l5/${listSingleChoiceLis[0].code}`,
},

{
  title: "Select Missing Words",
  sections: [
    {
      name: "About",
      text: "Test takers will usually hear a audio clip and see a textual passage with blanks, beforerequired to write a correct word down in each blank according to the audio clip. This question type usually consists of 2 or 3 tasks."
    }, 
    {
      name: "Tips",
      text: `SLFIB, one of the key question types in the Listening Section, deserves great effort to guarantee correctness rate..
	In real tests, intervals between two blanks are usually very small, so shorten your typing and keep up with the audio. Thus there is no need to type the word completely once your hear it, because you can take your time to finish it after the audio ends.
	Note: Press the key of Tab to quickly jump to next blank.
	`
    },
    {
      name: "Time Span",
      text: "Despite LFIB’s significance in terms of points in the Listening Section, do not spend too much time in it, 2 minutes at most for each task."
    },
    {
      name: "Practice Goal",
      text: `WHV: This is not worthy of attention for test taker targeting at WHV.

		50 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

		65 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

		79 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.
	`
    },
    {
      name: "Practice Task",
      text: "Get familiar with the tips and the temlates taught in the introductory classes. Before mock/ real tests, practice 5 or 6 tasks. Make sure to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "l6",
  link: `/practice/select_missing/l6/${listSelectMissing[0].code}`,
},
{
  title: "Highlight Incorrect Words",
  sections: [
    {
      name: "About",
      text: "Test takers will usually hear a audio clip and see a textual passage with blanks, beforerequired to write a correct word down in each blank according to the audio clip. This question type usually consists of 2 or 3 tasks."
    }, 
    {
      name: "Tips",
      text: `SLFIB, one of the key question types in the Listening Section, deserves great effort to guarantee correctness rate..
	In real tests, intervals between two blanks are usually very small, so shorten your typing and keep up with the audio. Thus there is no need to type the word completely once your hear it, because you can take your time to finish it after the audio ends.
	Note: Press the key of Tab to quickly jump to next blank.
	`
    },
    {
      name: "Time Span",
      text: "Despite LFIB’s significance in terms of points in the Listening Section, do not spend too much time in it, 2 minutes at most for each task."},
    {
      name: "Practice Goal",
      text:  `WHV: This is not worthy of attention for test taker targeting at WHV.

		50 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

		65 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.

		79 points:The assessment on logic in response is very easy. Practice on Apeuni website before self-checking and AI scoring. In all assessment items but content test takers should try to achieve full marks.
	`
    },
    {
      name: "Practice Task",
      text: "Get familiar with the tips and the temlates taught in the introductory classes. Before mock/ real tests, practice 5 or 6 tasks. Make sure to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "l7",
  link: `/practice/highlight_incorrect/l7/${listHighlightIncorrect[0].code}`,
  
},
]