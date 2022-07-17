import React from "react";
import { Button, Modal } from "antd";
import { HighlightOutlined } from "@ant-design/icons";

import "./styles.scss";

const config = {
  title: "Reset RA Practice Status",
  content: (
    <p>
      Are you sure to reset the practice status and practice count of all RA
      questions? Data will be unrecoverable after reset! (answer records will
      not be deleted)
    </p>
  ),
};

const ResetModal = () => {
  const [modal, contextHolder] = Modal.useModal();
  return (
    <>
      <div value="Light" className="reset-modal">
        <Button
          onClick={() => {
            modal.error(config);
          }}
          style={{ border: "none", color: "red" }}
          className="reset-modal__btn"
          icon={<HighlightOutlined />}
        >
          Reset Prac Status
        </Button>
        {contextHolder}
      </div>
    </>
  );
};

export default ResetModal;
