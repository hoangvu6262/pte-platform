import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";
import FunctionBar from "../../../../container/FunctionBar";
import Answer from "../../../../container/Answer";

import PageHeader from "../../../../component/PageHeader";
import DictModeModal from "../../../../component/Modal/DictModeModal";
import Paragraph from "../../../../component/Paragraph";
import Button from "../../../../component/Button";
import Timer from "../../../../component/Timer";

import { getTestExamDetail } from "../../../../store/slices/testExam/testExamSlice";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { Input, Form } from "antd";

import answerSlices, {
  changeIsSpeaking,
} from "../../../../store/slices/answer/answerSlice";
import { useDispatch } from "react-redux/es/exports";
const { TextArea } = Input;

const contentParagraph = "Some people think traditional cultures should be strictly followed, while others think modern people should adopt a new way of life. What is your opinion?"
const WriteEssay = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      dispatch(answerSlices.actions.updateAnswering(text));
      setText(text)
    }
  };

  useEffect(() => {
    dispatch(answerSlices.actions.updateAnswering(text));
  }, [text, dispatch])

  const handleRedo = () => {
    formRef.current.resetFields();
    setWordCount(0);
  };

  return (
    <div>
      <div className="practise-body writing">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/we_w_ai.png"
          title="Write Essay"
          chip="Study Guide"
          linkGuide={`/intro/${key}`}
          idExercise={testExamDetail.name}
          content="You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200-300 words."
        />
        <Timer time={600} title="Time: " key="Time: " overtime={true} /> 
        
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

export default WriteEssay;
