import { 
  listReadAloud,
  listRepeatSentence,
  listRetellLecture,
  listDescribeImage,
  listAnsShortQues,
} from "../../../../data/speakingTestExam"
export const speakingIntro = [
{
  title: "Read Aloud",
  sections: [
    {
      name: "About",
      text: "This question type is the 1st one in the Speaking Section. Test takers will see a textual passage before they are given 40 seconds for preparation and another 40 seconds for reading the passage aloud, and their responses will be recorded only once. This question type usually consists of 6 or 7 questions."
	}, 
    {
      name: "Tips",
      text: `This question type is the most difficult one in the Speaking Section, on which test takers are the least likely to achieve improvement. The techniques in this question type even underlie those in other ones.
	Grading of RA covers assessments of test takers’ pronunciation and fluency. However, pronunciation here means much more than correctness and smoothness.
	Pearson will put many subtle details into assessment: stress, liason, loss of plosion and division of sense group.
	`},
    {
      name: "Time Span",
      text: "The maximum time length for response recording is 40 seconds and when speaking with a normal pace 20 to 30 seconds will be enough for a complete response. If it takes a test taker 40 seconds to finish his or her response, it indicates that he or she has spoken too slowly, and his or her grade in this question type will be rather low."},
    {
      name: "Practice Goal",
      text: `WHV: Do well in accordance with the tips taught in the introductory classes and speak smoothly in terms of tone and voice.

	50 points: Errors about pronunciations of word or mis-stressed syllables are acceptable so test takers should not keep fussing over minor details too much, and should bear it to mind: to speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.

	65 points: Errors about pronunciations of word or mis-stressed syllables are acceptable so test takers should not keep fussing over minor details too much, and should bear it to mind: to speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.

	79 points: Errors about pronunciations of word or mis-stressed syllables are acceptable so test takers should not keep fussing over minor details too much, and should bear it to mind: to speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.
	`},
    {
      name: "Practice Task",
      text: "Listen to and repeat RA shadowing samples on a daily basis. And read aloud 3 RA passages chosen by yourself from the question bank of this question type, to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "s1",
  link: `/practice/read_aloud/s1/${listReadAloud[0].code}`, 
},
{
  title: "Repeat Sentence",
  sections: [
    {
      name: "About",
      text: "This question type is the 2nd one in the Speaking Section. Test takers will hear a recording of a single sentence only once, and your response will be recorded only once, too. This question type usually consists of 10 to 12 questions."}, 
    {
      name: "Tips",
      text: `Many test takers, who usually find it difficult to remember the sentences heard in the recordings, will think this question type is about memory, but in fact fluency is of the utmost priority in gaining quick breakthrough in this question type.
	Master Peter’s 258 law is recommended while practicing, in which test takers are required to repeat 20%, 50% or 80% of what they have heard in recordings respectively according to their capabilities and grade goals, and test takers should adopt a step-by-step approach as mentioned below.`},
    {
      name: "Time Span",
      text: "The maximum length of time for recording of response is 9 seconds. If test takers pause for 3 seconds, the microphones will automatically close."},
    {
      name: "Practice Goal",
      text: `WHV: The 258 Law, assuring 20% of what is heard repeated, and speaking without hesitation.

	50 points: At least two words are repeated for each sentence, and if possible, 3 or 4 words are preferred. No hesitation or stiffness.

	65 points: At least a half of what is heard is repeated for each sentece. No hesitation or stiffness.

	79 points: At least a half of what is heard is repeated for each sentece, and if possible, try to make it 80%. No hesitation or stiffness.
	`},
    {
      name: "Practice Task",
      text: "Practice 30 sentences on a daily basis on Apeuni website/APP to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "s2",
  link: `/practice/repeat_sentence/s2/${listRepeatSentence[0].code}`,
},
{
  title: "Describe Image",
  sections: [
    {
      name: "About",
      text: "This question type is the 3rd one in the Speaking Section. Test takers will see a picture( of map, flow chart, table, bar chart, pie chart, line chart, etc.) , and are supposed to deliver a description of what they see in it within 40 seconds after a preparation of 25 seconds. The answer will be recored once. This question type usually consists of 3 or 4 questions."}, 
    {
      name: "Tips",
      text: `Many test takers will think DI is a rather difficult question type, lacking adequate stuff to sustain a reasonable response, but DI is actually the simpliest one in all the speaking question types.

	The question type is not subject to as rigorous grading criteria as most people think, and we have different templates answering to different picture types. These templates can be easily practiced whenever it is convenient, so that test takers can get as familiar with them as possible to garantee their fluence in real tests.`},
    {
      name: "Time Span",
      text: "The maximum length of time for recording of response is 40 second. It is proposed that 30-35 seconds is enough, even 25 seconds for some pictures relatively short of mentionworthy content. The grading of content cares how many key points have been hit rather than the length of response. Do not use up the whole 40 seconds in case responses are yet to be finished by the last second, which means grade loss in fluence."},
    {
      name: "Practice Goal",
      text: `WHV: Do as well as be told in the introductory classes, with premium set on fluence.
  50 points: Try to make the response include a title, items, 2 figures (or 2 portions of content), 2 comparisons, and a conclusion. Stick to fixed sentences in the templates when structuring the whole response. Try to speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.

	65 points: The response should include a title, items, 2 figures (or 2 portions of content), 2 comparisons, and a conclusion. Stick to fixed sentences in the templates when structuring the whole response. Test takers should speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.

	79 points: The response must include a title, items, 2 figures (or 2 portions of content), 2 comparisons, and a conclusion. Stick to fixed sentences in the templates when structuring the whole response. Test takers must speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.

	`},
    {
      name: "Practice Task",
      text: "Practice 10 questions on a daily basis on Apeuni website/ APP to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "s3",
  link: `/practice/describe_image/s3/${listDescribeImage[0].code}`,
},
{
  title: "Retell Lecture",
  sections: [
    {
      name: "About",
      text: "This question type is the 4th one in the Speaking Section. Test takers will hear a lecture of about 1 minute beforethey have 10 seconds for organizing what they have noted down from the lecture and they have 40 seconds for retelling what the lecturer has mainly talked about. Their response will be recorded only once. This question type ususally consists of 1 or 2 questions."}, 
    {
      name: "Tips",
      text: `Many presume the difficulites in RL are of the content, which can not be overcome at all without comprehension of the lecture. However, the fact is that with a mediocre listening comprehension and thus an insufficient understanding of the lecture it is still very likely for test takers to achieve a relatively high grade.
	That is because the key point in answering RL is of fluency, namely, the way test takers organize what their have noted down from the lecture, manage their moods, and their pronunciations stream into the microphones. Comparatively, the grading of content is not so rigorous as those of fluency and pronunciation are.
	`},
    {
      name: "Time Span",
      text: "The maximum time length for response recording is 40 seconds, and 30 to 35 seconds is usually enough for test takers. Note do not use up the whole 40 seconds, which means responses are very likely to fail to end in time before 40 seconds has elapsed, and thus a gratuitous loss of fluency grade"},
    
	{
      name: "Practice Goal",
      text: `WHV: Speak fluently.

	50 points: Do not be obsessed with content in a response, for hitting just 3 or 4 points in a response will be enough. In the case of insufficient understanding of the lecture and failing to note down complete sentences, a note-taking containing just 7 or 8 words will also help, which can be filled into the Less Words Template of RL. The point is still about pronunciation, tone and fluency: test takers try to speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.Note formula sentences should be used to make time to organize responses in the mind. Meanwhile, formula sentenses should be well paced and well pronounced with reasonable tones.

	65 points: Do not be obsessed with content in a response, for hitting just 4 or 5 points in a response will be enough. The point is still about pronunciation, tone and fluency: test takers should speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones. Note formula sentences should be used to make time to organize responses in the mind. Meanwhile, formula sentenses should be well paced and well pronounced with reasonable tones.

	79 points: Do not be obsessed with content in a response, for hitting just 4 or 5 points in a response will be enough. The point is still about pronunciation, tone and fluency: test takers must speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones. Note formula sentences should be used to make time to organize responses in the mind. Meanwhile, formula sentenses should be well paced and well pronounced with reasonable tones.

	`},
    {
      name: "Practice Task",
      text: "Practice 2 to 3 questions on a daily basis on Apeuni website/ APP to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "s4",
  link: `/practice/re-tell_lecture/s4/${listRetellLecture[0].code}`,
},
{
  title: "Answer Short Question",
  sections: [
    {
      name: "About",
      text: "This question type is the 5th one in the Speaking Section. Test takers will be asked with a question about common sense, and are supposed to answer just one word or a very simple phrase. This question type ususally consist of 5 to 6 questions."}, 
    {
      name: "Tips",
      text: "Do not hesitate in answering for this question type’s points just account for a very trivial proportion in the Speaking Section. If rich in time, just occasionally flick through them in the question bank; or otherwise, just skip this question type during PTE preparation."
    },
    {
      name: "Time Span",
      text: "The maximum time length for response recording is 15 seconds. If test takers pause for 3 seconds during response recording, the microphones will close."
    }, 
	  {
      name: "Practice Goal",
      text: `WHV: Speak fluently.

	50 points: Do not be obsessed with content in a response, for hitting just 3 or 4 points in a response will be enough. In the case of insufficient understanding of the lecture and failing to note down complete sentences, a note-taking containing just 7 or 8 words will also help, which can be filled into the Less Words Template of RL. The point is still about pronunciation, tone and fluency: test takers try to speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones.Note formula sentences should be used to make time to organize responses in the mind. Meanwhile, formula sentenses should be well paced and well pronounced with reasonable tones.

	65 points: Do not be obsessed with content in a response, for hitting just 4 or 5 points in a response will be enough. The point is still about pronunciation, tone and fluency: test takers should speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones. Note formula sentences should be used to make time to organize responses in the mind. Meanwhile, formula sentenses should be well paced and well pronounced with reasonable tones.

	79 points: Do not be obsessed with content in a response, for hitting just 4 or 5 points in a response will be enough. The point is still about pronunciation, tone and fluency: test takers must speak in a smooth, consistent and mild fashion with a moderate pace and without monotonous or over-stressed tones. Note formula sentences should be used to make time to organize responses in the mind. Meanwhile, formula sentenses should be well paced and well pronounced with reasonable tones.

	`},
    {
      name: "Practice Task",
      text: "Practice 2 to 3 questions on a daily basis on Apeuni website/ APP to meet the requirements corresponding to a specific grade section."
    }
  ],
  id: "s5",
  link: `/practice/answer_short_question/s5/${listAnsShortQues[0].code}`,
}

]