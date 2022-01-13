import React from 'react';

import HeaderSLider from '../subcomponent/header-banner';
import ProCategories from '../subcomponent/product-categories';
import SellDetails from '../subcomponent/sell-details';
import TodayDeal from '../subcomponent/products-list';
import BestSeller from '../subcomponent/best-seller/ProductCard';
import TopCategories from '../subcomponent/top-categories';
 
import productList from '../data/products';
import categories from '../data/categories';

export default function index() {
    return (
        <div>
            {/* ---- Header Carousel Section ---------- */}
            <header className="header__wrapper">
                <div className="container">
                    <HeaderSLider />
                    {/* Product Categories */}
                    <ProCategories />

                    {/* ----- Selling Details ----- */}
                    {/* <SellDetails />  */}
 
                </div>
            </header>

            {/* Todays Details */} 
            <TodayDeal topDeals={productList} />

            <section className='mt-5'>
                <div className='container'>
                    <a href='#'>
                        <img src='images/banner-2.jpg' className='img-fluid' />
                    </a>
                </div>
            </section>

            <BestSeller proList={productList} />

            <TopCategories catList={categories} />

        </div>
    )
}
