import React from "react";
import './style.scss';
import {Row, Col} from 'antd';

const index = () => {
    return (
        <>
            <div className="sell__details my p-2 bg-white">
                <Row gutter={[10, 10]} justify="center">
                    <Col lg={6} md={8} sm={12} xs={24} className="">
                        <div className="sell__detail__card p-3 d-flex align-items-center">
                            <img src="images/sell-details/rocat.png" alt="Free Delivery" />
                            <div className="caption">
                                <h5>Free Delivery</h5>
                                <p className="mb-0 small text-muted">For orders over 10,000Tk*</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={8} sm={12} xs={24} className="">
                        <div className="sell__detail__card divider p-3 d-flex align-items-center">
                            <img src="images/sell-details/refresh.png" alt="Return" />
                            <div className="caption">
                                <h5>3 Days Return</h5>
                                <p className="mb-0 small text-muted">If goods have problems</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={8} sm={12} xs={24} className="">
                        <div className="sell__detail__card divider p-3 d-flex align-items-center">
                            <img src="images/sell-details/card.png" alt="Return" />
                            <div className="caption">
                                <h5>Secure Payment</h5>
                                <p className="mb-0 small text-muted">100% secure payment</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={8} sm={12} xs={24} className="">
                        <div className="sell__detail__card divider p-3 d-flex align-items-center">
                            <img src="images/sell-details/chat.png" alt="Return" />
                            <div className="caption">
                                <h5>10am-6pm Support</h5>
                                <p className="mb-0 small text-muted">Dedicated support</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default index;







