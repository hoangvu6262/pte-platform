import React, { useState } from "react";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";

import "../styles.scss";
import CustomComment from "../../../component/Comment";
import CommentModal from "../../../component/Modal/CommentModal";
import ViewAllCommentModal from "../../../component/Modal/ViewAllCommentModal";

const DiscussionTab = (props) => {
  const { listDiscussion } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [viewAllCommentModal, setViewAllCommentModal] = useState(false);
  const [viewAllData, setViewAllData] = useState({});
  const [allRepliesById, setAllRepliesById] = useState([]);

  const rootAudioComment = listDiscussion.filter(
    (item) => item.parentId === null
  );

  //open Modal comment
  const showModal = () => {
    setIsModalVisible(true);
  };

  // open view all comments Modal
  const showViewAllCommentModal = (item, replies) => {
    setViewAllData(item);
    setAllRepliesById(replies);
    setViewAllCommentModal(true);
  };

  // render list replies
  const renderRepliesList = (replies) => {
    if (replies) {
      return replies.slice(0, 2).map((item) => {
        return (
          <>
            <CustomComment
              {...item}
              key={item.id}
              list={listDiscussion}
              // setList={setList}
            ></CustomComment>
          </>
        );
      });
    }
  };

  // render comment list
  const renderCommentList = () => {
    if (rootAudioComment) {
      return rootAudioComment.map((item) => {
        const replies = listDiscussion.filter(
          (reply) => reply.parentId === item.id
        );
        return (
          <CustomComment {...item} key={item.id} list={listDiscussion}>
            {renderRepliesList(replies)}
            {replies.length > 2 ? (
              <p
                onClick={() => showViewAllCommentModal(item, replies)}
                className="discussion-tab__view-all"
              >
                View all
              </p>
            ) : null}
          </CustomComment>
        );
      });
    }
  };

  return (
    <>
      <div className="discussion__comment">
        <div className="discussion__comment-add">
          <Button
            type="primary"
            shape="round"
            icon={<MessageOutlined />}
            size="medium"
            onClick={showModal}
          >
            Comment
          </Button>
        </div>
      </div>
      <div className="discussion-tab">{renderCommentList()}</div>;
      <CommentModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <ViewAllCommentModal
        list={listDiscussion}
        isModalVisible={viewAllCommentModal}
        setIsModalVisible={setViewAllCommentModal}
        {...viewAllData}
        replies={allRepliesById}
      />
    </>
  );
};

export default DiscussionTab;
