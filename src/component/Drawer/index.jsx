import React from "react";
import { Drawer, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

import "./styles.scss";

const CustomDrawer = ({ visible, setVisible, children }) => {
  const onClose = () => {
    setVisible(false);
  };

  const showDefaultDrawer = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Drawer
        placement="right"
        width="70%"
        onClose={onClose}
        visible={visible}
        // closable={false}
        className="custom-drawer"
        // mask={false}
      >
        <div className="custom-drawer__container">{children}</div>
        <div className="custom-drawer__close" onClick={showDefaultDrawer}>
          <div className="custom-drawer__button">
            <div
              className={`custom-drawer__wrapper ${!visible ? " close" : null}`}
            >
              <RightOutlined />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
