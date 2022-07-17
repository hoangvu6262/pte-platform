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
import { listRepeatSentence } from "../../../../data/speakingContent";

const contentParagraph = `Neither golden eagles nor bald eagles are endangered species. The US bald eagle population has more than quadrupled since 2009, from around 72,000 to 317,000 birds. But the US golden eagle population is still relatively small - around 30,000 birds - and at risk of declining.`;

const RepeatSentence = () => {
  // const { listAnswer, setListAnswer } = useContext(practiceContext);
  const { key, code } = useParams();

  const { content } = useSelector((state) => state.answer);
  const { testExamDetail } = useSelector((state) => state.testExam);

  const [audioSrc, setAudioSrc] = useState("");
  // console.log(audioSrc);

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
    const check = listRepeatSentence.filter((item) => item.id === code);
    if (check.length > 0) {
      setAudioSrc(check[0].content);
    }
  }, [code]);

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
      <div className="repeat_sentence">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/rs_s_ai.png"
          title="Repeat Sentence"
          chip="Study Guide"
          linkGuide="/intro/r1"
          idExercise={testExamDetail.name}
          content="You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once."
        />
        <div className="repeat_sentence__countDown">
          {isPrepare ? (
            <SpeakingTimer
              time={3}
              title={"Prepare:"}
              isPrepare={isPrepare}
              record={record}
              setIsPrepare={setIsPrepare}
              setRecord={setRecord}
              key="prepare"
            />
          ) : (
            <SpeakingTimer
              time={15}
              title={"Time:"}
              isPrepare={isPrepare}
              record={record}
              setIsPrepare={setIsPrepare}
              setRecord={setRecord}
              key="time"
            />
          )}
        </div>
        {/* <div className="repeat_sentence__audio">
          
        </div> */}
        <CustomAudio
          audioSrc={audioSrc}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className="repeat_sentence__progress"></div>
        <div className="repeat_sentence__body">
          <div className="repeat_sentence__body-text">Done</div>
          <div className="repeat_sentence__body-button">
            {record === RecordState.START ? (
              <div
                className="repeat_sentence__microphoneButton-stop"
                onClick={stop}
              >
                <i className="fa-solid fa-microphone"></i>
              </div>
            ) : (
              <div
                className="repeat_sentence__microphoneButton-start"
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

export default RepeatSentence;
