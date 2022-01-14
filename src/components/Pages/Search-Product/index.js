import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, Button } from "antd"; 
import { Rate } from 'antd';  
import Select from "antd/lib/select";

import Filter from "./Filter";
import Products from "../../data/products";

import "./style.scss";

const { Option } = Select;

const SearchProduct = () => {
    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Row gutter={[12, 12]}>
                        <Col lg={5} md={6}>
                            <Filter/>
                        </Col>
                        <Col lg={19} md={18}>
                            <div className="bg-light py-2 px-3 mb-3 d-flex justify-content-between align-items-center">
                                <h6 className="mb-0">23 Products found</h6>
                                <div className="d-flex">
                                    <Select defaultValue="Sort by position" className="sort">
                                        <Option value="1">Sort by Position</Option>
                                        <Option value="2">Sort by Product Name</Option>
                                        <Option value="3">Sort by Price</Option> 
                                        <Option value="4">Sort by Size</Option>
                                    </Select>
                                    <Select defaultValue="Show 12" className="show">
                                        <Option value="show12">Show 12</Option>
                                        <Option value="show24">Show 24</Option> 
                                    </Select>
                                </div>
                            </div>
                            <Row gutter={[14,20]}>
                                {
                                    Products.products.map(product => {
                                        return <Col lg={6} md={8} sm={8} key={product._id}>
                                            <Card hoverable size="small" className="d-block product__card">
                                                <div className="discount px-2 d-inline-block position-absolute top-0 end-0 bg-danger text-white">
                                                    -{product.discount}%
                                                </div>
                                                <Link to="/product-details" className="d-block text-center">
                                                    <img src={product.pimg} alt={product.pname} className="img-fluid" />
                                                </Link>
                                                <Link to="/product-details" className="fw-normal pro__title">{product.pname}</Link>
                                                <div className="rating d-flex align-items-center justify-content-between"> 
                                                    <Rate allowClear={true} defaultValue={product.arating} />
                                                    <p className="small mb-0 text-primary">{product.ratings} reviews</p>
                                                </div>
                                                <div className="price mt-2">
                                                    <span className="price fs-5 fw-medium text-accent">{product.price}</span>
                                                    <del className=" ps-4 d-inline-block text-muted">{product.pprice}</del>
                                                </div>
                                                <div className="text-center pt-2"> 
                                                    <Button type="primary" className="d-inline-flex align-items-center">
                                                        <Link to="/product-details" className="d-flex align-items-center">
                                                            <img src="images/icons/shopping-cart.png" width={16} height={16} alt="Shopping-cart" /> 
                                                            Add to cart
                                                        </Link> 
                                                    </Button>
                                                </div>
                                            </Card>
                                        </Col>
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default SearchProduct;
