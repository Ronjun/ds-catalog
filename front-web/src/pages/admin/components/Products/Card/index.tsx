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
       <div className="col-7 py-3">
        <h3> title</h3>
       </div>
       <div className="col-3 py-3">
        <h1>action</h1>
       </div>
     </div>
    </div>
  )
}

export default Card;