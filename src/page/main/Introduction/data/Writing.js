import {
  listSummarizeText,
  listWriteEssayText
} from "../../../../data/writingTestExam"

export const writingIntro = [
  {
  title: "Summarize Written Text",
  sections: [
    {
      name: "About",
      text: "SWT is the 1st one in the Writing Section. Test takers will see a textual passage before they are given 10 minutes to write down their one-sentence summaries of the text. The word limit of the response is 5 - 75. In exam, there are 1 to 2 questions of SWT."
    }, 
    {
      name: "Tips",
      text: `SWT is a very simple question type. There are two keys in answering: to find key points in the passage; to connect the key points into a grammarly correct sentence.
	When searching for key points, we can use the Elimination Approach. Examples and explanatory sentences should be eliminated and the key points can be found within the remaining sentences. When connecting the key points, make sure correct conjunctions are used. For example, the frequently used word ‘however’ is not a conjunction. ‘I love my teacher, however I don't want to go to school.’ is a grammarly incorrect sentence.
	`
    },
    {
      name: "Time Span",
      text: "The maximum time given for each SWT question is 10 minutes. It is an individually timed task, meaning that finishing this question sooner or later will not impact the time alloted to other tasks. Therefore, there is no need to rush, and responses should be carefully checked before submission."},
    {
    	name: "Practice Goal",
    	text: `WHV: Only use the conjunctive words given in the APEUni's SWT template to connect sentences copied from the original text. Pay attention to grammar and spelling.

	50 points: Only use the conjunctive words given in the APEUni's SWT template. Pay attention to grammar and spelling. It is enough to have 3 or 4 points in the answer. Try to score full marks while practicing on APEUni's website.

	65 points: Only use the conjunctive words given in the APEUni's SWT template. Pay attention to grammar and spelling. It is enough to have 3 or 4 key points in the answer. Try to score full marks while practicing on APEUni's website.

	79 points: Only use the conjunctive words given in the APEUni's SWT template. Pay attention to grammar and spelling. It is enough to have 3 or 4 key points in the answer. Try to score full marks while practicing on APEUni's website.

	`
    }
  ],
  id: "w1",
  link: `/practice/summarize_written_text/w1/${listSummarizeText[0].code}`,
},
{
  title: "Write Essay",
  sections: [
    {
      name: "About",
      text: "This question type is the 2nd one in the Writing Section. Test takers are required to write an essay of a given topic within 20 minutes. The response should be within 200 to 300 words (inclusive). This question type usually consists of 1 or 2 questions"
    }, 
    {
      name: "Tips",
      text: `Essay is the main reason why many students are switching from IELTS to PTE. It has become increasingly hard to score high in writing in IELTS. Nevertheless, essay writing is one of the easiest tasks in PTE.
	According to APEUni's teaching team's continuous tests and feedback, PTE's scoring algorithm has yet to penalize students on the usage of templates. The usage of templates allow students write very few sentences by themselves, and use most sentences from the template which are grammatically correct and rich in vocabulary.
	APEUni's essay template has been used by thousands of students and helped them achieve 79+ scores in writing. (Note: high scores in essays alone will not guarantee a high score in the overall writing score, because reading FIB (R&W) and listening WFD also contribute a great part to the overall writing score.)
"
    },
    {
      name: "Time Span",
      text: "The maximum time length for an Essay task is 20 minutes. It is an individually timed task, meaning that finishing this question sooner or later will not impact the time alloted to other tasks. Therefore, there is no need to rush, and responses should be carefully checked before submission.
	`},
    {
    	name: "Practice Goal",
    	text:  `WHV: Familiarize with the templates, and making sure that you are able to finish the essay within 20 minutes. You may use the AI scoring in APEUni's website to help check your essays, especially for spelling or grammar mistakes.

	50 points: Familiarize with the templates, and making sure that you are able to finish the essay within 20 minutes. You should score full marks while using APEUni's essay AI scoring.

	65 points: Familiarize with the templates, and making sure that you are able to finish the essay within 20 minutes. You should score full marks while using APEUni's essay AI scoring.

	79 points: Familiarize with the templates, and making sure that you are able to finish the essay within 20 minutes. You should score full marks while using APEUni's essay AI scoring.

	`
    }
  ],
  id: "w2",
  link: `/practice/write_essay/w2/${listWriteEssayText[0].code}`,
}
]