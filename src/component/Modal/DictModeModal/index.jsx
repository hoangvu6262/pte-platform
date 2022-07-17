import React from "react";
import CustomModal from "../index";
import './styles.scss'

import Paragraph from "../../Paragraph";
import Button from "../../Button";

const DictModeModal = ({ setIsModalVisible, isModalVisible, content }) => {
  return (
    <CustomModal
      setIsModalVisible={setIsModalVisible}
      isModalVisible={isModalVisible}
    >
      <div className="dict-mode-modal">
        <div className="dict-mode-modal__head">
          <h1>Dict mode</h1>
        </div>

        <div className="dict-mode-modal__main"> 
          <section className="dict-mode-modal__section">
            <h3>Transcript</h3>
            <Paragraph content={content}/>
          </section>
        </div>

        <div className="dict-mode-modal__close" onClick={() => {setIsModalVisible(false)}}>
          <Button outline={true} size="small">
            Close
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default DictModeModal;
