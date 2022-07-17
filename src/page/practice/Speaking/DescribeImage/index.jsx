import React, { useState, useEffect } from "react";

import "./styles.scss";
import FunctionBar from "../../../../container/FunctionBar";
import Answer from "../../../../container/Answer";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import { useDispatch, useSelector } from "react-redux";
import answerSlices, {
  changeIsSpeaking,
} from "../../../../store/slices/answer/answerSlice";
import PageHeader from "../../../../component/PageHeader";
import DictModeModal from "../../../../component/Modal/DictModeModal";
import SpeakingTimer from "../../../../component/SpeakingTimer";
import { useParams } from "react-router-dom";
import { getTestExamDetail } from "../../../../store/slices/testExam/testExamSlice";
import { listDescribeImage } from "../../../../data/speakingContent";

const contentParagraph = `Neither golden eagles nor bald eagles are endangered species. The US bald eagle population has more than quadrupled since 2009, from around 72,000 to 317,000 birds. But the US golden eagle population is still relatively small - around 30,000 birds - and at risk of declining.`;

const DescribeIamge = () => {
  // const { listAnswer, setListAnswer } = useContext(practiceContext);

  const { key, code } = useParams();

  const { content } = useSelector((state) => state.answer);
  const { testExamDetail } = useSelector((state) => state.testExam);

  const [image, setImage] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [isPrepare, setIsPrepare] = useState(true);

  const [record, setRecord] = useState(null);
  const [blobURL, setblobURL] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setblobURL(content);
    // console.log("/");
  }, [content]);

  useEffect(() => {
    setblobURL("");
    setIsPrepare(true);
    dispatch(changeIsSpeaking(true));
    // console.log("/");
  }, []);

  useEffect(() => {
    setRecord(RecordState.NONE);
    setblobURL("");
    setIsPrepare(true);
    dispatch(getTestExamDetail({ key, code }));
    dispatch(answerSlices.actions.redoAnswering());
    if (listDescribeImage.filter((item) => item.id === code).length > 0) {
      setImage(listDescribeImage.filter((item) => item.id === code)[0].content);
    }
    // console.log("/");
  }, [key, code]);

  useEffect(() => {
    if (blobURL) {
      dispatch(answerSlices.actions.updateAnswering(blobURL));
    }
    // console.log("/");
  }, [blobURL]);

  //open Modal Dictionary
  const openModal = () => {
    setIsModalVisible(true);
  };

  const start = () => {
    setIsPrepare(false);
    setRecord(RecordState.START);
  };

  const stop = () => {
    setRecord(RecordState.STOP);
  };

  //audioData contains blob and blobUrl
  const onStop = (audioData) => {
    // console.log("audio data: " + audioData.url);
    setblobURL(audioData.url);
  };

  return (
    <>
      <div className="describe_image">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/di_s_ai.png"
          title="Describe Image"
          chip="Study Guide"
          linkGuide="/intro/r1"
          idExercise={testExamDetail.name}
          content="Look at the graph below. In 25 seconds, please speak into the microphone and describe in detail what the graph is showing. You will have 40 seconds to give your response."
        />
        <div className="describe_image__countDown">
          {isPrepare ? (
            <SpeakingTimer
              time={25}
              title={"Prepare:"}
              isPrepare={isPrepare}
              record={record}
              setIsPrepare={setIsPrepare}
              setRecord={setRecord}
              key="prepare"
            />
          ) : (
            <SpeakingTimer
              time={40}
              title={"Time:"}
              isPrepare={isPrepare}
              record={record}
              setIsPrepare={setIsPrepare}
              setRecord={setRecord}
              key="time"
            />
          )}
        </div>
        <div className="describe_image__image">
          <img src={image} alt="repeat-sentence-image" />
        </div>
        <div className="describe_image__progress"></div>
        <div className="describe_image__body">
          <div className="describe_image__body-text">Done</div>
          <div className="describe_image__body-button">
            {record === RecordState.START ? (
              <div
                className="describe_image__microphoneButton-stop"
                onClick={stop}
              >
                <i className="fa-solid fa-microphone"></i>
              </div>
            ) : (
              <div
                className="describe_image__microphoneButton-start"
                onClick={start}
              >
                <i className="fa-solid fa-microphone"></i>
              </div>
            )}
          </div>
        </div>
        <AudioReactRecorder
          state={record}
          onStop={onStop}
          canvasWidth={1}
          canvasHeight={1}
        />
        {blobURL && <audio src={blobURL} controls></audio>}
        <FunctionBar
          toggleAnswer={() => setisAnswerVisible(!isAnswerVisible)}
          openModal={() => {
            openModal();
          }}
        />
        {isAnswerVisible && <Answer answer={contentParagraph} />}
        <DictModeModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          content={contentParagraph}
        />
      </div>
    </>
  );
};

export default DescribeIamge;
