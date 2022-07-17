import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Sidebar from '../../component/MegaMenu/Sidebar/index'

import "./styles.scss";
import { Outlet} from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="main-layout">
      <Header />
        {/* <Sidebar/> */}
        <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
