import React from "react";
import "./GameWrapper.css";
import Header from "../Header";
import GameBoard from "../GameBoard";
import Footer from "../Footer";
import pictureData from "../../pictureData.json"

class GameWrapper extends React.Component {
    state = {
        picturesArray: [],
        currentClicks: 0,
        topScore: 0
    }

    //Ensure the pictureData is poulated on page load
    componentDidMount () {
        this.shuffleArray(pictureData);
    }

    //Method to shuffle the input array.In this case it shuffles the pictureData array
    shuffleArray = (inputArray) => {
        //creates a copy of the input array to ensure the original array is not modified 
        let tempArray = inputArray.map(picture => picture);
        let newPicturesArray = [];

        //Cut a random component from the array and populate a new randomized array to load into the game state
        while (tempArray.length > 0) {
        let randomPicture = tempArray.splice(Math.floor(Math.random() * tempArray.length), 1)[0];
        newPicturesArray.push(randomPicture);
        }

        //Set the state to reflect the randomized array order
        this.setState({
            picturesArray: newPicturesArray
        });
    }

    //Listens for a click event, then updates the game state based on whether the picture has been clicked or not
    handleClick = (id) => {
        console.log(`I've been clicked!!! ${id}`);
        this.shuffleArray(this.state.picturesArray);
    }

    resetGame = () => {
        this.setState({
            picturesArray: [],
            currentClicks: 0,
            topScore: 0
        });
        this.shuffleArray(pictureData);
    }

    render () {
        return (
            <div>
            <Header />
            <GameBoard pictures={this.state.picturesArray}
            onClick={id => this.handleClick(id)}
            />
            <Footer />
            </div>
        );
    }
}

export default GameWrapper;