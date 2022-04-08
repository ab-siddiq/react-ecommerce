import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, name,img,price } = props.product;
    return (
        <div className='product bg-green-500 p-2 rounded h-auto '>
            
            <img src={img} alt="" className='rounded hover:scale-90 duration-500' />
            <div className='my-2 text-green-900 font-bold'>
                <h5>{name}</h5>
                <h5>${price}</h5>
                {/* <h5>{id}</h5> */}
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='bg-green-700 font-bold hover:bg-green-900 hover:scale-y-105 duration-100 text-green-200 w-full rounded  py-2 bottom-0'>Add To Cart  </button>
            
        </div>
    );
};

export default Product;