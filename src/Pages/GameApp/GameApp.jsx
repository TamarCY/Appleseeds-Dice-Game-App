import react from "react";
import GameOverMessage from "../../Components/GameOverMessage/GameOverMessage";
import GameBoard from "../../Components/Player/GameBoard/GameBoard";
import Player from "../../Components/Player/Player/Player";
import "./GameApp.css"

const DICE_MIN = 1;
const DICE_MAX = 6;
class GameApp extends react.Component {
    constructor() {
        super();
        this.state = {
            pointsToWin: 20,
            dices: [null, null],
            activePlayer: "player1",
            gameOver: false,
            players: {
                player1: {
                    id: 1,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: true,
                    isWinner: false
                },
                player2: {
                    id: 2,
                    currentScore: 0,
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
                    ...prevState.players.player1,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: true,
                    isWinner: false
                },
                player2: {
                    ...prevState.players.player2,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: false,
                    isWinner: false
                }
            },
            dices: prevState.dices.map((el) => (null))
        }
        )
        )
    }


    rollDice = () => {
        const dicesResult = this.state.dices.map((el) =>
            (Math.floor(Math.random() * (DICE_MAX - DICE_MIN + 1) + DICE_MIN))
        )
        const dicesSum = dicesResult.reduce((prev, curr) => prev + curr);
        const currentPlayer = this.state.activePlayer;
        const playerCurrentScore = this.state.players[currentPlayer].currentScore + dicesSum;

        // TODO: change to reusable and not hard coded
        if (dicesResult[0] === 6 && dicesResult[1] === 6) {
            this.hold()
        } else {
            this.setState((prevState) => ({
                dices: dicesResult,
                players: {
                    ...prevState.players,  // copy all other key-value pairs of object inside players (here the aren't any)
                    [currentPlayer]: {
                        ...prevState.players[currentPlayer],
                        currentScore: playerCurrentScore
                    }
                }
            }
            )
            )
        }
        console.log(dicesResult)



    }

    gameOver = () => {
        console.log("The winner is", this.state.activePlayer)
        // TODO: change this.newGame() to reset code. maybe disable the roll and hold buttons, or make them disappear
        this.newGame()
    }

    isWinner = () => {
        this.state.players[this.state.activePlayer] > this.state.pointsToWin ?
            console.log("The winner is", this.state.activePlayer):
            console.log ("no")
        //gameReset
    }



    hold = () => {

        // TODO: change to no vars?
        const currentPlayer = this.state.activePlayer;
        const notCurrentPlayer = (currentPlayer === "player1")? "player2": "player1"
        const currentSumScore = this.state.players[currentPlayer].currentScore + this.state.players[currentPlayer].sumScore
        // TODO: can I change the 2 long this.setStates?
        if (currentSumScore > this.state.pointsToWin) {
            this.setState((prevState) => ({
                players: {
                    ...prevState.players,
                    [currentPlayer]: {
                        ...prevState.players[currentPlayer],
                        sumScore: currentSumScore,
                    }
                }

            }))
            this.gameOver()

        } else {
            this.setState((prevState) => ({
                players: {
                    ...prevState.players,
                    [currentPlayer]: {
                        ...prevState.players[currentPlayer],
                        sumScore: currentSumScore,
                        currentScore: 0,
                        isActive: false
                    },
                    [notCurrentPlayer]: {
                        ...prevState.players[notCurrentPlayer],
                        isActive: true
                    }

                },
                activePlayer: notCurrentPlayer,


            }))
            
        }




    }


    render() {
        return (
            <div className="GameApp">
                <Player playerData={this.state.players.player1} />
                <GameBoard callBack={this.callBackFunctions} dices={this.state.dices} />
                <Player playerData={this.state.players.player2} />
                <GameOverMessage winner={this.state.activePlayer} displayMessage={true}/>

            </div>
        )
    }
}



export default GameApp



