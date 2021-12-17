import react from "react";
import GameBoard from "../../Components/Player/GameBoard/GameBoard";
import Player from "../../Components/Player/Player/Player";
import "./GameApp.css"

const DICE_MIN = 1;
const DICE_MAX = 6;
class GameApp extends react.Component {
    constructor() {
        super();
        this.state = {
            pointsToWin: 100,
            dices: [null, null],
            gameOver: false,
            players: {
                player1: {
                    id: 1,
                    currentScore: 5,
                    sumScore: 0,
                    isActive: true,
                    isWinner: false
                },
                player2: {
                    id: 2,
                    currentScore: 2,
                    sumScore: 0,
                    isActive: false,
                    isWinner: false
                }
            }
        }
    }

    callBackFunctions = (event) => {
        event.target.id === "newGame" && this.newGame();
        event.target.id === "rollDice" && this.rollDice();
        event.target.id === "hold" && this.hold();
    }
    
    newGame = () => {
        this.setState((prevState) => ({
            players: {
                ...prevState.players,  // copy all other key-value pairs of object inside players (here the aren't any)
                player1: {
                    ...prevState.player1,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: true,
                    isWinner: false
                },
                player2: {
                    ...prevState.player2,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: false,
                    isWinner: false
                }
            }

        }
        )
        )
    }


    rollDice = () => {
        this.setState(   
            (prevState) =>
            ({
                dices: prevState.dices.map((el) =>
                    (Math.floor(Math.random() * (DICE_MAX - DICE_MIN + 1) + DICE_MIN))
                )
            })
        )
        // console.log("in the roll dice func", this.props) // TODO: why is this empty?
    }


    hold = () => {
        console.log ("hold")
    }


    render() {
        return (
            <div className="GameApp">
                <Player playerData={this.state.players.player1} />
                <GameBoard callBack={this.callBackFunctions} dices={this.state.dices}/>
                <Player playerData={this.state.players.player2} />
            </div>
        )
    }
}



export default GameApp