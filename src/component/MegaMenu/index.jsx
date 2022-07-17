import React from "react";
import { Menu, Row, Col } from "antd";

import { Link } from "react-router-dom";

import "./styles.scss";

import menuList from "./script";
import { useLocation } from "react-router-dom";

const MegaMenu = () => {
  const location = useLocation();

  console.log(menuList);
  const renderMenu = () => {
    return menuList.map((group, index) => (
      <Col key={index}>
        <Menu.ItemGroup
          title={<p>{group.title}</p>}
          className="mega-menu__item-title"
        >
          {group.listItem.map((item) => (
            <Menu.Item key={item.key}>
              <Link
                to={(location.pathname === "/" ? "practice/" : "") + item.link}
                className="mega-menu__link--item"
              >
                {item.name}
              </Link>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Col>
    ));
  };

  return (
    <div className="mega-menu">
      <div className="mega-menu__container">
        <Row>{renderMenu()}</Row>
      </div>
    </div>
  );
};

export default MegaMenu;
