import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart);
   
    let totalPrice = 0;
   
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Product: {cart.length}</p>
            <p>Total Price: {}</p>
            <p>Shipping Price: </p>
            <p>Tax: </p>
            <p>Grand Total: </p>
        </div>
    );
};

export default Cart;