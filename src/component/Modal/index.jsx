import { Modal } from "antd";
import React from "react";

const CustomModal = ({
  setIsModalVisible,
  isModalVisible,
  title,
  children,
}) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="max-content"
        style={{top: "32px"}}
      >
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
