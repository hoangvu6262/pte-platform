import React, { useState } from "react";
import { Avatar, Comment, Tag, Divider } from "antd";
import { useSelector } from "react-redux";

import "./styles.scss";
import ActionComment from "./ActionComment";
import CustomComment from "../Comment";
// import audioMp3 from "../../asset/audio/audio.mp3";
import ReplyCommentModal from "../Modal/ReplyCommentModal";

const AudioComment = (audioComment) => {
  const {
    id,
    name,
    date,
    audio,
    content,
    avatar,
    replies,
    parentId = null,
    score,
    list,
    setList,
  } = audioComment;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { isSpeaking } = useSelector((state) => state.answer);

  // console.log(replies);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <Comment
        className="audio-comment"
        actions={[
          <span key="comment-nested-reply-to" className="audio-comment__date">
            <Tag color="processing" className="audio-comment__tag">
              Score Info <span>{score}/50</span>
            </Tag>
          </span>,
          <ActionComment showModal={showModal} />,
        ]}
        author={
          <h4 className="audio-comment__author">
            {name} - <span className="audio-comment__date">{date}</span>
          </h4>
        }
        avatar={
          <Avatar className="audio-comment__avatar" src={avatar} alt={name} />
        }
        content={
          isSpeaking ? (
            <audio controls src={content} type="audio/mpeg" />
          ) : (
            <p className="custom-comment__content">{content}</p>
          )
        }
      >
        {replies &&
          replies.map((reply) => {
            return (
              <CustomComment
                {...reply}
                key={reply.id}
                list={list}
                setList={setList}
              />
            );
          })}
      </Comment>
      <Divider />
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

export default AudioComment;
