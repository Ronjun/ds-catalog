import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/navbar';
import Admin from './pages/admin';
import Catalog from './pages/catalog';
import Home from './pages/home';

const Routes = () =>(
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/catalog">
                <Catalog/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
        </Switch>
    </BrowserRouter>
);
export default Routes;