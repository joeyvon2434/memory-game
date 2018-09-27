import React from "react";
import "./ScoreBoard.css";

class ScoreBoard extends React.Component {
    render () {
        return (
            <div>
                Current Score: {this.props.currentClicks}
                Top Score: {this.props.topScore}
            </div>
        );
    }
}

export default ScoreBoard;