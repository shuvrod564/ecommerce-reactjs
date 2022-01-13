import React from 'react';
import {Link} from 'react-router-dom';

import { Content } from 'antd/lib/layout/layout';
import { Col, Row, List, Card, Divider } from 'antd';

import './style.scss';

const Footer = (params) => {
    return (
        <>
            <footer className='bg-white pt-5 pb-3'>
                <Content className='container'>
                    <Row gutter={[12, 12]}>
                        <Col lg={6}>
                            <h4 className='fs-6 mb-3'>Contact Us</h4>
                            <small className='text-muted d-block pe-lg-4'>
                            Shop: G3, Ground Floor, House# 307,
                            Elephant Road, Pubali Bank/Vorta-Vaji Restaurant Building, Dhaka-1205
                            (Everyday 9am-11pm)
                            Mail us: info [at] bdshop.com
                            </small>
                        </Col>
                         
                        <Col lg={4} md={8} sm={8} xs={12}>
                            <h4 className='fs-6 mb-3'>Pages</h4>
                            <List size="small" bordered={false}>
                                <List.Item><Link to="/">Home</Link></List.Item>
                                <List.Item><Link to="/">Shop</Link></List.Item>
                                <List.Item><Link to="/">Order</Link></List.Item>
                                <List.Item><Link to="/">Contact Us</Link></List.Item> 
                            </List> 
                        </Col>
                        <Col lg={4} md={8} sm={8} xs={12}>
                            <h4 className='fs-6 mb-3'>Company</h4>
                            <List size="small" bordered={false}>
                                <List.Item><Link to="/">About Us</Link></List.Item>
                                <List.Item><Link to="/">Team Member</Link></List.Item>
                                <List.Item><Link to="/">Carrer</Link></List.Item>
                                <List.Item><Link to="/">Contact Us</Link></List.Item>
                                <List.Item><Link to="/">Affiliate</Link></List.Item>
                            </List> 
                        </Col>
                        <Col lg={4} md={8} sm={8} xs={12}>
                            <h4 className='fs-6 mb-3'>Information</h4>
                            <List size="small">
                                <List.Item><Link to="/">Terms & Conditions</Link></List.Item>   
                                <List.Item><Link to="/">Privacy Policy</Link></List.Item>
                                <List.Item><Link to="/">Shipping or Delivery</Link></List.Item>
                                <List.Item><Link to="/">Site Map</Link></List.Item> 
                            </List> 
                        </Col> 
                        <Col lg={6} md={24} sm={24} xs={12}>
                            <h4 className='fs-6 mb-3'>Payment Partner</h4>
                            <Row gutter={[0,0]} className='payment__wrapp'>
                                <img src='images/payment/visa.png' alt='visa-card' />
                                <img src='images/payment/mastercard.png' alt='master-card' />
                                <img src='images/payment/paypal.png' alt='paypal-card' />
                                <img src='images/payment/skrill.png' alt='skrill-card' />
                                <img src='images/payment/western_union.png' alt='western_union-card' />
                                <img src='images/payment/google_wallet.png' alt='google_wallet-card' />
                                <img src='images/payment/ebay.png' alt='ebay-card' />
                                <img src='images/payment/cirrus.png' alt='cirrus-card' />
                                <img src='images/payment/discover.png' alt='discover-card' />
                                <img src='images/payment/maestro.png' alt='maestro-card' />
                            </Row> 
                        </Col>
                         

                    </Row>

                    <Divider/>
                    <small className='d-block text-center text-muted'>© 2014-2022 SHOP.MY. All Rights Reserved</small>
                </Content>
            </footer>
        </>
    )
}
export default Footer;