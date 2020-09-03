import React from 'react';

import './Product.css';
import addImg from '../../images/car2.png'
const Product = (props) => {
    const {name, img, price, stock, seller} = props.productName;
    
    return (
        <div className="components">
            <div className="leftImg">
            <img src={img} alt=""/>
            </div>

            <div className="rightCards">
            <h3>{name}</h3>
            <p id ="brand">Brand: {seller}</p>
            <p>$ {price}</p>
             <p>only <spin id="stock">{stock} </spin> left in stock - order soon </p>
            <button className="AddButton" onClick={() => props.handleAdd(props.productName)}><img src={addImg} alt=""/>Add to cart</button>
            
            {/* {props.productName.features.map(re => console.log(re))} */}
            </div>
        
        
        </div>
    );
};

export default Product;