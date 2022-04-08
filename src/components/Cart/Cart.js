import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    
   
    let totalPrice = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    tax = parseFloat((totalPrice * .2).toFixed(2));
    grandTotal = (totalPrice + shipping + tax).toFixed(2);
   
    return (
        <div className='sticky top-20 p-2 '>
            <h4>Order Summary</h4>
            <p>Product: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Shipping Price: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;