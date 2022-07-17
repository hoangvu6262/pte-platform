import { 
  listReadingAndWriting, 
  listMultipleChoice, 
  listReorder, 
  listFillInBlank, 
  listSingleChoice 
} from "../../../../data/readingTestExam"

export const readingIntro = [
  {
    title: "Fill in Blank (R & W)",
    sections: [
      {
        name: "About",
        text: "This question type is usually the 4th one in the Reading Section. Test takers will see a textual passage of 300 or so words containing several blanks.Each blank has a drop-down word list with 4 options in it, and test takers are required to choose the most suitable option from each drop-down list for each blank.This question type usually consists of 5 or 6 tasks.."
      }, 
      {
        name: "Tips",
        text: "TThis question type also accounts for a significant proportion in the Reading Section, and test takers must achieve enough points in it. FIBRW is a little more difficult than FIBR, as options in each drop-down list are all the same in terms of part of speech, to which test takers are unable to apply grammar clues. Learn to find main structures of sentences, and overlook trivial details， so that despite some unknown words you can still get the main points of the sentences and choose the correct options.In real tests this question type varies in terms of difficulty, so test takers should develop a good sense of timing, avoiding spending too much time in a rather difficult task and thus straining the time for following relatively easy tasks."
      },
      {
        name: "Time Span",
        text: "FIBRW accounts for a significant proportion in the Reading Section in terms of points. And difficulty of this question type varies in real tests, so test takers should develop a good sense of timing, avoiding spending too much time in a rather difficult task and thus straining the time for following relatively easy tasks. 2 minutes, at most, is recommended for each task."
      },
      {
        name: "Practice Goal",
        text: `WHV: Try to achieve a correctness rate of 2/5. Students with limited vocabularies (less than 4000 words) need to memorize words. We have a particular word-memorizing function in our website and application. We recommend you to memorize all the words from PTE Basic Vocab, suitable for the target scores from 30 to 65.
  
    50 points: For each task, try to achieve a correctness rate of 50% or above, and limit errors within 2.
  
    65 points: For each task, try to limit errors to 1, never above 2; or on average within 1.5 errors for each 5 blanks.
  
    79 points: Try to limit errors within 1 for each task.
    `
      },
      {
        name: "Practice Task",
        text: "Practice 15 FIBR&FIBRW tasks in a way of intensive reading. Make sure to understand the paragraphs, and understand why the word is selected for each blank. If you cannot understand the passage, your correctness rate is sure to be below the expectation. Making sure to meet the requirements corresponding to a specific grade section."
      }
    ],
    id: "r1",
    link: `/practice/read_and_writing/r1/${listReadingAndWriting[0].code}`,
  },
{
  title: "Reading Multiple Choices Multiple Answers",
  sections: [
    {
      name: "About",
      text: "Test takers will see a textual passage of 200 to 300 words, together with a question and 5 to 7 choices, and are required to answer the question by choosing the correct choice according to the passage. This question type usually consists of 1 or 2 questions."
    }, 
    {
      name: "Tips",
      text: "PTE questions with multiple choices and a single answer account for a very small proportion in the overall score, so they just deserve relatively a low priority in preparing PTE tests. The utmost importance is the time management, making sure to complete a question of this type within 1 or 2 minutes, because any excess use of time here will probably put a strain on the necessary time for those ensuing time-consuming, important questions( FIB).In questions of multiple answer, test takers achieve 1 point for 1 correct choice, lose 1 point for 1 uncorrect choice, and get 0 point for no choice. So, unless very sure, do not make more than one choice in answering each question of this type."
    },
    {
      name: "Time Span",
      text: "All questions in the Reading Section share one single timer, so the more time consumed in one question, the less time allowed in other ones. Test takers had better make their responses in this question type as quick as possible in order to leave enough time for following FIB questions which account for much more. If a test taker is very sure in answering a specific question correctly, he or she can spend at most 1.5 minutes in it. For those who are unsure, each question of this type should take up at most 1 minute for just a rough selection among the given choices"
    },
    {
      name: "Practice Task",
      text: "Before mock/ real tests, practice a complete set of questions in the Reading Section to get familiar with them and the time management."
    }
  ],
  id: "r2",
  link: `/practice/multiple_choice/r2/${listMultipleChoice[0].code}`,
},
{
  title: "Re-order Paragraphs",
  sections: [
    {
      name: "About",
      text: "Usually this question type is the 3rd one in the Reading Section. Test takers will see a textual passage consisting of shuffled paragraphs,and this question type usually consists 2 or 3 questions."
    }, 
    {
      name: "Tips",
      text: "This is the most difficult question type in the Reading Section. This type has its own tips, like trying to find pronouns，etc.，but what underlies answering this question type is a test taker’s ordinarily accumulated reading experience and language sense. Without a very strong reading comprehension, it is difficult to gain a full mark in this question type."
    },
    {
      name: "Time Span",
      text: "RO is a question type of low cost performance, with many points and a disproportionately high degree of difficulty. If very sure to make a correct response, a test taker can spend at most 2 minutes for each question. For those who are unsure, there is no need to spend more than 1.5 minutes for each question, and a rough response will be enough, leaving more time to following FIB questions."
    },
    {
    	name: "Practice Goal",
    	text: `WHV: Just skip this question type in preparation for PTE.

	50 points: Just skip this question type in preparation for PTE.

	65 points: Take the approach of pronoun/ logic/ chronological order, and any points achieved will work.

	79 points: Take the approach of pronoun/ logic/ chronological order, and 2 points achieved for each question will work.
	.
	`
    },
    {
      name: "Practice Task",
      text: "If unable to achieve 2 points in each question, practice FIB questions first, which can improve your comprehension for this question type in return. Do not stick to this question type before you have practiced FIB sufficiently, and make sure to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "r3",
  link: `/practice/reorder/r3/${listReorder[0].code}`,
},
{
  title: "Fill in Blank (R)",
  sections: [
    {
      name: "About",
      text: "Introduction of the Question Type	This question type is usually the 1st one in the Reading Section.Test takers will see 4 or 5 textual passages, 80 or so words with 3 to 5 blanks and 6 to 8 choices listed below.Test takers are required to use grammar clues, choose correct words and drag them into correct blanks."
    }, 
    {
      name: "Tips",
      text: `This question type accounts for a significant proportion in the Reading Section in terms of points. To improve correctness of responses, try to:
	1. Learn to use grammar clue;
	2. Lay a foundation of vocabulary(for 65 points: CET-4 or above; for 79 points: CET-6 or above);
	3. Enhance reading comprehension.
	In real tests this question type varies in terms of difficulty, so test takers should develop a good sense of timing, avoiding spending too much time in a rather difficult task and thus straining the time for following relatively easy tasks.
	Time Span
	FIBR accounts for a significant proportion in the Reading Section in terms of points. And difficulty of this question type varies in real tests, so test takers should develop a good sense of timing, avoiding spending too much time in a rather difficult task and thus straining the time for following relatively easy tasks. 2 minutes, at most, is recommended for each task.
	`
    },
    {
      name: "Time Span",
      text: "FIBR accounts for a significant proportion in the Reading Section in terms of points. And difficulty of this question type varies in real tests, so test takers should develop a good sense of timing, avoiding spending too much time in a rather difficult task and thus straining the time for following relatively easy tasks. 2 minutes, at most, is recommended for each task."
    },
    {
    	name: "Practice Goal",
    	text: `WHV: Try to achieve a correctness rate of 2/5. Students with limited vocabularies (less than 4000 words) need to memorize words. We have a particular word-memorizing function in our website and application. We recommend you to memorize all the words from PTE Basic Vocab, suitable for the target scores from 30 to 65.

	50 points: For each task, try to achieve a correctness rate of 50% or above, and limit errors within 2.

	65 points: For each task, try to limit errors to 1, never above 2; or on average within 1.5 errors for each 5 blanks.

	79 points: Try to limit errors within 1 for each task.
	`
    },
    {
      name: "Practice Task",
      text: "Practice 15 FIBR&FIBRW tasks in a way of intensive reading. Make sure to understand the paragraphs, and understand why the word is selected for each blank. If you cannot understand the passage, your correctness rate is sure to be below the expectation. Making sure to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "r4",
  link: `/practice/read_fill_blanks/r4/${listFillInBlank[0].code}`,
},

{
  title: "Reading Multiple Choices Single Answer",
  sections: [
    {
      name: "About",
      text: "Test takers will see a textual passage of 100 words, together with a question and some choices, and are required to answer the question by choosing the correct choice according to the passage. This question type usually consists of 1 or 2 questions."
    }, 
    {
      name: "Tips",
      text: "PTE questions with multiple choices and a single answer account for a very small proportion in the overall score, so they just deserve relatively a low priority in preparing PTE tests. The utmost importance is the time management, making sure to complete a question of this type within 1 or 2 minutes, because any excess use of time here will probably put a strain on the necessary time for those ensuing time-consuming, important questions( FIB).There is one question for each MCS, and test takers should read through the passage and figure out its main points within 1 or 2 minutes."
    },
    {
      name: "Time Span",
      text: "All questions in the Reading Section share one single timer, so the more time consumed in one question, the less time allowed in other ones. Test takers had better make their responses in this question type as quick as possible in order to leave enough time for following FIB questions which account for much more. If a test taker is very sure in answering a specific question correctly, he or she can spend at most 1.5 minutes in it. For those who are unsure, each question of this type should take up at most 1 minute for just a rough selection among the given choices."
    },
    {
      name: "Practice Task",
      text: "Before mock/ real tests, practice a complete set of questions in the Reading Section to get familiar with them and the time management."
    }
  ],
  id: "r5",
  link: `/practice/single_choice/r5/${listSingleChoice[0].code}`,
},

]