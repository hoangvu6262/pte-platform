import React, { useEffect } from "react";
import { Divider, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";

import "./styles.scss";
import CustomTab from "../../component/Tab";
import DiscussionTab from "./DiscussionTab";
import BoardTab from "./BoardTab";
import MeTab from "./MeTab";
import {
  MessageOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import {
  getListDiscussionTab,
  getListBoardTab,
  getListAnswerTab,
} from "../../store/slices/discuss/discussSlice";

const { TabPane } = Tabs;

const Discuss = () => {
  const { listAnswer, listBoard, listDiscussion } = useSelector(
    (state) => state.discuss
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListDiscussionTab());
    dispatch(getListBoardTab());
    dispatch(getListAnswerTab());
  }, []);
  // console.log(listComment);
  return (
    <div className="discuss">
      <Divider orientation="left">Discussion</Divider>
      <CustomTab>
        <TabPane
          tab={
            <span>
              <MessageOutlined />
              Disscussion
            </span>
          }
          key="1"
        >
          <DiscussionTab listDiscussion={listDiscussion} />
          {/* <DiscussionTab /> */}
        </TabPane>
        <TabPane
          tab={
            <span>
              <UnorderedListOutlined />
              Board
            </span>
          }
          key="2"
        >
          <BoardTab listBoard={listBoard} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <FileDoneOutlined />
              Me
            </span>
          }
          key="3"
        >
          <MeTab listAnswer={listAnswer} />
        </TabPane>
      </CustomTab>
    </div>
  );
};

export default Discuss;
