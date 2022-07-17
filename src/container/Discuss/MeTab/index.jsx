import React from "react";
import { Empty } from "antd";

import AudioComment from "../../../component/AudioComment";

const MeTab = (props) => {
  const { listAnswer } = props;

  // get all parent comment (parentId === null)
  const rootAudioComment = listAnswer.filter((item) => item.parentId === null);

  /**
   * get all replies by parentId
   * @params (parentId)
   * @returns list comments
   */
  const getReplies = (parentId) =>
    listAnswer.filter((reply) => reply.parentId === parentId);

  // render audio comment
  const renderAudioComment = () => {
    if (listAnswer) {
      return rootAudioComment.map((comment) => {
        return (
          <AudioComment
            {...comment}
            key={comment.id}
            replies={getReplies(comment.id)}
            list={listAnswer}
            // setList={setListAnswer}
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

export default MeTab;
