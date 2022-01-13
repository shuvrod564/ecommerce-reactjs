import React, {useState} from "react";
import { Col, Row, Tabs, Rate, List, Input, Divider, Button  } from "antd"; 
import { PlusOutlined, MinusOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import Details from "./Details";
import BestSeller from '../../subcomponent/Best-Seller';
import TopCategories from "../../subcomponent/Top-Categories";
// import productList from '../data/products';



import './style.scss'; 
const { TabPane } = Tabs; 

const ProductDetails = (params) => {

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=1) {
        decrementCounter = () => setCounter(1);
    }


    return(
        <>
            <section className=" pt-5">
                <div className="container">
                    <div className="bg-white py-5 px-4"> 
                        <Row gutter={[12,12]}>
                            <Col md={8}>
                                <div className="p__details__box"> 
                                    <Tabs tabPosition="left">
                                        <TabPane tab={<img src="images/pd/1.jpg" className="thumbnail" alt="product-image"/>} key="1">
                                            <img src="images/pd/1.jpg" className="img-fluid" alt="product-image"/> 
                                        </TabPane>
                                        <TabPane tab={<img src="images/pd/2.jpg" className="thumbnail" alt="product-image"/>} key="2">
                                            <img src="images/pd/2.jpg" className="img-fluid" alt="product-image"/>
                                        </TabPane>
                                        <TabPane tab={<img src="images/pd/3.jpg" className="thumbnail" alt="product-image"/>} key="3">
                                            <img src="images/pd/3.jpg" className="img-fluid" alt="product-image"/>
                                        </TabPane>
                                        <TabPane tab={<img src="images/pd/4.jpg" className="thumbnail" alt="product-image"/>} key="4">
                                            <img src="images/pd/4.jpg" className="img-fluid" alt="product-image"/>
                                        </TabPane>
                                        <TabPane tab={<img src="images/pd/5.jpg" className="thumbnail" alt="product-image"/>} key="5">
                                            <img src="images/pd/5.jpg" className="img-fluid" alt="product-image"/>
                                        </TabPane>
                                    </Tabs>
                                </div>
                            </Col>
                            <Col md={16}>
                                <div className="p__details__desc">
                                    <h5>Xiaomi Haylou LS02 Smartwatch Waterproof 1.4 Inch HD Screen Bluetooth 5.0 Smart Watch - Black (Global Version)</h5>
                                    <div><span className="h3 fw-bold text-primary pe-3 d-inline-block">£96</span> <del className="text-muted fw-medium">£110</del></div> 
                                    <div className="rating d-inline-flex align-items-end justify-content-between"> 
                                        <Rate allowClear={true} defaultValue='4' />
                                        <p className="small mb-0 text-muted ps-3">4 reviews</p>
                                    </div>

                                    <h6 className="mt-3 mb-1">About this item </h6>
                                    <List size="small" className="disc__list">
                                        <List.Item>Battery Capacity: 260mAh</List.Item>
                                        <List.Item>Band Material: TPU</List.Item>
                                        <List.Item>Screen Type: 2.5D Capacitive Touch Panel</List.Item>
                                        <List.Item>Package Contents: 1 x Smart Watch, 1 x Charging Cable, 1 x English Manual</List.Item>
                                        <List.Item>Screen Resolution : 320 x 320</List.Item>
                                        <List.Item>Bluetooth Version: Bluetooth 5.0</List.Item>
                                    </List>
                                    <Divider></Divider>
                                    <div className="d-flex align-items-end">
                                        <div>
                                            <small>Quantity:</small>
                                            <div className="d-flex counter__box"> 
                                                <Button onClick={incrementCounter}><PlusOutlined /></Button> 
                                                <Input value={counter} />
                                                <Button onClick={decrementCounter}><MinusOutlined /></Button>
                                            </div>
                                        </div>
                                        <Button type="primary" className=""><Link to="/cart"><img src="images/icons/shopping-cart1.png" width={16} height={16} alt="Shopping-cart" /> Add to cart</Link></Button>
                                        <Button type="primary" className="btn-warning"><Link to="/"><HeartOutlined /> Add to wishlist</Link></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                        <Divider></Divider>
                        <Details />
                    </div>
                </div>
            </section>


            <BestSeller />

            <TopCategories />
        </>
    )
}

export default ProductDetails;





