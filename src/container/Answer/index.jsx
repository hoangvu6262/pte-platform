import React from "react";
import { Divider } from "antd";

import "./styles.scss";

const Answer = ({ answer = "" }) => {
  return (
    <>
      <div className="answer">
        <Divider orientation="left" className="answer__divider">
          Answer
        </Divider>
        <div className="answer__content">
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Answer;
