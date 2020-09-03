import React from 'react';

const Order = (props) => {
    console.log(props.increase);
    const item = props.increase
    // const total = item.reduce((add , count) => add + count.price , 0)
    let add = 0;
    for (let i = 0; i < item.length; i++) {
        const element = item[i];
        add = add + element.price
    }
    let shipping = 0;
    if (add > 35){
        shipping = 0
    }else if (add > 15){
        shipping = 5
    }else if (add > 0){
        shipping = 10
    }

    let tax = add / 5;
  
   const forMate = (num => {
       const convert = num.toFixed(2)
       return Number(convert)
   })
    return (
        <div>
           <h2>Order summary</h2>
             <h3>item Order : {item.length} </h3>  
             <div className="item">
            <p>ShippingCosts:{forMate(shipping)}</p>
            <p>Tax: {forMate(tax)}</p>
            <p>total price: {forMate(add+ shipping+ tax)}</p>
                
             </div>
        </div>
    );
};

export default Order;