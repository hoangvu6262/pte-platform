import React, {useEffect, useState} from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Menu, Drawer } from 'antd';
import './styles.scss'

import menuList from '../script'
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Sidebar = ({open, setOpen}) => {

  const onClose = () => {
    setOpen(false)
  }

  const location = useLocation();

  const renderMenu = () => {
    return menuList.map((menu, index) => (
      <Menu.ItemGroup key={index} title={menu.title}>
        {menu.listItem.map(item => (
          <Menu.Item key={item.key}>
            <Link to={(location.pathname === "/" ? "practice/" : "") + item.link}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    ))
  }
  return (
      <Drawer
        visible={open}
        onClose={onClose}
        closeIcon={false}
        width="fit-content"
      >
        <div className="sidebar">
          <div className="sidebar-close" onClick={() => {onClose()}}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <Menu
            style={{
              width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <Menu.Item>
              <Link to='/'>Home</Link>
            </Menu.Item>
            {renderMenu()}
          </Menu> 
        </div>
      </Drawer>
  );
}

export default Sidebar;
