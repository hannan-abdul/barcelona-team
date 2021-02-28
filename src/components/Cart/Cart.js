import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    console.log(cart)

    let yearlyEarning = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        yearlyEarning = yearlyEarning + player.salary;  
    }
    return (
        <div>
            <h2>Total Added: {cart.length}</h2>
            <h3>Earning: ${yearlyEarning}</h3>
        </div>
    );
};

export default Cart;