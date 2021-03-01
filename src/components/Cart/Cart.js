import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    console.log(cart)

    let yearlyEarning = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        yearlyEarning = yearlyEarning + player.salary;  
    }

    let playerName = '';
    for (let i = 0; i < cart.length; i++) {
        const name = cart[i];
        playerName = playerName+name.name;
    }
    return (
        <div>
            <h2>Player Added: {cart.length}</h2>
            <h3>Total: ${yearlyEarning}</h3>
            <p>{playerName}</p>
        </div>
    );
};

export default Cart;