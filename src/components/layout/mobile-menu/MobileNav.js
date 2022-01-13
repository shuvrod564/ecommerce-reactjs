import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

import { Drawer, Button, Space, Menu } from 'antd'; 
import { AppstoreOutlined, MailOutlined, UserOutlined, MenuFoldOutlined } from '@ant-design/icons';
 
const { SubMenu } = Menu;



const MobileNav = (params) => {
    const [visible, setVisible] = useState(false);
  // const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setVisible(true);
  }; 

  const onClose = () => {
    setVisible(false);
  };
    return (

        <>
            <nav className="mobile__nav py-2 d-lg-none">
                <div className="container">
                  <Space className='d-flex justify-content-between'> 
                      <Button type="text" onClick={showDrawer} className='p-0 text-white drawer__btn'>
                        <MenuFoldOutlined />
                      </Button>
                      <a className='logo'><img src='images/logo.png' /></a>
                      <div>
                        <Button type='text' className='btn user__btn'>
                          <span>
                          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.02 29.02"><defs><style></style></defs><title>icon_user</title><path className="cls-1" d="M14.52,29A14.51,14.51,0,1,1,29,14.62,14.36,14.36,0,0,1,14.52,29Zm9.5-5.1A13.31,13.31,0,0,0,14,1.22a13.28,13.28,0,0,0-12.3,9.4A13,13,0,0,0,5,23.82c.7-.8,1.3-1.6,2-2.4s1.6-1.3,2.4-2a7.8,7.8,0,0,1-.5-11.1,7.79,7.79,0,0,1,10.3-.7,7.47,7.47,0,0,1,2.8,4.9,7.4,7.4,0,0,1-2.6,6.9A12.43,12.43,0,0,1,24,23.92Zm-18.1.8c.1.1.2.2.3.2a13.39,13.39,0,0,0,16.8-.1c.2-.2.2-.3.1-.5a11.81,11.81,0,0,0-3.9-3.8.93.93,0,0,0-1.3,0l-.6.3c-.6.2-.9.2-1-.2s0-.6.6-.8a6.57,6.57,0,0,0,4.1-7.4,6.5,6.5,0,1,0-11.8,4.9,6.56,6.56,0,0,0,3.3,2.6c.4.2.6.4.5.8s-.4.4-.8.3a6.12,6.12,0,0,0-1.2-.5.3.3,0,0,0-.4,0A9.19,9.19,0,0,0,5.92,24.72Z"></path></svg>
                          </span>
                        </Button>
                        <Button type='text' className='btn user__btn'>
                          <span>
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 51.54"><title>carrinho</title><path d="M19.77,47.49a4.06,4.06,0,1,0,4.05-4.05A4.05,4.05,0,0,0,19.77,47.49ZM53.9,43.44a4,4,0,1,1-4,4.05A4.05,4.05,0,0,1,53.9,43.44ZM14.41,1.05l9.64,33.24a1.46,1.46,0,0,0,1.4,1.05H51.51a1.48,1.48,0,0,0,1.37-.94l5.58-14.63a1.46,1.46,0,0,1,1.36-.94h2.72a1.46,1.46,0,0,1,1.36,2l-7.43,19a1.46,1.46,0,0,1-1.36.93H21.44A1.46,1.46,0,0,1,20,39.69L10.3,6.45a1.46,1.46,0,0,0-1.4-1H2.38A1.45,1.45,0,0,1,1,4.45L.09,2A1.46,1.46,0,0,1,1.46,0H13A1.46,1.46,0,0,1,14.41,1.05Z"></path></svg>
                            </span>
                        </Button>
                      </div>
                  </Space>
                  <Drawer
                      title="Menu"
                      placement="left"
                      // width={500}
                      onClose={onClose}
                      visible={visible}
                      extra={
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button type="primary" onClick={onClose}>
                            OK
                            </Button>
                        </Space>
                      }
                  >
                      <Menu
                        // onClick={this.handleClick} 
                        mode="inline"
                      >
                      <SubMenu key="sub1" icon={<img src='images/icons/eletronics.svg' />} title="Household appliances"> 
                          <Menu.Item key="h1"><Link to="">Computing</Link></Menu.Item>
                          <Menu.Item key="h2"><Link to="">Cell Phones &amp; Accessories</Link></Menu.Item>
                          <Menu.Item key="h3"><Link to="">Image and Sound</Link></Menu.Item>
                          <Menu.Item key="h4"><Link to="">Health and beauty</Link></Menu.Item> 
                        
                      </SubMenu>
                      <SubMenu key="sub2" icon={<img src='images/icons/computer.svg' />} title="Computing">
                        <Menu.Item key="c1">Option 5</Menu.Item>
                        <Menu.Item key="2">Option 6</Menu.Item> 
                      </SubMenu>
                      <SubMenu key="sub3" icon={<img src='images/icons/cellphone.svg' />} title="Cell Phones &amp; Accessories">
                        <Menu.Item key="pa1">Option 9</Menu.Item>
                        <Menu.Item key="pa2">Option 10</Menu.Item>
                        <Menu.Item key="pa3">Option 11</Menu.Item>
                        <Menu.Item key="pa4">Option 12</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub4" icon={<img src='images/icons/cellphone.svg' />} title="Image and Sound">
                        <Menu.Item key="is1">Option 9</Menu.Item>
                        <Menu.Item key="is2">Option 10</Menu.Item>
                        <Menu.Item key="is3">Option 11</Menu.Item>
                        <Menu.Item key="is4">Option 12</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub5" icon={<img src='images/icons/cellphone.svg' />} title="Health and beauty">
                        <Menu.Item key="hb1">Option 9</Menu.Item>
                        <Menu.Item key="hb2">Option 10</Menu.Item>
                        <Menu.Item key="hb3">Option 11</Menu.Item>
                        <Menu.Item key="hb4">Option 12</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub6" icon={<img src='images/icons/cellphone.svg' />} title="Toys and Childcare">
                        <Menu.Item key="tc1">Option 9</Menu.Item>
                        <Menu.Item key="tc2">Option 10</Menu.Item>
                        <Menu.Item key="tc3">Option 11</Menu.Item>
                        <Menu.Item key="tc4">Option 12</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub7" icon={<img src='images/icons/cellphone.svg' />} title="House and decoration">
                        <Menu.Item key="hd1">Option 9</Menu.Item>
                        <Menu.Item key="hd2">Option 10</Menu.Item>
                        <Menu.Item key="hd3">Option 11</Menu.Item>
                        <Menu.Item key="hd4">Option 12</Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub8" icon={<img src='images/icons/sport.svg' />} title="Sport and Leisure">
                        <Menu.Item key="sport1">Option 9</Menu.Item>
                        <Menu.Item key="sport2">Option 10</Menu.Item>
                        <Menu.Item key="sport3">Option 11</Menu.Item>
                        <Menu.Item key="sport4">Option 12</Menu.Item>
                      </SubMenu>



                    </Menu>


                  </Drawer>
                </div>
            </nav>
         
        </>

    )
}

export default MobileNav;
 