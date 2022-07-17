import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import Countdown from "react-countdown";

import "./styles.scss";

const Timer = ({
  time,
  overtime,
  title,
  key,
}) => {
  const submitStatus = useSelector((state) => state.answer.status) || 1;
  const timerRef= useRef()

  useEffect(() => {
    if (submitStatus === 3) {
      timerRef.current.api.pause();
    } 
    else if (submitStatus === 1) {
      timerRef.current.api.start();
    }
  }, [submitStatus]);

  const onComplete = () => {
    console.log("Completed");
  };

  return (
    <div className="countdown">
      <Countdown
        ref={timerRef}
        onComplete={onComplete}
        key={key}
        date={Date.now() + time * 1000}
        overtime={overtime}
        renderer={(props) => {
          const { formatted, total } = props;
          return (
            <>
              <span>
                {title} {total >= 0 ? null : "-"}
                {formatted.minutes}:{formatted.seconds}
              </span>
            </>
          );
        }}
        autoStart={true}
      />
    </div>
  );
};

const MemoTimer = React.memo(Timer);
export default MemoTimer
