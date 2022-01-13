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
                        <img src="images/banner/b1.jpg" alt="product-banner" className="img-fluid w-100" />
                    </a>
                </div>
                <div>
                    <a href="#" className="d-block">
                        <img src="images/banner/b2.jpg" alt="product-banner" className="img-fluid w-100" />
                    </a>
                </div>
                <div>
                    <a href="#" className="d-block">
                        <img src="images/banner/b3.jpg" alt="product-banner" className="img-fluid w-100" />
                    </a>
                </div> 
            </Carousel>
        
        </>
    )
}

export default index;
