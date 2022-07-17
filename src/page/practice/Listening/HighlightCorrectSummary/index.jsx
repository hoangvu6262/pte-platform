import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";
import FunctionBar from "../../../../container/FunctionBar";
import Answer from "../../../../container/Answer";

import PageHeader from "../../../../component/PageHeader";
import DictModeModal from "../../../../component/Modal/DictModeModal";
import Paragraph from "../../../../component/Paragraph";
import Timer from "../../../../component/Timer";  
import CustomAudio from "../../../../component/CustomAudio";

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

The passage is an excerpt from a longer essay.`;

const options = [
  {
    value: 'A',
    label: 'A) Romance can be a part of a relationship, but it’s not everything. Healthy communication, equality and trust are all very important in a relationship.'
  },
  {
    value: 'B',
    label: 'B) Romance can signify a lot of passion, but people will eventually get tired in a relationship, especially when it has lasted for a long time. So it’s important that we should always find something new, to make the relationship fresh.'
  },
  {
    value: 'C',
    label: 'C) Romance consists of many things, including communication, equality and trust. Without these great characteristics, romance cannot survive within a relationship.'
  },
  {
    value: 'D',
    label: 'D) Romance mainly exists in the movies, and we don’t often see it in our daily life. This is because it can cause more chaos and instability than passion, which is not healthy for a relationship.'
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

const SigleChoiceListening = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [radioValue, setRadioValue] = useState()
  const [isPlaying, setIsPlaying] = useState(true);  

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
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/hcs_l_v2.png"
          title="Highlight Correct Summary"
          chip="Study Guide"
          linkGuide={`/intro/${key}`}
          idExercise={testExamDetail.name}
          content="You will hear a recording. Click on the paragraph that best relates to the recording."
        />
        <Timer time={600} title="Time: " key="Time: " overtime={true} /> 
        <div className="practise-body__audio">
          <CustomAudio
            audioSrc="https://basicenglishspeaking.com/wp-content/uploads/audio/QA/QA-14.mp3?_=1"
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>
        <div className="practise-body__paragraph reading-paragraph">
          <Paragraph content="Click on the paragraph that best relates to the recording." />
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

export default SigleChoiceListening;
