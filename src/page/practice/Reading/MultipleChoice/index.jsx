import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

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

import { Checkbox } from 'antd';

import answerSlices, {
  changeIsSpeaking
} from "../../../../store/slices/answer/answerSlice";
import { useDispatch } from "react-redux/es/exports";

const contentParagraph = 
`A protein named Agrin has been discovered to promote wound healing and repair, when it is triggered after skin tissue is injured. These findings could pave the way for the development of Agrin protein therapy to accelerate skin tissue healing for chronic wounds from diabetes or burns. The research, led by A*STAR's Institute of Molecular and Cell Biology (IMCB), was published in the journal Nature Communications on 3 November 2021.

One in 20 Singaporeans is afflicted with chronic wound conditions. Complications in the healing of chronic wounds are prevalent in patients suffering from diabetes or burn injuries, and are a leading cause of amputation and decreased emotional well-being for patients. During injury, a major chunk of extracellular matrix, which helps to rebuild tissue, is lost, therefore delaying wound healing. As such, the timely replenishment of key ECM proteins may accelerate wound healing.

In this study, researchers have shown that timely induction or exogenous supplementation of Agrin, an ECM protein, may promote accelerated healing of injured skin tissues. Using both human and pre-clinical models, they found that physical injury to the skin tissue enhanced the expression of Agrin, which preserves the mechanical architecture of injured skin layers by repairing the skin tissue.

Which of the following statements is incorrect?`;

const options = [
  {
    value: 'A',
    label: 'A) Agrin can heal the wound instantly.'
  },
  {
    value: 'B',
    label: 'B) Loss of ECM can delay wound healing.'
  },
  {
    value: 'C',
    label: 'C) The expression of Agrin was enhanced when skin tissue was physically damaged.'
  },
  {
    value: 'D',
    label: "D) Chronic wound healing complications were the main reason for the decline of patients' emotional health."
  },
  {
    value: 'E',
    label: 'E) One in 20 Singaporeans suffers from diabetes or burns.'
  }

  
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
  ${renderOption()}
`


const MultipleChoice = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [checkList, setCheckList] = useState([])
  
  
  const { key, code } = useParams();

  const { content } = useSelector((state) => state.answer);
  const { testExamDetail } = useSelector((state) => state.testExam);

  useEffect(() => {
    dispatch(getTestExamDetail({ key, code }));
    dispatch(answerSlices.actions.redoAnswering());
  }, [key, code]);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeIsSpeaking(false));
    dispatch(answerSlices.actions.redoAnswering())
  }, []);

  const submitStatus = useSelector((state) => state.answer.status);

  useEffect(() => {
    if (submitStatus === 1) {
      setCheckList([])
    }
  }, [submitStatus])

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleCheckbox = (value) => {
    setCheckList(value)
  }
  
  useEffect(() => {
    dispatch(answerSlices.actions.updateAnswering(checkList.join(' ,')))
  }, [checkList, dispatch])

  return (
    <div>
      <div className="practise-body reading">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/mcm_r_v2.png"
          title="Multiple Choice (Multiple)"
          chip="Study Guide"
          linkGuide={`/intro/${key}`}
          idExercise={testExamDetail.name}
          content="Read the text and answer the question by selecting all the correct responses. More than one response is correct."
        />
        
        <Timer time={600} title="Time: " key="Time: " overtime={true} /> 

        <div className="practise-body__paragraph reading-paragraph">
          <Paragraph content={contentParagraph} />
        </div>
        <Checkbox.Group value={checkList} disabled={submitStatus === 3} options={options} onChange={handleCheckbox}></Checkbox.Group>
        <FunctionBar
          toggleAnswer={() => setisAnswerVisible(!isAnswerVisible)}
          openModal={() => {
            openModal();
          }}
        />
        {isAnswerVisible && <Answer answer="A, E"/>}
        <DictModeModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          content={dictModeContent}
        />
      </div>
    </div>
  );
};

export default MultipleChoice;
