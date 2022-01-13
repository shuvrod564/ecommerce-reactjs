import React from "react";

import { Tabs, Progress, Row, Col, Empty  } from "antd";
import Ratings from "./Ratings";
import "./style.scss";
const { TabPane } = Tabs;


 

const Details = () => {
    return (
        <>
            <Tabs tabPosition="top">
                <TabPane tab="Details" key="1">
                    <h6>Xiaomi Haylou LS02 Smart Watch In Bangladesh</h6>
                    <p>
                        The new Xiaomi Haylou LS02 smartwatch differs from the previous model with a large 1.4-inch touch screen. The display resolution is 320x320 pixels. The screen is placed under a curved 2.5D tempered glass that is resistant to damage. The pixel density is 320ppi.
                    </p>
                    <p>
                        Also, this smartwatch is characterized by long-term battery life. It works up to 20 days with 24-hour heart rate monitoring. The smartwatch is connected by Bluetooth 5.0. It significantly reduces power consumption and reduces the likelihood of losing communication between the smartwatch and the smartphone.
                    </p>
                    <p>
                        The smartwatch case is thin and light with a comfortable breathing silicone strap. The Xiaomi Haylou LS02 smartwatch will be indispensable in sports. Twelve built-in sports modes will help you record and analyze all data, continually monitoring your heart rate. the Xiaomi Haylou LS02 smartwatch is protected against water and dust according to industry-standard IP67.
                    </p>
                    <p>
                        Automatic sleep monitoring will help improve the quality of your sleep.
                    </p>
                    <p>
                        You can receive all notifications from your smartphone right on your wrist. Calls, received messages, calendar events, application notifications - you will not miss anything important.
                    </p>
                    <h6>12 Sport Modes</h6>
                    <p>
                        It enriches a variety of sports modes, whether it is daily hiking and sailing, you can set your sports goals, record your sports data, the operation interface is simple and easy to understand, such as personal training on the wrist to help your free exercise more self-discipline.
                    </p>
                    <h6>All-day Waiting to Know Your Heart</h6>
                    <p>
                        Xiaomi Haylou LS02 Built-in high-performance, low-power dynamic optical heart rate sensor, automatic detection and detection by the optical heart rate sensor on the back of the watch, combined with an intelligent heart rate algorithm, accurate and detailed recognition of heart rate changes, 24-hour real-time online capture of your heart, Let your heart rate change follow
                    </p>
                </TabPane>
                <TabPane tab="More Information" key="2"> 
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Product ID</th>
                                <td>PID1007952</td>
                            </tr>
                            <tr>
                                <th>Free Shipping</th>
                                <td>No</td>
                            </tr>
                            <tr>
                                <th>Special Price</th>
                                <td>£76</td>
                            </tr>
                            <tr>
                                <th>Brand</th>
                                <td>Xiaomi </td>
                            </tr>
                            <tr>
                                <th>Item model number </th>
                                <td>Haylou LS02</td>
                            </tr> 
                        </tbody>
                    </table>
                </TabPane>
                <TabPane tab="Reviews" key="3">
                    <Ratings/>
                </TabPane>
                <TabPane tab="Product Question" key="4">
                    <div className="py-5"> 
                        <Empty />
                    </div>
                </TabPane> 
            </Tabs>
        </>
    )
}

export default Details;
