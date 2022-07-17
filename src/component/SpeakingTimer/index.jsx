import React, { useEffect, useRef } from "react";
import Countdown from "react-countdown";
import { RecordState } from "audio-react-recorder";

import "./styles.scss";
// const { Countdown } = Statistic;

const SpeakingTimer = ({
  time,
  overtime = false,
  title,
  isPrepare,
  setIsPrepare,
  setRecord,
  record,
  key,
}) => {
  const timerRef = useRef();
  useEffect(() => {
    if (record === RecordState.STOP && isPrepare === false) {
      timerRef.current.pause();
    }
  }, [record, isPrepare]);

  useEffect(() => {
    if (record === RecordState.START) {
      timerRef.current.start();
    }
  }, [record]);

  const onComplete = () => {
    if (isPrepare) {
      setIsPrepare(false);
      setRecord(RecordState.START);
    } else {
      setRecord(RecordState.STOP);
    }
  };

  return (
    <>
      <Countdown
        ref={timerRef}
        onComplete={onComplete}
        key={key}
        date={Date.now() + time * 1000}
        overtime={overtime}
        renderer={(props) => {
          const { formatted, total } = props;
          // console.log(props);
          return (
            <>
              <span>
                {title} {total >= 0 ? null : "-"}
                {formatted.minutes}:{formatted.seconds}
              </span>
            </>
          );
        }}
      />
    </>
  );
};

export default SpeakingTimer;
