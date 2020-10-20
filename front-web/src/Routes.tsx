import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/navbar';
import Admin from './pages/admin';
import Catalog from './pages/catalog';
import ProductDetails from './pages/catalog/components/ProductDetails';
import Home from './pages/home';

const Routes = () =>(
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/products" exact>
                <Catalog/>
            </Route>
            <Route path="/products/:productId">
                <ProductDetails/>
            </Route>
            <Route path="/admin">
                <Redirect to="/admin/products"/>
                <Admin/>
            </Route>
        </Switch>
    </BrowserRouter>
);
export default Routes;