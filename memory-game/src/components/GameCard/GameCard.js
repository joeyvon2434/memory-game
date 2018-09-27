import React from "react";
import "./GameCard.css";

const GameCard = props => (
            <div>
                <img src={props.url} alt={`This is where ${props.name} should be.` } />
            </div>
);

export default GameCard;