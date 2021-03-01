import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './Player.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Player = (props) => {
    const { image, name, country, birth, salary, age } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className='player-div container'>
            <div className='row align-items-center'>
                <div className='col-6'>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                </div>
                <div className='col-6'>
                    <h4>Country: {country}</h4>
                    <h6>Birth: {birth}</h6>
                    <h4>Age: {age}</h4>
                    <h5>Salary: ${salary}</h5>
                    <button className='btn btn-info' onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faFutbol} />Add Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;