import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";
import FunctionBar from "../../../../container/FunctionBar";
import Answer from "../../../../container/Answer";

import PageHeader from "../../../../component/PageHeader";
import DictModeModal from "../../../../component/Modal/DictModeModal";
import Paragraph from "../../../../component/Paragraph";
import Button from "../../../../component/Button";
import Timer from "../../../../component/Timer";


import { useSelector } from "react-redux";

import { getTestExamDetail } from "../../../../store/slices/testExam/testExamSlice";
import { useParams } from "react-router-dom";

import { Input, Form } from "antd";

import answerSlices, {
  changeIsSpeaking, 
} from "../../../../store/slices/answer/answerSlice";
import { useDispatch } from "react-redux/es/exports";
const { TextArea } = Input;

const contentParagraph = `Currently, Americans only eat about 16 grams of fiber — the parts of plants that can’t be digested — per day. That’s way less than the 25 to 30 grams that’s recommended.

There are so many reasons why, from fast-food marketing to agriculture subsidies, but one contributing factor is the slow death of cooking, and the rise of the restaurant meal. Americans now spend more on food at restaurants than they do at grocery stores, but restaurant food tends to have even less fiber than the food we would otherwise eat at home.

One problem seems to be that restaurant meals aren’t typically loaded with two of the best sources of fiber, unprocessed fruits and vegetables. A revealing study from 2007, in which researchers interviewed 41 restaurant executives, showed that restaurants think fruits and vegetables are too expensive to feature prominently on the menu, and “61 percent said profits drive menu selections.” They also opposed labeling certain menu items as healthier choices, saying that would be “the kiss of death.”

So people like to eat out, and when they do, they prefer mushy, fiber-free comfort foods. But that’s a pretty dangerous road to go down.`;

const SummarizeWritten = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState('')
  const [form] = Form.useForm();

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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitStatus = useSelector((state) => state.answer.status);

  const formRef = useRef();

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

  const handleCountForm = (text) => {
    if (text === "") {
      setWordCount(0);
    } else {
      const splitedText = text.trim().split(/\s+/);
      setWordCount(splitedText.filter((word) => word !== " ").length);
      setText(text)
    }
  };
  
  useEffect(() => {
    dispatch(answerSlices.actions.updateAnswering(text));
  }, [text, dispatch])

  const handleRedo = () => {
    console.log(formRef.current);
    formRef.current.resetFields();
    setWordCount(0);
  };

  return (
    <div>
      <div className="practise-body writing">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/ra_s_ai.png"
          title="Summarize Written Text"
          chip="Study Guide"
          linkGuide={`/intro/${key}`}
          idExercise={testExamDetail.name}
          content="Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud."
        />
        <Timer time={1200} title="Time: " key="Time: " overtime={true} /> 
        <div className="practise-body__paragraph writing-paragraph">
          <Paragraph content={contentParagraph} />
        </div>
        <div className="practise-body__progress"></div>
        <div className="practise-body__body">
          <Form
            form={form}
            autoComplete="off"
            className={`writing-form ${isSubmitted ? "disabled" : ""}`}
            onChange={(values) => {
              handleCountForm(values.target.value);
            }}
            disabled={isSubmitted}
            ref={formRef}
          >
            <Form.Item name="writing">
              <TextArea rows={12} />
            </Form.Item>
            {isSubmitted && (
              <div className="writing-form-redo">
                <Button outline={true} onClick={() => {dispatch(answerSlices.actions.redoAnswering())}}>
                  Re-do
                </Button>
              </div>
            )}
          </Form>
        </div>
        <div className="writing-word-count">Word Count: {wordCount}</div>

        <FunctionBar
          // isSubmit={wordCount === 0 || submitStatus === 3}
          toggleAnswer={() => setisAnswerVisible(!isAnswerVisible)}
          openModal={() => {
            openModal();
          }}
        />
        {isAnswerVisible && <Answer />}
        <DictModeModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          content={contentParagraph}
        />
      </div>
    </div>
  );
};

export default SummarizeWritten;
