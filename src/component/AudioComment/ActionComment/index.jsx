import React, { useState } from "react";
import { Button } from "antd";
import {
  EllipsisOutlined,
  MessageOutlined,
  LikeOutlined,
} from "@ant-design/icons";

import "./styles.scss";

const ActionComment = ({ showModal }) => {
  return (
    <>
      <div className="action-comment">
        <div className="action-comment__button">
          <Button
            shape="circle"
            className="action-comment__button-report"
            icon={<MessageOutlined />}
            onClick={showModal}
          />
          <Button
            shape="circle"
            className="action-comment__button-report"
            icon={<LikeOutlined />}
            //   onClick={showModal}
          />
        </div>
      </div>
    </>
  );
};

export default ActionComment;
