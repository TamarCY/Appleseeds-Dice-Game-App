import react from "react";
import './GameBoard.css';
import dices from '../../Assets/images/fingers.png'
import dice1 from '../../Assets/images/dice-1.png'
import dice2 from '../../Assets/images/dice-2.png'
import dice3 from '../../Assets/images/dice-3.png'
import dice4 from '../../Assets/images/dice-4.png'
import dice5 from '../../Assets/images/dice-5.png'
import dice6 from '../../Assets/images/dice-6.png'
import win from '../../Assets/images/win.png'


const diceImages = [dices, dice1, dice2, dice3, dice4, dice5, dice6]

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
                <img className="GameBoard-dice" src={diceImages[this.props.dices[0]]} alt="dice 1" />
                <img className="GameBoard-dice" src={diceImages[this.props.dices[1]]} alt="dice 1" />
            </div>
        )
    }

    displayWinner = () => {
        return (
            <div>
                <img className="GameBoard-win" src={win} alt="trophy" />
                The winner is {this.props.winner}
            </div>
        )
    }
    render() {
        return (
            <div className="GameBoard-div">
                <button
                    className="GameBoard-new-btn"
                    id="newGame"
                    onClick={(e) => (this.props.callBack(e))}>
                    New Game
                </button>
                <div className="GameBoard-images">
                    {this.props.gameOver ?
                        this.displayWinner() :
                        this.displayDice()}
                </div>
                <div className="GameBoard-buttons">
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
                <div className="GameBoard-points">
                    You need {this.props.pointsToWin} points to win
                </div>

            </div>

        )
    }
}

export default GameBoard