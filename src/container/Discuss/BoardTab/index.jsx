import React from "react";
import { Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";

import AudioComment from "../../../component/AudioComment";

const BoardTab = (props) => {
  const { listBoard } = props;

  // get all parent comment (parentId === null)
  const rootAudioComment = listBoard.filter((item) => item.parentId === null);

  /**
   * get all replies by parentId
   * @params (parentId)
   * @returns list comments
   */
  const getReplies = (parentId) =>
    listBoard.filter((reply) => reply.parentId === parentId);

  // render audio comment
  const renderAudioComment = () => {
    if (listBoard) {
      return rootAudioComment.map((comment) => {
        return (
          <AudioComment
            {...comment}
            key={comment.id}
            replies={getReplies(comment.id)}
            list={listBoard}
            // setList={setList}
          />
        );
      });
    } else {
      <Empty />;
    }
  };

  return (
    <>
      <div>{renderAudioComment()}</div>
    </>
  );
};

export default BoardTab;
