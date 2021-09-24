import React from 'react'
import SingleSource from '../../../SingleSource/SingleSource';
import BtnRender from './BtnRender'


function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
      <div className="product_card">
        {isAdmin && (
          <input
            type="checkbox"
            checked={product.checked}
            onChange={() => handleCheck(product._id)}
          />
            )}
            <h3 className="view">Click view for more images</h3>
            
              
           <SingleSource src={product.images.url} alt="" />
            
            
       
        

        <div className="product_box">
          <h5 title={product.title}>{product.title}</h5>
         
          <p>{product.description}</p>
          <span>${product.price}</span>
          
        </div>

        <BtnRender product={product} deleteProduct={deleteProduct} />
      </div>
    );
}

export default ProductItem
