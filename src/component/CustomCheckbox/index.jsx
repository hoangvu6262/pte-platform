import React, { useState, useRef} from 'react';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux'
import answerSlices from "../../store/slices/answer/answerSlice";


const CustomCheckhox = React.memo (({options}) => {
  const [checkList, setCheckList] = useState([])

  const checkboxRef = useRef()
  const dispatch = useDispatch();

  const handleCheckbox = (value) => {
    setCheckList(value)
    dispatch(answerSlices.actions.updateAnswering(value.join(' ,')))
  }

  return (
    <Checkbox.Group ref={checkboxRef} options={options} value={checkList} onChange={handleCheckbox}></Checkbox.Group>
  );
})

export default CustomCheckhox;
