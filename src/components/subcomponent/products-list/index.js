import React, {useState} from "react";
import './style.scss';

import {Card, Col, Row, Button, Tree} from 'antd';
import { Rate } from 'antd';  
import { Link } from "react-router-dom";
// import products from "../../data/products";

const index = (props) => {
    // const [Product, setProduct]=useState(props.productList)
    return (
        <>
            <div className="container mt-5">
                <Card title="Deals Of The Day" extra={<a href="#">More</a>}>
                    <Row gutter={[14,20]}>
                        {
                            props.topDeals.products.map(product => {
                                return <Col lg={4} md={6} sm={8} key={product._id}>
                                    <Card hoverable size="small" className="d-block product__card">
                                        <div className="discount px-2 d-inline-block position-absolute top-0 end-0 bg-danger text-white">
                                            -{product.discount}%
                                        </div>
                                        <Link to="product-details" className="d-block text-center">
                                            <img src={product.pimg} alt={product.pname} className="img-fluid" />
                                        </Link>
                                        <Link to="product-details" className="fw-normal pro__title">{product.pname}</Link>
                                        <div className="rating d-flex align-items-center justify-content-between"> 
                                            <Rate allowClear={true} defaultValue={product.arating} />
                                            <p className="small mb-0 text-primary">{product.ratings} reviews</p>
                                        </div>
                                        <div className="price mt-2">
                                            <span className="price fs-5 fw-medium text-accent">{product.price}</span>
                                            <del className=" ps-4 d-inline-block text-muted">{product.pprice}</del>
                                        </div>
                                        <div className="text-center pt-2"> 
                                            <Button type="primary" href="/" className="d-inline-flex align-items-center">
                                                <img src="images/icons/shopping-cart.png" width={16} height={16} alt="Shopping-cart" /> 
                                                Add to cart
                                            </Button>
                                        </div>
                                    </Card>
                                </Col>
                            })
                        }
                    </Row>
                </Card>
            </div>
        </>
    )
    
}

export default index;
