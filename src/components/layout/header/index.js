import React from 'react' 

import SubNav from '../Subnav';
import './style.scss'; 

import { Menu, Dropdown } from 'antd';
import { Input, Space } from 'antd'; 
import { Link } from 'react-router-dom'; 


const { Search } = Input;

const menu = (
    <Menu>
      <Menu.Item key="1"><Link to='/'>Login</Link></Menu.Item>
      <Menu.Item key="2"><Link to='/'>Register</Link></Menu.Item> 
    </Menu>
  );
 
const HeaderNav = () => { 
    return (
        <div>
            <div className='top__nav py-1 d-none d-lg-block'> 
                <div className='container'>
                    <ul className='navbar'>
                        <li>
                            <Link to="/"><img src='images/logo.png' alt='logo' height={35} /></Link>
                        </li>
                        <li>
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                className='main__search__box' 
                            />
                        </li>
                        <li>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link btn user__btn" onClick={e => e.preventDefault()}>
                                    <span>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.02 29.02"><defs><style></style></defs><path className="cls-1" d="M14.52,29A14.51,14.51,0,1,1,29,14.62,14.36,14.36,0,0,1,14.52,29Zm9.5-5.1A13.31,13.31,0,0,0,14,1.22a13.28,13.28,0,0,0-12.3,9.4A13,13,0,0,0,5,23.82c.7-.8,1.3-1.6,2-2.4s1.6-1.3,2.4-2a7.8,7.8,0,0,1-.5-11.1,7.79,7.79,0,0,1,10.3-.7,7.47,7.47,0,0,1,2.8,4.9,7.4,7.4,0,0,1-2.6,6.9A12.43,12.43,0,0,1,24,23.92Zm-18.1.8c.1.1.2.2.3.2a13.39,13.39,0,0,0,16.8-.1c.2-.2.2-.3.1-.5a11.81,11.81,0,0,0-3.9-3.8.93.93,0,0,0-1.3,0l-.6.3c-.6.2-.9.2-1-.2s0-.6.6-.8a6.57,6.57,0,0,0,4.1-7.4,6.5,6.5,0,1,0-11.8,4.9,6.56,6.56,0,0,0,3.3,2.6c.4.2.6.4.5.8s-.4.4-.8.3a6.12,6.12,0,0,0-1.2-.5.3.3,0,0,0-.4,0A9.19,9.19,0,0,0,5.92,24.72Z"></path></svg>
                                    </span>
                                </a>
                            </Dropdown> 

                            <Link to="" type='text' className='btn user__btn'>
                                <span>
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 51.54"><title>Cart Items</title><path d="M19.77,47.49a4.06,4.06,0,1,0,4.05-4.05A4.05,4.05,0,0,0,19.77,47.49ZM53.9,43.44a4,4,0,1,1-4,4.05A4.05,4.05,0,0,1,53.9,43.44ZM14.41,1.05l9.64,33.24a1.46,1.46,0,0,0,1.4,1.05H51.51a1.48,1.48,0,0,0,1.37-.94l5.58-14.63a1.46,1.46,0,0,1,1.36-.94h2.72a1.46,1.46,0,0,1,1.36,2l-7.43,19a1.46,1.46,0,0,1-1.36.93H21.44A1.46,1.46,0,0,1,20,39.69L10.3,6.45a1.46,1.46,0,0,0-1.4-1H2.38A1.45,1.45,0,0,1,1,4.45L.09,2A1.46,1.46,0,0,1,1.46,0H13A1.46,1.46,0,0,1,14.41,1.05Z"></path></svg>
                                </span>
                            </Link>
                        </li> 
                    </ul> 
                </div>
                {/* ------ Sub Header ------------- */}
            </div>
            <SubNav />
        </div>
    )
}

export default HeaderNav;