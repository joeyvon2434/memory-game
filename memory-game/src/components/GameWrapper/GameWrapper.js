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
    componentDidMount() {
        this.shuffleArray(pictureData);
    }

    //Method to shuffle the input array.In this case it shuffles the pictureData array
    shuffleArray = (inputArray) => {
        console.log('Pictures Array State:');
        console.log(this.state.picturesArray);
        //creates a copy of the input array to ensure the original array is not modified 
        let tempArray = inputArray.map(picture => {
            return Object.assign({},picture);
        });
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
        //get a copy of the pictures array from state
        const tempArray = this.state.picturesArray.map(picture => picture)
        //find the index of the clicked object
        const currentIndex = tempArray.findIndex(element => {
            return element.id === id;
        });
        //check if the item has already been clicked
        if (tempArray[currentIndex].clicked === true) {
            console.log('Lose game option in handle click');
            this.resetGame(this.state.currentClicks);
        } else {
            //modify the clicked object to indicate it was clicked and add one to the click count
            console.log('continue');
            tempArray[currentIndex].clicked = true;
            let clickCount = this.state.currentClicks + 1;
            this.setState({
                currentClicks: clickCount
            });
            this.shuffleArray(tempArray);
        }
    }

    resetGame = (score) => {
        if (score > this.state.topScore) {
            console.log('High score achieved in reset game. \n Picture Data Array: ');
            //this.setAllClickedToFalse(pictureData);
            this.setState({
                picturesArray: [],
                currentClicks: 0,
                topScore: score
            });
            this.shuffleArray(pictureData);
        } else {
            console.log('High score not achieved in reset game');
            //this.setAllClickedToFalse(pictureData);
            this.setState({
                picturesArray: [],
                currentClicks: 0,
            });
            this.shuffleArray(pictureData);
        }
    }

    setAllClickedToFalse= () => {
        for (let i = 0 ; i < pictureData.Length; i++) {
            pictureData[i].clicked = false;
        };
    }

    render() {
        return (
            <div>
                <Header
                    currentClicks={this.state.currentClicks}
                    topScore={this.state.topScore}
                />
                <GameBoard
                    className="GameBoard"
                    pictures={this.state.picturesArray}
                    onClick={id => this.handleClick(id)}
                />
                <Footer />
            </div>
        );
    }
}

export default GameWrapper;