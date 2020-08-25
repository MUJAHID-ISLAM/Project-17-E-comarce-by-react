import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
// import Header from '../Header/Header';




const Shop = () => {
    const showData = fakeData.slice(0, 12);
    const [product, setProduct] = useState(showData);

    const [number, setNumber] = useState([])

    const handleAdd =(product) =>{
    
        const increase = [...number,product] ;
        setNumber (increase)
        console.log( product);
    }
    console.log(number);
    return (
           
        <div className="shop-contain">
            <div className="product-contain">
            {product.map(data => <Product handleAdd ={handleAdd} productName ={data}></Product>)}
    
            </div>
            <div className="card-contain">
            <h2>Order summary</h2>
             <h4>list of item: {number.length}</h4> 

            </div>
            {/* <Header increase ={number.length}></Header>  */}
            
        </div>
          
        
    );
};

export default Shop;