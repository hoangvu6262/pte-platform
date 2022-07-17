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
import CustomAudio from "../../../../component/CustomAudio";
import SpeakingTimer from "../../../../component/SpeakingTimer";
import { useParams } from "react-router-dom";
import { getTestExamDetail } from "../../../../store/slices/testExam/testExamSlice";

const contentParagraph = `Neither golden eagles nor bald eagles are endangered species. The US bald eagle population has more than quadrupled since 2009, from around 72,000 to 317,000 birds. But the US golden eagle population is still relatively small - around 30,000 birds - and at risk of declining.`;

const ReTellLecture = () => {
  // const { listAnswer, setListAnswer } = useContext(practiceContext);
  const { key, code } = useParams();

  const { content } = useSelector((state) => state.answer);
  const { testExamDetail } = useSelector((state) => state.testExam);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnswerVisible, setisAnswerVisible] = useState(false);
  const [isPrepare, setIsPrepare] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const [record, setRecord] = useState(null);
  const [blobURL, setblobURL] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setblobURL("");
    setIsPrepare(true);
    dispatch(changeIsSpeaking(true));
  }, []);

  useEffect(() => {
    setRecord(RecordState.NONE);
    setblobURL("");
    setIsPrepare(true);
    dispatch(getTestExamDetail({ key, code }));
    dispatch(answerSlices.actions.redoAnswering());
  }, [key, code]);

  useEffect(() => {
    setblobURL(content);
  }, [content]);

  useEffect(() => {
    if (blobURL) {
      dispatch(answerSlices.actions.updateAnswering(blobURL));
    }
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
      <div className="re-tell_lecture">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/rl_s_ai.png"
          title="Re-tell Lecture"
          chip="Study Guide"
          linkGuide="/intro/r1"
          idExercise={testExamDetail.name}
          content="You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response."
        />
        <div className="re-tell_lecture__countDown">
          {isPrepare ? (
            <SpeakingTimer
              time={5}
              title={"Prepare:"}
              isPrepare={isPrepare}
              setIsPrepare={setIsPrepare}
              setRecord={setRecord}
              key="prepare"
              // isAudio={true}
              // setIsPlaying={setIsPlaying}
            />
          ) : (
            <SpeakingTimer
              time={10}
              title={"Time:"}
              isPrepare={isPrepare}
              setIsPrepare={setIsPrepare}
              setRecord={setRecord}
              key="time"
            />
          )}
        </div>
        <div className="re-tell_lecture__audio">
          <CustomAudio
            audioSrc="https://apeuni-prod-sg.oss-ap-southeast-1.aliyuncs.com/public/system/answers/audios/496/663/429/original/RA786_2022-07-11_00_00_51-553f.wav?1657468851"
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </div>
        <div className="re-tell_lecture__progress"></div>
        <div className="re-tell_lecture__body">
          <div className="re-tell_lecture__body-text">Done</div>
          <div className="re-tell_lecture__body-button">
            {record === RecordState.START ? (
              <div
                className="re-tell_lecture__microphoneButton-stop"
                onClick={stop}
              >
                <i className="fa-solid fa-microphone"></i>
              </div>
            ) : (
              <div
                className="re-tell_lecture__microphoneButton-start"
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

export default ReTellLecture;
