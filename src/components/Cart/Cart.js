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
        <div className='playerDetails'>
            <h3>Player Added: {cart.length}</h3>
            <h3>Selected Player:</h3>
            <ul>
                {
                    cart.map(singleName => <li>{singleName.name}: ${singleName.salary}</li>)
                }
            </ul>
            <h4>Total Budget: ${yearlyEarning}</h4>
        </div>
    );
};

export default Cart;