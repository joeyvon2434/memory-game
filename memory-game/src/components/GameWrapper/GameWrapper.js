import React from "react";
import "./GameWrapper.css";
import Header from "../Header";
import GameBoard from "../GameBoard";
import Footer from "../Footer";

class GameWrapper extends React.Component {
    state = {
        picturesArray: [1,2,3],
        currentClicks: 0,
        topScore: 0
    }

    componentDidMount () {
        this.shuffleArray();
    }

    shuffleArray = () => {
        let tempArray = this.state.picturesArray.map(picture => picture);
        console.log(`Temp Array: ${tempArray}`);
        let newPicturesArray = [];

        //cut a random component from the array


        this.setState({
            picturesArray: [4,5,6]
        });
    }

    handleClick = () => {

    }

    resetGame = () => {

    }

    render () {
        return (
            <div>
            <Header />
            <GameBoard />
            <Footer />
            </div>
        );
    }
}

export default GameWrapper;