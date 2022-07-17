import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./styles.scss";
import PageHeader from "../../component/PageHeader";
import AllTab from "./AllTab";
import { getHeaderDrawer } from "../../store/slices/testExam/testExamSlice";

const { TabPane } = Tabs;

const TestExam = ({ setVisible }) => {
  const { key } = useParams();

  const { headerDrawer } = useSelector((state) => state.testExam);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeaderDrawer(key));
  }, [key]);

  return (
    <div className="test-exam">
      <div className="test-exam__container">
        <PageHeader
          isDrawer={true}
          logo={headerDrawer.Logo}
          title={headerDrawer.name}
          chip="Study Guide"
          content="You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once."
        />
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="All" key="1" size="large">
              <AllTab setVisible={setVisible} />
            </TabPane>
            <TabPane tab="Week P" key="2">
              <AllTab />
            </TabPane>
            <TabPane tab="Jun P" key="3">
              <AllTab />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TestExam;
