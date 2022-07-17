import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
import Paragraph from "../../../../component/Paragraph";
import SpeakingTimer from "../../../../component/SpeakingTimer";
import { getTestExamDetail } from "../../../../store/slices/testExam/testExamSlice";
import { listReadAloud } from "../../../../data/speakingContent";

const contentP = `Neither golden eagles nor bald eagles are endangered species. The US bald eagle population has more than quadrupled since 2009, from around 72,000 to 317,000 birds. But the US golden eagle population is still relatively small - around 30,000 birds - and at risk of declining.`;

const ReadAloud = () => {
  // const { listAnswer, setListAnswer } = useContext(practiceContext);

  const { key, code } = useParams();

  const { content } = useSelector((state) => state.answer);
  const { testExamDetail } = useSelector((state) => state.testExam);

  const [contentParagraph, setContentParagraph] = useState(contentP);
  // console.log(contentParagraph);

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
    // console.log("/");
    if (listReadAloud.filter((item) => item.id === code).length > 0) {
      setContentParagraph(
        listReadAloud.filter((item) => item.id === code)[0].content
      );
    }
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
      <div className="read-alouds">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/ra_s_ai.png"
          title="Read Aloud"
          chip="Study Guide"
          linkGuide="/intro/r1"
          idExercise={testExamDetail.name}
          content="Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud."
        />
        <div className="read-alouds__countDown">
          {isPrepare ? (
            <SpeakingTimer
              time={15}
              title={"Prepare:"}
              isPrepare={isPrepare}
              setIsPrepare={setIsPrepare}
              record={record}
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
        <div className="read-alouds__paragraph">
          <Paragraph
            content={
              contentParagraph ||
              "Neither golden eagles nor bald eagles are endangered species. The US bald eagle population has more than quadrupled since 2009, from around 72,000 to 317,000 birds. But the US golden eagle population is still relatively small - around 30,000 birds - and at risk of declining."
            }
          />
        </div>
        <div className="read-alouds__progress"></div>
        <div className="read-alouds__body">
          <div className="read-alouds__body-text">Done</div>
          <div className="read-alouds__body-button">
            {record === RecordState.START ? (
              <div
                className="read-alouds__microphoneButton-stop"
                onClick={stop}
              >
                <i className="fa-solid fa-microphone"></i>
              </div>
            ) : (
              <div
                className="read-alouds__microphoneButton-start"
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
        {isAnswerVisible && <Answer />}
        <DictModeModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          content={contentParagraph}
        />
      </div>
    </>
  );
};

export default ReadAloud;
