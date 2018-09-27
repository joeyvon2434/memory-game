import React from "react";
import "./GameBoard.css";
import GameCard from "../GameCard";


class GameBoard extends React.Component {
  
   render () {
       console.log(this.props.pictures);
       return (
            <div>
                {this.props.pictures.map(picture => ( 
                <GameCard 
                    id={picture.id}
                    key={picture.key}
                    name={picture.name}
                    url={picture.url}
                    clicked={picture.clicked}
                />
                )
                )}
            </div>
       );
   }
}

export default GameBoard;


// id={picture.id}
// key={picture.key}
// url={picture.url}
// clicked={picture.clicked}
// name={picture.name}