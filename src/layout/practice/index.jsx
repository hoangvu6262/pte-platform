import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import CustomDrawer from "../../component/Drawer";
import TestExam from "../../container/TestExam";

import "./styles.scss";
import { Outlet } from "react-router-dom";
import Discuss from "../../container/Discuss";

const PracticeLayout = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Header />
      <div className="practice-layout">
        <Outlet />
        <Discuss />
      </div>
      <CustomDrawer visible={visible} setVisible={setVisible}>
        <TestExam setVisible={setVisible} />
      </CustomDrawer>
      <Footer />
    </>
  );
};

export default PracticeLayout;
