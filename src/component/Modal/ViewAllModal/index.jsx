import React from "react";
import CustomModal from "../index";

import AudioComment from "../../AudioComment";

const ViewAllModal = (props) => {
  const {
    setIsModalVisible,
    isModalVisible,
    replies,
    name,
    avatar,
    score,
    audio,
    date,
    list,
    setList,
    id,
    parentId,
  } = props;
  console.log(replies);
  return (
    <CustomModal
      setIsModalVisible={setIsModalVisible}
      isModalVisible={isModalVisible}
      title="Comment"
    >
      <div style={{ width: 800, height: "100%" }}>
        <AudioComment
          replies={replies}
          name={name}
          avatar={avatar}
          audio={audio}
          score={score}
          date={date}
          list={list}
          setList={setList}
          id={id}
          parentId={parentId}
        />
      </div>
    </CustomModal>
  );
};

export default ViewAllModal;
