import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Header from '../Header/Header';
import Order from '../Order/Order';




const Shop = () => {
    const showData = fakeData.slice(0, 10);
    // console.log(showData);
    const [product, setProduct] = useState(showData);

    const [number, setNumber] = useState([])

    const handleAdd =(product) =>{
        const increase = [...number,product] ;
        setNumber (increase)
        
    }
    
    return (
           
        <div className="shop-contain">
            <div className="product-contain">
            {product.map(data => <Product handleAdd ={handleAdd} productName ={data}></Product>)}
            
            </div>
            <div className="card-contain">
            
            <Order increase={number}></Order>
            </div>
           
            {/* <Header increase ={number.length}></Header>    */}
        </div>
       
        
    );
};

export default Shop;