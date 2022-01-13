import React from "react";
import { Carousel } from 'antd';

import './style.scss';

 

const index = () => {
    return (
        <>
        {/* autoplay */}
            <Carousel >
                <div>
                    <a href="#" className="d-block">
                        <img src="images/slider-one.jpg" alt="product-banner" className="img-fluid w-100" />
                    </a>
                </div>
                <div>
                    <a href="#" className="d-block">
                        <img src="images/slider-two.jpg" alt="product-banner" className="img-fluid w-100" />
                    </a>
                </div>
                <div>
                    <a href="#" className="d-block">
                        <img src="images/slider-three.jpg" alt="product-banner" className="img-fluid w-100" />
                    </a>
                </div> 
            </Carousel>
        
        </>
    )
}

export default index;
