import React from "react";
import { Button, Popconfirm, Tooltip } from "antd";
import {
  EllipsisOutlined,
  MessageOutlined,
  LikeOutlined,
} from "@ant-design/icons";

import "./styles.scss";

const ActionComment = ({ showModal, handleDeleteComment }) => {
  return (
    <>
      <div className="action-comment">
        <div className="action-comment__button">
          <Tooltip placement="bottom" title="Delete" color="red">
            <Popconfirm
              title="Are you sure？"
              okText="Yes"
              cancelText="No"
              onConfirm={handleDeleteComment}
            >
              <Button
                shape="circle"
                className="action-comment__button-report"
                // onClick={handleDeleteComment}
                icon={<EllipsisOutlined style={{ color: "#ffa0a0" }} />}
                // onClick={showModal}
              />
            </Popconfirm>
          </Tooltip>

          <Button
            shape="circle"
            className="action-comment__button-report"
            icon={<MessageOutlined style={{ color: "#79d9c7" }} />}
            onClick={showModal}
          />

          <Button
            shape="circle"
            className="action-comment__button-report"
            icon={<LikeOutlined style={{ color: "#84cdf0" }} />}
          />
        </div>
      </div>
    </>
  );
};

export default ActionComment;
