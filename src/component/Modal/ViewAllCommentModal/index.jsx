import React from "react";
import CustomModal from "../index";

import CustomComment from "../../Comment";

const ViewAllCommentModal = (props) => {
  const {
    setIsModalVisible,
    isModalVisible,
    replies,
    name,
    avatar,
    content,
    date,
    list,
    setList,
    id,
    parentId,
  } = props;
  // console.log(list);
  return (
    <CustomModal
      setIsModalVisible={setIsModalVisible}
      isModalVisible={isModalVisible}
      title="Comment"
    >
      <div style={{ width: 800 }}>
        <CustomComment
          name={name}
          avatar={avatar}
          content={content}
          date={date}
          list={list}
          setList={setList}
          id={id}
          parentId={parentId}
        >
          {replies.map((item) => {
            return (
              <>
                <CustomComment
                  {...item}
                  key={item.id}
                  list={list}
                  setList={setList}
                ></CustomComment>
              </>
            );
          })}
        </CustomComment>
      </div>
    </CustomModal>
  );
};

export default ViewAllCommentModal;
