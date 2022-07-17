import React, { useState } from "react";
import { Avatar, Comment } from "antd";

import "./styles.scss";
import ActionComment from "./ActionComment";
import ReplyCommentModal from "../Modal/ReplyCommentModal";

const CustomComment = (comment) => {
  const { id, list, setList, name, date, content, avatar, parentId, children } =
    comment;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleDeleteComment = () => {
    // delete comment by id
    const commentList = list.filter((item) => item.id !== id);
    setList(commentList);
  };

  return (
    <>
      <Comment
        className="custom-comment"
        actions={[
          <span key="comment-nested-reply-to" className="custom-comment__date">
            {date}
          </span>,
          <ActionComment
            showModal={showModal}
            handleDeleteComment={handleDeleteComment}
          />,
        ]}
        author={<h4 className="custom-comment__author">{name}</h4>}
        avatar={
          <Avatar className="custom-comment__avatar" src={avatar} alt={name} />
        }
        content={<p className="custom-comment__content">{content}</p>}
      >
        {children}
      </Comment>
      <ReplyCommentModal
        list={list}
        setList={setList}
        id={id}
        parentId={parentId}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        nameReply={name}
      />
    </>
  );
};

export default CustomComment;
