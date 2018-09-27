import React from "react";
import "./ScoreBoard.css";

class ScoreBoard extends React.Component {
    render () {
        return (
            <div className="ScoreBoard">
                <div>Current Score: {this.props.currentClicks}</div>
                <br />
                <div>Top Score: {this.props.topScore}</div>
            </div>
        );
    }
}

export default ScoreBoard;