import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const cart = props.cart;
    // console.log(cart)

    let yearlyEarning = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        yearlyEarning = yearlyEarning + player.salary;  
    }

    return (
        <div>
            <h3>Player Added: {cart.length}</h3>
            <h3>Selected Player</h3>
            <ul>
                {
                    cart.map(carts => <li>{carts.name}: ${carts.salary}</li>)
                }
            </ul>
            <h4>Total Budget: ${yearlyEarning}</h4>
        </div>
    );
};

export default Cart;