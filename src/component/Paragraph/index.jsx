import React, { useState } from "react";
import "./styles.scss";

import Word from "../Word";
import DictionaryModal from "../Modal/DictionaryModal";

const Paragraph = ({ content }) => {
  const [text, setText] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // console.log(content);
  //open Modal Dictionary
  const openModal = (word) => {
    setText(word);
    setIsModalVisible(true);
  };
  // render paragraph
  const renderParagraph = (sentence) => {
    return sentence
      .split(" ")
      .map((word, index) => {
        if (word) {
          if (word[0].match(/^[0-9]/)) {
            return <Word text={word} key={index + word} disable={true} />;
          } else if (word[word.length - 1].match(/[^a-zA-Z0-9 ]/g)) {
            return (
              <span key={index}>
                <Word
                  text={word.slice(0, word.length - 1)}
                  setOpen={(word) => openModal(word)}
                />
                <Word text={word[word.length - 1]} disable={true} />
              </span>
            );
          } else {
            return (
              <Word
                text={word}
                key={index + word}
                setOpen={(word) => openModal(word)}
              />
            );
          }
        }
      })
      .reduce((prev, curr) => [prev, " ", curr]);
  };

  return (
    <>
      <div className="custom-para">
        {content.split("\n").map((sentence, index) => (
          <p key={index}>{renderParagraph(sentence)}</p>
        ))}
      </div>
      <DictionaryModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        text={text}
      />
    </>
  );
};

export default Paragraph;
