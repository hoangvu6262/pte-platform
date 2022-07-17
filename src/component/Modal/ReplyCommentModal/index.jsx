import React from "react";
import { Input, Button, Form } from "antd";
import { useDispatch } from "react-redux";

import "./styles.scss";
import CustomModal from "../index";
import { addDiscussion } from "../../../store/slices/discuss/discussSlice";

const { TextArea } = Input;

const ReplyCommentModal = ({
  setIsModalVisible,
  isModalVisible,
  parentId,
  nameReply,
  id,
  list,
  setList,
}) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const handleReplyComment = (values) => {
    // e.preventDefault();
    const commentData = {
      id: list.length + 10,
      avatar:
        "https://dl26yht2ovo33.cloudfront.net/public/system/users/images/000/110/583/original/ape3.png",
      name: "Vu Cao",
      parentId: parentId ? parentId : id,
      content: `${parentId ? `@${nameReply}` : ""} ${values.comment}`,
      date: "2022-07-02",
    };

    // setList([...list, commentData]);
    dispatch(addDiscussion(commentData));
    form.resetFields();
  };

  return (
    <CustomModal
      setIsModalVisible={setIsModalVisible}
      isModalVisible={isModalVisible}
      title="Comment"
    >
      <Form
        form={form}
        initialValues={{
          comment: "",
        }}
        onFinish={handleReplyComment}
        autoComplete="off"
        style={{ width: "600px" }}
      >
        <Form.Item
          name="comment"
          rules={[
            {
              required: true,
              message: "Please input your comment!",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <div className="comment-button">
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </div>
      </Form>
    </CustomModal>
  );
};

export default ReplyCommentModal;
