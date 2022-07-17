import React, {useRef, useEffect, useState} from 'react';
import Logo from "../Logo";
import './styles.scss'
import { Menu } from "antd";
import { CaretDownOutlined, BarsOutlined } from '@ant-design/icons';
import MegaMenu from "../MegaMenu";

import Sidebar from "../MegaMenu/Sidebar";
import { Link } from "react-router-dom";


const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const headerRef = useRef(null)

    useEffect(() => {
        const shrinkHeader = () => {
            if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        }

        window.addEventListener('scroll', shrinkHeader)
        return () => {
            window.removeEventListener('scroll', shrinkHeader) 
        };
    }, []);
  return (

    <>
      <header ref={headerRef}>
        <div className="header">
          <Logo/>
          <div className="header__menu">
            <Menu mode="horizontal" defaultSelectedKeys={['home']}>
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>

              <Menu.SubMenu key="SubMenu" icon={<CaretDownOutlined />} title="Practice PTE">
                <div className="header__menu--submenu">
                  <MegaMenu/>
                </div>
              </Menu.SubMenu>
            </Menu>
          </div>

          <div className="header__sidebar" onClick={() => {setOpenSidebar(true)}}>
            <BarsOutlined className="header__sidebar--icon"/>
          </div>
        </div>
      </header>
      <Sidebar open={openSidebar} setOpen={(open) => {setOpenSidebar(open)}}/>
    </>
  );
}

export default Header;