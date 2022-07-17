import React, {useEffect, useState} from 'react';
import './styles.scss'

import { Link } from 'react-router-dom'

import CustomTitle from '../../../component/CustomTitle'
import Button from '../../../component/Button'

import { useParams } from "react-router-dom";

import { listeningIntro } from "./data/Listening";
import { readingIntro } from './data/Reading';
import { speakingIntro } from './data/Speaking'
import { writingIntro } from './data/Writing'

const combineData = [...listeningIntro, ...readingIntro, ...speakingIntro, ...writingIntro]

const Introduction = (props) => {

  const { id } = useParams();

  // Filter the id of data 
  const filterId = (id) => {
    const filterList = combineData.filter((intro) => intro.id === id)
    return filterList[0];
  }

  // modify the enter of the paragraph
  const modifyParagraph = (text) => {
    return text.split('\n\n').map(paragraph =>
      <p>
          {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
      </p>
  )
  }

  const renderIntroView = () => {
    const data = filterId(id);

    if (!data) {
      return (
        <div className="intro-container">
          <h1>This page doesn't exist</h1>
        </div>
      )
    }

    return (
      <div className="intro-container">
        <div className="intro-title">
          <CustomTitle name="STUDY GUIDE" title={data.title}/>
        </div>

        {
          data.sections.map(section => (
            <section className="intro-section">
              <h3>{section.name}</h3>
              <p>{modifyParagraph(section.text)}</p>
            </section>
          ))
        }

        <Link to={data.link} className="intro-button">
          <Button>Practice</Button>
        </Link>
      </div>
      
    )
  }


  return (
    <div className="intro">
      {renderIntroView()}
    </div>
  );
}

export default Introduction;
