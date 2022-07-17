import React from "react";

import "./styles.scss";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Banner from "../../../component/Banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="home">
        <div className="home-container">
          <Section1 />
          <Section2 />
        </div>
      </div>
    </>
  );
};

export default HomePage;
