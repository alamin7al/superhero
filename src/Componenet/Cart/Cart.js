import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
   
    return (
        <div>
            <h1>Order List</h1>
            <h5>Books : {cart.length}</h5>
            <h3>Total:{total}</h3>
            <h5>Writter:</h5>
        {
            cart.map(product=> <p> {product.name}</p> )
        }
          
        </div>
    );
};

export default Cart;