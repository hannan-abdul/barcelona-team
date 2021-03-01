import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import playerData from '../data/data.json'
import './Team.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

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

    return (
        <div className='team-container container'>
            <img src="data:image/png;base64,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" alt="" />
            <h2>Barcelona Team: {players.length} Player</h2>
            <div className='player-container row'>
                <div className='col-9 player-card'>
                    {
                        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
                    }
                </div>
                <div className='col-3 fix-position'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Team;