import React from "react";
import './styles.scss'

const CustomTitle = (props) => {
  return (
    <div className="custion-title">
      <h1>{props.name}</h1>
      <span>{props.title}</span>
    </div>
  )
};

export default CustomTitle;
