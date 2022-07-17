import React from "react";
import { Dropdown, Menu, Space, Button } from "antd";
import { FlagFilled, SmileOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import "./styles.scss";

const menu = (
  <Menu
    className="number-menu"
    items={[
      {
        key: "1",
        label: "Orange",
        icon: (
          <i
            className="fa-solid fa-bookmark"
            style={{
              fontSize: 23,
              color: "rgb(255, 204, 0)",
              marginRight: "15px",
            }}
          ></i>
        ),
      },
      {
        key: "2",
        label: "Purple",
        icon: (
          <i
            className="fa-solid fa-bookmark"
            style={{
              fontSize: 23,
              color: "rgb(178, 110, 255)",
              marginRight: "15px",
            }}
          ></i>
        ),
      },
      {
        key: "3",
        label: "Green",
        icon: (
          <i
            className="fa-solid fa-bookmark"
            style={{
              fontSize: 23,
              color: "rgb(157, 255, 72)",
              marginRight: "15px",
            }}
          ></i>
        ),
      },
      {
        key: "4",
        label: "Red",
        icon: (
          <i
            className="fa-solid fa-bookmark"
            style={{
              fontSize: 23,
              color: "rgb(255, 102, 102)",
              marginRight: "15px",
            }}
          ></i>
        ),
      },
    ]}
  />
);

const Number = ({ number, content }) => {
  return (
    <div className="number-container">
      <div className="number-container__left">
        <p>{`#${number}`}</p>
      </div>
      <div className="number-container__right">
        <Dropdown
          overlay={menu}
          className="number-container__right-dropdown"
          placement="bottom"
        >
          <Space>
            <i
              className="fa-solid fa-bookmark"
              style={{
                fontSize: 23,
                color: "rgb(204, 204, 204)",
                cursor: "pointer",
              }}
            ></i>
          </Space>
        </Dropdown>
        <Button className="number-container__right-btn">
          <i className="fa-solid fa-share-nodes"></i>
          Share
        </Button>
      </div>
    </div>
  );
};

export default Number;
