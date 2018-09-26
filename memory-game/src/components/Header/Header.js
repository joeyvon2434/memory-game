import React from "react";
import "./Header.css";
import ScoreBoard from "../ScoreBoard";
import Title from "../Title";
import Instructions from "../Instructions";

class Header extends React.Component {
    render() {
        return (
            <div>I am a header
                <Instructions />
                <Title />
                <ScoreBoard />
            </div>
        );
    }
}
export default Header;