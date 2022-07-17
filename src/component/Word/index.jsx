import React, {useState} from 'react';
import './styles.scss'

import DictionaryModal from "../Modal/DictionaryModal";

const Word = ({text, disable, setOpen}) => {
//open Modal Dictionary

  const handleClick = () =>{
    if (!disable) {
      setOpen(text)
    }
  }

  return (
  <>
    <span className={`word ${disable ? "disable" : ""}`} onClick={() => {
      handleClick()
    }}>{text}</span> 
    
  </>
  );
}

export default Word