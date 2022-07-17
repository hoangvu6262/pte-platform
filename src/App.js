import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Introduction from "./page/main/Introduction";

import MainLayout from "./layout/main";
import PracticeLayout from "./layout/practice";
import Home from "./page/main/Home";

import { practiceRouter } from "./config/router";

function App() {
  // render practice layout
  const renderPracticeLayout = () => {
    return practiceRouter.map(({ path, Component, id }) => {
      return <Route path={path} element={<Component />} key={id} />;
    });
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="intro/:id" element={<Introduction />} />
          </Route>
          <Route path="/practice" element={<PracticeLayout />}>
            {renderPracticeLayout()}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
