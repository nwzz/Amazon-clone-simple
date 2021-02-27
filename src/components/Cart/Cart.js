import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    const total= cart.reduce((total, product) => total+product.price,0);
    
    //this is the additional for cart.reduce function
    // let total = 0;
    // for(let i=0; i<cart.length;i++){
    //     const product=cart[i];
    //     total=total+product.price;
    // }
    let shipping = 0;
    if(total>35){shipping = 0;}
    else if(total>15){shipping = 4.99;}
    else if(total>0){shipping=12.99;}
    

    const tax = total/10;
    const grandTotal=total+tax+shipping;

    const mathRound = (num) =>{
        let number = num.toFixed(2);
        return Number(number);
    }
    
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Ordered Items: {cart.length}</h4>
            <h4>Shipping Cost: {shipping}</h4>
            <h4><small>Tax+Vat: {mathRound(tax)}</small></h4>
            <p>Total Price:{mathRound(grandTotal)}</p>
        </div>
    );
};

export default Cart;