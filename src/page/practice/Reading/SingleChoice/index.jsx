import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";
import FunctionBar from "../../../../container/FunctionBar";
import Answer from "../../../../container/Answer";

import PageHeader from "../../../../component/PageHeader";
import DictModeModal from "../../../../component/Modal/DictModeModal";
import Paragraph from "../../../../component/Paragraph";
import Timer from "../../../../component/Timer";  

import { getTestExamDetail } from "../../../../store/slices/testExam/testExamSlice";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { Radio } from 'antd';

import answerSlices, {
  changeIsSpeaking
} from "../../../../store/slices/answer/answerSlice";
import { useDispatch } from "react-redux/es/exports";

const contentParagraph = 
`Social distancing, also called physical distancing, refers to staying a specific distance away from other people to help prevent illnesses from spreading. The specific distance is determined by health experts and national governments, and social distancing is a recommended medical practice to help “flatten the curve,” or lower the number of COVID-19 cases throughout the world. With all the misinformation online, take a few minutes to review how to understand social distance and learn why it’s so important to help stop COVID-19. If you need help explaining social distancing to children, you can use the information below to help make social distancing easier for kids to understand.

The passage is an excerpt from a longer essay. According to the last sentence, what may the remaining part of the essay be about?`;

const options = [
  {
    value: 'A',
    label: 'A) More detailed professional information on the mechanisms of social distancing.'
  },
  {
    value: 'B',
    label: 'B) A more simplified and interesting description about social distancing.'
  },
  {
    value: 'C',
    label: 'C) Experimental evidence about the effectiveness of social distancing.'
  },
  {
    value: 'D',
    label: "D) The latest news about COVID-19 cases worldwide."
  },
]

const renderOption = () => {
  let paragraph = ``
  for(let i = 0; i < options.length; i++) {
    paragraph += options[i].label + '\n'
  }
  return paragraph
}

const dictModeContent = 
`${contentParagraph}
  Choices:
  ${renderOption()}`

const SigleChoice = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [radioValue, setRadioValue] = useState()

  const radioRef = useRef()
  const dispatch = useDispatch();

  const { key, code } = useParams();

  const { content } = useSelector((state) => state.answer);
  const { testExamDetail } = useSelector((state) => state.testExam);

  useEffect(() => {
    dispatch(getTestExamDetail({ key, code }));
    dispatch(answerSlices.actions.redoAnswering());
  }, [key, code]);

  useEffect(() => {
    dispatch(changeIsSpeaking(false));
    dispatch(answerSlices.actions.redoAnswering())
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitStatus = useSelector((state) => state.answer.status);

  useEffect(() => {
    if (submitStatus === 3) {
      setIsSubmitted(true);
    } else if (submitStatus === 1) {
      handleRedo()
      setIsSubmitted(false)
    } 
    else {
      setIsSubmitted(false);
    }
  }, [submitStatus]);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleRedo = () => {
    setRadioValue()
  };

  const handleCheckbox = (e) => {
    setRadioValue(e.target.value)
  }

  useEffect(() => {
    dispatch(answerSlices.actions.updateAnswering(radioValue))
  }, [radioValue, dispatch])

  return (
    <div>
      <div className="practise-body reading">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/mcs_r_v2.png"
          title="Multiple Choice (Single)"
          chip="Study Guide"
          linkGuide={`/intro/${key}`}
          idExercise={testExamDetail.name}
          content="Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct."
        />
        <Timer time={600} title="Time: " key="Time: " overtime={true} /> 
        <div className="practise-body__paragraph reading-paragraph">
          <Paragraph content={contentParagraph} />
        </div>
        <Radio.Group ref={radioRef} options={options} disabled={submitStatus === 3} value={radioValue} onChange={handleCheckbox}></Radio.Group>
        <FunctionBar
          toggleAnswer={() => setisAnswerVisible(!isAnswerVisible)}
          openModal={() => {
            openModal();
          }}
        />
        {isAnswerVisible && <Answer answer="B"/>}
        <DictModeModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          content={dictModeContent}
        />
      </div>
    </div>
  );
};

export default SigleChoice;
