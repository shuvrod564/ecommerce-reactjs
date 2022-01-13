import React, { useState } from "react";

import { Card, Button, Rate } from "antd";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ProductCard = (props) => {
    // const proListProps = props.proList;
    // console.log(props.proList);
    // const [Product, setProduct] = useState(props.proList);
    // console.log(Product);

    const options = {
        items: 5,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        margin:15,
        responsiveClass:true,
        responsive:{
            576:{
                items: 1
            },
            768: {
                items:3
            },
            992: {
                items:4
            },
            1200: {
                items:5
            },
            1400: {
                items: 6
            }
        }
        // navText: ["<i class='fa fa-angle-left position-center'></i>", "<i class='fa fa-angle-right position-center'></i>"],
         
    };

    return (
        <>
            <section className="my-5 ">
                <div className="container"> 
                    <Card title="Best Seller" extra={<a href="#">More</a>}>
                        <OwlCarousel className='owl-theme' {...options}>
                            {
                                props.proList.products.map((pro, i) =>{
                                    if(i < 8) return <Card hoverable size="small" className="d-block product__card" key={pro._id}>
                                    <div className="discount px-2 d-inline-block position-absolute top-0 end-0 bg-danger text-white">
                                        -{pro.discount}%
                                    </div>
                                    <a href="#" className="d-block text-center">
                                        <img src={pro.pimg} alt={pro.pname} className="img-fluid" />
                                    </a>
                                    <a href="#" className="fw-normal pro__title">{pro.pname}</a>
                                    <div className="rating d-flex align-items-center justify-content-between"> 
                                        <Rate allowClear={true} defaultValue={pro.arating} />
                                        <p className="small mb-0 text-primary">{pro.ratings} reviews</p>
                                    </div>
                                    <div className="price mt-2">
                                        <span className="price fs-5 fw-medium text-accent">{pro.price}</span>
                                        <del className=" ps-4 d-inline-block text-muted">{pro.pprice}</del>
                                    </div>
                                    <div className="text-center pt-2"> 
                                        <Button type="primary" href="/" className="d-inline-flex align-items-center">
                                            <img src="images/icons/shopping-cart.png" width={16} height={16} alt="Shopping-cart" /> 
                                            Add to cart
                                        </Button>
                                    </div>
                                </Card>
                                    })
                            }
                            
                        </OwlCarousel> 
                    </Card>
                    




                </div>
            </section>
        </>
    )
}
export default ProductCard;
