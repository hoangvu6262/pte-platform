import React from "react";
import './styles.scss'
import Button from '../Button/index'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-title">
            <h1>Practice PTE</h1>
            <p>Join 100,000 PTE test takers to practice.</p>
            <Button>PRACTISE NOW</Button>
        </div>
        <div className="banner-img">
          <img src="https://corptrain.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/header-search.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
