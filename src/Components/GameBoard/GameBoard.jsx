import react from "react";
// import Dice from "../../../Common/Dice/Dice";
import './GameBoard.css'


class GameBoard extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            dice1: 0,
            dice2: 0
        }
    }
    displayDice = () => {
        return (
            <div>
                <div className="GameBoard-dice">{this.props.dices[0]}</div>
                <div className="GameBoard-dice">{this.props.dices[1]}</div>
            </div>
        )
    }

    displayWinner = () => {
        return (
            <div>
                The winner is {this.props.winner}
            </div>
        )
    }
    render() {
        return (
            <div className="GameBoard-div">
                <div>GameBoard {this.props.test}
                </div>
                <div>
                    {this.props.gameOver ?
                        this.displayWinner() :
                        this.displayDice()}
                </div>
                <button
                    className="GameBoard-new-btn"
                    id="newGame"
                    onClick={(e) => (this.props.callBack(e))}>
                    New Game
                </button>
                <button
                    disabled={this.props.gameOver}
                    className="GameBoard-roll-btn"
                    id="rollDice"
                    onClick={(e) => (this.props.callBack(e))}>
                    Roll
                </button>
                <button
                    disabled={this.props.gameOver}
                    className="GameBoard-hold-btn"
                    id="hold"
                    onClick={(e) => (this.props.callBack(e))}>
                    Hold
                </button>

            </div>
            //TODO: dice component
            // TODO: is it better to send one call back function to all the buttons or its better one for each?
        )
    }
}

export default GameBoard