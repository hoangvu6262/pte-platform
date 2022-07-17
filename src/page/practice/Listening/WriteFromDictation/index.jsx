import React, { useState, useEffect, useRef } from "react";

import "./styles.scss";
import FunctionBar from "../../../../container/FunctionBar";
import Answer from "../../../../container/Answer";

import PageHeader from "../../../../component/PageHeader";
import DictModeModal from "../../../../component/Modal/DictModeModal";
import Button from "../../../../component/Button";
import Timer from "../../../../component/Timer";
import CustomAudio from "../../../../component/CustomAudio";

import { useSelector } from "react-redux";

import { getTestExamDetail } from "../../../../store/slices/testExam/testExamSlice";
import { useParams } from "react-router-dom";

import { Input, Form } from "antd";

import answerSlices, {
  changeIsSpeaking, 
} from "../../../../store/slices/answer/answerSlice";
import { useDispatch } from "react-redux/es/exports";
const { TextArea } = Input;

const contentParagraph = `We have briefly looked at some of the problems involved in running a biggish city like, say, Melbourne, keeping the road and rail systems running, policing, providing food and housing, and so on. In another lecture, I'm going to deal with what we must no megalopolis - cities with populations of ten million or more. However, first I want to go back in history to when the population of cities could be numbered in the thousands rather than millions. One of the earliest theorists of the city was, of course, Plato, who created an ideal city in his text, The Republic. The population of this city would be around twenty-five to thirty thousand at most. Oddly enough, the same figures were chosen by Leonardo da Vinci for his ideal cities.
Now, of these twenty five to thirty thousand inhabitants only about five thousand would be citizens. A reason for this might be that it is the largest number that could be addressed publicly at one time and by one person, and makes a voting system much easier to manage. Also, perhaps the numbers are kept deliberately low because a large population would be harder to control, or because, in practical terms, fewer inhabitants are easier to feed from local supplies without having to depend on outside sources.`
const WriteFromDictation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState('')
  const [form] = Form.useForm();
  const [isPlaying, setIsPlaying] = useState(true);

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
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/wfd_l_v2.png"
          title="Write From Dictation"
          chip="Study Guide"
          linkGuide={`/intro/${key}`}
          idExercise={testExamDetail.name}
          content="You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once."
        />
        <Timer time={10} title="Time: " key="Time: " overtime={true} /> 
        <div className="practise-body__audio">
          <CustomAudio
            audioSrc="https://basicenglishspeaking.com/wp-content/uploads/audio/QA/QA-14.mp3?_=1"
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
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

export default WriteFromDictation;
