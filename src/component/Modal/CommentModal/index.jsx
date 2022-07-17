import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import CustomModal from "../index";
import { addDiscussion } from "../../../store/slices/discuss/discussSlice";

import "./styles.scss";

const { TextArea } = Input;

const CommentModal = ({ setIsModalVisible, isModalVisible }) => {
  const { listDiscussion } = useSelector((state) => state.discuss);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const commentData = {
      id: listDiscussion.length + 10,
      avatar:
        "https://dl26yht2ovo33.cloudfront.net/public/system/users/images/000/110/583/original/ape3.png",
      name: "Vu Cao",
      parentId: null,
      content: values.comment,
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
        onFinish={onFinish}
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

export default CommentModal;
