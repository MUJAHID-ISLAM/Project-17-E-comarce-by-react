import React from 'react';
import logo from '../../images/logo.png';
import car from '../../images/car.png';
import './Header.css'
const Header = (props) => {
    const name = props.increase;
    console.log('object', name);

    return (
        <div className='header'>
           <img src={logo} alt=""/>
            <nav>
                <a href="shop">Shop:{name}</a>
                <a href="order review">Order Review</a>
                <a href="manage">Manage inventory here</a>
            </nav>
            <div className="searchS">
                <input type="text" name="" placeholder="type here to search" id=""/ >
               
                    <img src={car} alt=""/>
                     <span>count:{name}</span>

            </div>
        </div>
       
    )
}


export default Header;
           
           