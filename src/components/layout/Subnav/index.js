import React from 'react'; 
import './style.scss';

import { Menu, Row, Col, Dropdown } from 'antd';
import { MailOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
 


export default function index() {
    const menu = (
        <Menu className='drop__menu'>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="https://www.aliyun.com">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
    const menu2 = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item icon={<DownOutlined />} disabled>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          </Menu.Item>
          <Menu.Item disabled>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      );
    return (
        <>

            <div className="bottom__menu__wrapper bg-white py-2 d-lg-block d-none">
                <div className="container d-flex align-items-center">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link category__btn d-flex align-items-center" onClick={e => e.preventDefault()}>
                        <span>view all</span> categories
                        </a>
                    </Dropdown>
                            
                    {/* <Dropdown overlay={menu2}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                        </a>
                    </Dropdown> */}

                    <Menu mode="horizontal" className='border-0 right__panel'> 
                            <Menu.Item key="app" style={{marginLeft:'auto'}}>
                                <Link to="/search" className='nav-link'>
                                    <img src="images/icons/household-electronics.svg" alt='icon' /> 
                                    <span>Household <br/>Electro</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="accessories">
                                <Link to="/search" className='nav-link'>
                                    <img src="images/icons/cellphone.svg" /> 
                                    <span>Cell Phones & Accessories</span>
                                </Link> 
                            </Menu.Item>
                            <Menu.Item key="computing">
                                <Link to="/search" className='nav-link'>
                                    <img src="images/icons/cellphone.svg"/>
                                    <span>Computing</span>
                                </Link> 
                            </Menu.Item>
                            <Menu.Item key="sound">
                                <Link to="/search" className='nav-link'>
                                    <img src="images/icons/image-sound.svg"/>
                                    <span>Image and Sound</span>
                                </Link> 
                            </Menu.Item>
                    </Menu> 

                    {/* <ul className="navbar justify-content-center">
                        <li className="nav-item">
                            <a href="#" className='nav-link category__btn text-uppercase'><span>view all</span> categories</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>
                                <img src="images/icons/household-electronics.svg" alt='icon' /> 
                                <span>Household <br/>Electro</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>
                                <img src="images/icons/cellphone.svg" /> 
                                <span>Cell Phones & Accessories</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>
                                <img src="images/icons/cellphone.svg"/>
                                <span>Computing</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>
                                <img src="images/icons/image-sound.svg"/>
                                <span>Image and Sound</span>
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>  
            
        </>
    )
}
