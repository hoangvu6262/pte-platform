import React, {useEffect, useState, useRef} from "react";

import axios from "axios";
import CustomModal from "../index";
import { Row, Col } from "antd";
import Button from '../../Button/'
import './styles.scss'

const DictionaryModal = ({ setIsModalVisible, isModalVisible, title, text }) => {
  const [data, setData] = useState()

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data[0])
    })
  }, [text])

  const handleVolume = (link) => {
    const audio = new Audio(link)
    audio.play()
  }

  const handleClose = () => {
    setIsModalVisible(false)
  }

  return (
    <CustomModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      >
        <div className="dictionary-modal">
          <div className="dictionary-modal__head">
            <h1>{text}</h1>
            <div className="dictionary-modal__head--phonetic">
              {
                data?.phonetics.map((text, index) => (
                  <div key={index}>
                    {text ? 
                      <div className="dictionary-modal__head--audio">
                        <span>{text.text}</span>
                        <i class="fa-solid fa-volume-high" onClick={() => handleVolume(text.audio)}></i>
                      </div>
                    : ""}
                  </div>
                  
                ))
              }
            </div>
          </div>

          <div className="dictionary-modal__main">
            <Row gutter={32}>
              <Col md={12} sm={24}>
                <h2 className="dictionary-modal__main--title">Definition</h2>

                <div className="dictionary-modal__main--content">
                  {
                    data?.meanings.map((list, index) => (
                      <ul className="dictionary-modal__main--list" key={index} >
                        <h3>{list.partOfSpeech}</h3>
                        {list.definitions.map((def, index) => (
                          <li key={index}>{def.definition}</li>
                        ))}
                      </ul>
                    ))
                  }
                </div>
              </Col>

              <Col md={12} sm={24}>
                <h2 className="dictionary-modal__main--title">Examples</h2>

                <div className="dictionary-modal__main--content">
                  {
                    data?.meanings.map((list, index) => (
                      <ul key={index} className="dictionary-modal__main--list">
                        {list.definitions.map((def, index) => (
                          <li key={index}>{def?.example}</li>
                        ))}
                      </ul>
                    ))
                  }
                </div>
              </Col>
            </Row>
          </div>

          <div className="dictionary-modal__close" onClick={() => {handleClose()}}>
            <Button size="small" outline={true}>Close</Button>
          </div>
        </div>

      </CustomModal>
  );
};

export default DictionaryModal;
