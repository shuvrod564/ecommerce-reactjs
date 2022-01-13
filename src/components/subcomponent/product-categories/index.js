import React from "react";
import './style.scss';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;



const categories = [
    {
        id: 1, categoryName: 'Computing', catImage: 'images/icons/computer.svg'
    },
    {
        id: 2, categoryName: 'Cell Phones & Accessories', catImage: 'images/icons/cellphone.svg'
    },
    {
        id: 3, categoryName: 'Household Electro', catImage: 'images/icons/eletronics.svg'
    },
    {
        id: 4, categoryName: 'Image and Sound', catImage: 'images/icons/monitor.svg'
    },
    {
        id: 5, categoryName: 'Toys and Childcare', catImage: 'images/icons/childcare.svg'
    }, 
    {
        id: 6, categoryName: 'Sport and Leisure', catImage: 'images/icons/sport.svg'
    },
    {
        id: 7, categoryName: 'Health and beauty', catImage: 'images/icons/beauty.svg'
    },
    {
        id: 8, categoryName: 'Fashion and Accessories', catImage: 'images/icons/fashion.svg'
    },
    {
        id: 9, categoryName: 'Home and Decoration', catImage: 'images/icons/decoration.svg'
    },
    {
        id: 10, categoryName: 'Auto and Moto', catImage: 'images/icons/auto-moto.svg'
    },
    {
        id: 11, categoryName: 'Video Games', catImage: 'images/icons/videogames.svg'
    },
    {
        id: 12, categoryName: 'Office and Furniture', catImage: 'images/icons/furniture.svg'
    },
    {
        id: 13, categoryName: 'Books', catImage: 'images/icons/books.svg'
    },
    {
        id: 14, categoryName: 'Gastronomy and Wines', catImage: 'images/icons/wins.svg'
    },
    {
        id: 15, categoryName: 'Fuel Prices', catImage: 'images/icons/fuel.svg'
    },
    {
        id: 16, categoryName: 'Animal Pets', catImage: 'images/icons/animal-pets.svg'
    },
]

 

const index = () => {
    return (
        <>
            <div className="bg-white p-2 p-md-3 p-lg-4">
                <Row gutter={[6, 6]}>
                {
                    categories.map(category => {
                        return <Col xl={3} lg={4} md={6} sm={8} xs={8} className="d-flex"  key={category.id}>
                            <Card  size="small" hoverable bordered={false} className="bg-light w-100 rounded text-center category__card">
                                <a href="#" className="d-block">
                                    <img src={category.catImage} className="img-fluid" alt={category.categoryName} />
                                   
                                    <Meta description={category.categoryName} />
                                </a>
                            </Card> 
                        </Col>
                    })
                }
                </Row>
            </div>
        </>
    )
}

export default index;
