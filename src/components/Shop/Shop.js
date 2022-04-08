import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product=> product.id === id)
        }
    },[])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='grid grid-cols-3 gap-10 mx-10'>
            <div className='col-span-2 grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product> )
                }
            </div>
            <div className=' rounded bg-green-500 text-green-900 font-bold'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;