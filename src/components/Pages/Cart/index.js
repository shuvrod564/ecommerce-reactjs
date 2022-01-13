import React, { useState } from "react";

import { Content } from "antd/lib/layout/layout";
import { Row, Col, Input, Divider, Button, Card } from 'antd';
import { PlusOutlined, MinusOutlined, HeartOutlined } from '@ant-design/icons';
import Products from "../../data/products"; 
import { Link } from "react-router-dom";

import "./style.scss";

const Cart = (params) => {

    const [count, setCount]=useState(1);

    const incrementCounter = () => setCount(count + 1);
    let decrementCounter = () => setCount(count - 1);
    if (count <= 1) {
        decrementCounter = () => setCount(1);
    }


    return(
        <>
            <div className="container">
                <Content className="bg-white py-5 px-3">
                    <Divider orientation="left" plain><h4 className="fw-bold">Your Cart</h4> </Divider>
                    <Row gutter={[12, 12]}>
                        {
                            Products.products.map((product, i)=>{
                                if (i > 4) return <Col lg={8}>
                                <Card size="small" hoverable className="rounded">
                                    <div className="d-flex cart__items">
                                        <img src={product.pimg} alt={product.pname} className="img-fluid" />
                                        <div className="caption">
                                            <Link to='/product-detail' className="pname">{product.pname}</Link>
                                            <div className="mt-1">
                                                <small className="text-uppercase text-muted">Quantity:</small>
                                                <div className="d-inline-flex counter__box ps-2"> 
                                                    <Button onClick={decrementCounter}><MinusOutlined /></Button>
                                                    <Input value={count} />
                                                    <Button onClick={incrementCounter}><PlusOutlined /></Button> 
                                                </div>
                                            </div>
                                            <div className="price d-flex align-items-center mt-1">
                                                <small className="text-uppercase text-muted">price:</small>
                                                <div className="h6 fw-bold d-inline-block ps-2 mb-0 ff-roboto">{product.price}</div>
                                            </div>
                                        </div> 
                                    </div>
                                </Card>
                            </Col>
                            })
                        }
                    </Row>
                    <Divider/>
                    <div className="d-flex justify-content-between">
                        <Link to='/' className="ant-btn">Continue shopping</Link>
                        <Link to='/' className="ant-btn ant-btn-primary btn-lg">Pay</Link>
                    </div>
                </Content>
            </div>
        </>
    )
}

export default Cart;
