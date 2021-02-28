import React from 'react';

const Player = (props) => {
    const playerStyle = {border: '1px solid black', margin: '10px', padding: '10px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style={playerStyle}>
            <h3>Name: {props.player.name}</h3>
            <h4>Country: {props.player.country}</h4>
            <h4>Birth: {props.player.birth}</h4>
            <p>Salary: ${props.player.salary}</p>
            <button style={{cursor: 'pointer'}} onClick={() => handleAddPlayer(props.player)}>Add Details</button>
        </div>
    );
};

export default Player;