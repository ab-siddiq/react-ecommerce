import React, { useEffect, useState } from 'react';
// import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // const [products, setProducts] = useProducts();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [pageCount,setPageCount] = useState(0);
    const [page,setPage] = useState(0);
    const [size,setSize] = useState(10);
console.log(pageCount,'pge')
    useEffect(() => {
        const storedCart = getStoredCart();
        for (const id in storedCart) {
            const addedProduct = products.find(product=> product._id === id)
        }
    },[])

    useEffect(() => {
        fetch(`https://shielded-caverns-52222.herokuapp.com/product?page=${page}&size=${size}`)
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [page,size])
    
    useEffect(()=>{
        fetch('https://shielded-caverns-52222.herokuapp.com/productCount')
        .then(res=>res.json())
        .then(data=>{
            const count = data.count;
            const pageCount = Math.ceil(count/10);
            setPageCount(pageCount);
        })
    },[])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
    }
    return (
        <div className='grid grid-cols-3 gap-10 mx-10'>
            <div className='col-span-2'>
                <div className=' grid grid-cols-3 gap-5'>
                    {
                        products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product> )
                    }
                   
                </div>
                <div className=' flex justify-center my-10'>
                {
                    [...Array(pageCount).keys()].map(number=><button onClick={()=>{setPage(number)}} className={page===number ? 'bg-green-700 m-1 px-2' : 'bg-green-200 px-2 m-1'}>{number}</button>)
                }
                <select className='bg-green-500 px-2' onChange={(e)=>{setSize(e.target.value)}}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
                </div>
                
            </div>
         
            <div className=' rounded bg-green-500 text-green-900 font-bold'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;