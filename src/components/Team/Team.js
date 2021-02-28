import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import playerData from '../data/data.json'

const Team = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        setPlayers(playerData);
        // console.log(playerData);
    }, [])

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    };
    const divStyle = { display: 'flex' };
    return (
        <div >
            <h2>Total Players: {players.length}</h2>
            <div style={divStyle}>
                <div style={{width: '70%'}}>
                    {
                        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Team;