import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, name,img,price } = props.product;
    return (
        <div className='product'>
            
            <img src={img} alt="" className='product-image' />
            <div>
                <h5>{name}</h5>
                <h5>${price}</h5>
                <h5>{id}</h5>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>Add To Cart  </button>
            
        </div>
    );
};

export default Product;