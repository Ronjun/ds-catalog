import ProductPrice from 'core/components/ProductPrice';
import React from 'react';
import './styles.scss';

const Card = () => {
  return (
    <div className="card-base product-card-admin">
     <div className="row">
       <div className="col-2 text-center border-right py-3">
        <img 
          src="https://img.ibxk.com.br/2020/11/13/13163501739363.jpg?w=704&h=264&mode=crop&scale=both"
          alt='test'
          className= "product-card-image-admin"
        />   
       </div>
       <div className="col-7 pt-3">
        <h3 className="product-card-name=admin"> title</h3>
        <ProductPrice price = {300}/>
       </div>
       <div className="col-3 py-3 pr-5">
        <button
          type="button"
          className="btn btn-outline-secondary btn-block border-radius-10 mb-3 btn-edit"
        >
          EDITAR
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-block border-radius-10 "
        >
          EXCLUIR
        </button>
       </div>
     </div>
    </div>
  )
}

export default Card;