import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <Link to='/admin/products' className="mr-5">
        listar
      </Link>
      <Link to='/admin/products/create' className="mr-5">
        criar
      </Link>
      <Link to='/admin/products/19' className="mr-5">
        editar
      </Link>
      <Switch>
        <Route path="/admin/products" exact >
          <h1>Listagem de prod</h1>
        </Route>
        <Route path="/admin/products/create">
          <h1>criar novo prod</h1>
        </Route>
        <Route path="/admin/products/:productId">
          <h1>editar um prod</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Products;