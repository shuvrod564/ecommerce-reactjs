import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes, useRoutes 
} from "react-router-dom";

import HomePage from './homepage';
import SearchPage from './search-product';
import ProductDetails from './Product-details';

const Routing = () => {
    const routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: 'search', element: <SearchPage /> },
        { path: 'product-details', element: <ProductDetails /> },
        // { path: 'galerija', element: <Gallery /> },
        // { path: 'cjenovnik', element: <Prices /> },
        // { path: 'kontakt', element: <Contact /> }
    ]);

    return routes;
    // return (
    //     <>
    //         <Routes>
    //             <Route exact path="/" component={HomePage} />
    //         </Routes>
    //     </>
    // )
}

export default Routing;
