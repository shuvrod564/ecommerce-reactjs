import React from "react";

import { Tabs, Progress, Row, Col  } from "antd";

import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `Ziaur Rahman ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'It’s about as good as this could get',
    content:
      'Design and Battery back-up is decent good. Only heart rate sensor is present. If you need a simple look smartwatch you can choose it.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ratings = [
    {
        _id: '1',
        name: '5 star',
        parcent: '80'
    },
    {
        _id: '2',
        name: '4 star',
        parcent: '40'
    },
    {
        _id: '3',
        name: '3 star',
        parcent: '30'
    },
    {
        _id: '4',
        name: '2 star',
        parcent: '10'
    },
    {
        _id: '5',
        name: '1 star',
        parcent: '0'
    },
]

const Ratings = (params) => {
    return(
        <>
            <Row gutter={[12,24]}>
                        <Col lg={8} xxl={6}> 
                            <h5>Customer Reviews</h5>
                            <div></div>
                            {
                                ratings.map(rate=>{
                                    return <div className="d-flex rating__list" key={rate._id}>
                                        <span className="name">{rate.name}</span>
                                        <Progress percent={rate.parcent} status="active" />
                                    </div>
                                })
                            }
                        </Col>
                        <Col lg={16}>
                            <List className="ps-lg-5"
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                onChange: page => {
                                    console.log(page);
                                },
                                    pageSize: 3,
                                }}
                                dataSource={listData}
                                
                                renderItem={item => (
                                    <List.Item 
                                        key={item.title}
                                        actions={[
                                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                        ]} 
                                    >
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                   
                                    {item.content}
                                </List.Item>
                                )}
                            />
                        </Col>
                    </Row> 
        </>
    )
}

export default Ratings;
