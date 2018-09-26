import React from "react";
import "./GameBoard.css";
import GameCard from "../GameCard";


class GameBoard extends React.Component {
    render () {
        return (
            <div>Game Board doing what a gameboard does
                <GameCard />
            </div>
        );
    }
}

export default GameBoard;