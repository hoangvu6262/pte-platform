import React from "react";
import { Divider } from "antd";
import {useNavigate} from 'react-router-dom'
import Number from '../Number'

import Button  from "../Button";
import Timer from '../Timer'

import "./styles.scss";

const PageHeader = ({ logo, title, chip, content, isDrawer = false, linkGuide, idExercise}) => {

  const navigate = useNavigate()

  const handleGuideClick = () => {
    if (linkGuide) {
      navigate(linkGuide)
    }
  }

  return (
    <>
      <div className="page-header">
        <div className="page-header__logo">
          <img src={logo} alt="page-header-logo" />
        </div>
        <div className="page-header__right">
          <div className="page-header__title">
            <h2>{title}</h2>
            {isDrawer || (
              <Button size="small" className="page-header__button" onClick={handleGuideClick}>
                <i className="fa-solid fa-graduation-cap"></i>
                {chip}
              </Button>
            )}
          </div>
          {isDrawer || (
            <div className="page-header__content">
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
      <Divider className="page-header__hr" />
      {isDrawer || <Number number={idExercise} content={title}/>}
    </>
  );
};

export default React.memo(PageHeader);
