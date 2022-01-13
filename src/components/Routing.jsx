import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes, useRoutes 
} from "react-router-dom";

import HomePage from './Pages/Homepage';
import SearchPage from './Pages/Search-Product';
import ProductDetails from './Pages/Product-details';
import Cart from './Pages/Cart';

const Routing = () => {
    const routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: 'search', element: <SearchPage /> },
        { path: 'product-details', element: <ProductDetails /> },
        { path: 'cart', element: <Cart /> }
    ]); 
    return routes; 
}

export default Routing;
