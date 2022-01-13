import React from 'react';

import HeaderSLider from '../../subcomponent/Header-Banner';
import ProCategories from '../../subcomponent/Product-Categories';
import SellDetails from '../../subcomponent/Sell-Details';
import TodayDeal from '../../subcomponent/Products-List';
import BestSeller from '../../subcomponent/Best-Seller';
import TopCategories from '../../subcomponent/Top-Categories';
  

export default function Homepage() {
    return (
        <div>
            {/* ---- Header Carousel Section ---------- */}
            <header className="header__wrapper">
                <div className="container">
                    <HeaderSLider />
                    {/* Product Categories */}
                    <ProCategories />

                    {/* ----- Selling Details ----- */}
                    <SellDetails /> 
 
                </div>
            </header>

            {/* Todays Details */} 
            <TodayDeal />

            <section className='mt-5'>
                <div className='container'>
                    <a href='#'>
                        <img src='images/banner-2.jpg' className='img-fluid' />
                    </a>
                </div>
            </section>

            <BestSeller />

            <TopCategories />

        </div>
    )
}
