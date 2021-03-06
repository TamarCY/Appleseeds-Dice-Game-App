import react from "react";
import GameBoard from "../../Components/GameBoard/GameBoard";
import Player from "../../Components/Player/Player/Player";
import "./GameApp.css";

const DICE_MIN = 1;
const DICE_MAX = 6;
class GameApp extends react.Component {
    constructor() {
        super();
        this.state = {
            pointsToWin: 20,
            dices: [0, 0],
            activePlayer: "player1",
            gameOver: false,
            players: {
                player1: {
                    id: 1,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: true,
                    isWinner: false,
                },
                player2: {
                    id: 2,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: false,
                    isWinner: false,
                },
            },
        };
    }

    callBackFunctions = (event) => {
        event.target.id === "newGame" && this.newGame();
        event.target.id === "rollDice" && this.rollDice();
        event.target.id === "hold" && this.hold();
    };

    newGame = () => {
        this.setState((prevState) => ({
            gameOver: false,
            players: {
                ...prevState.players,
                player1: {
                    ...prevState.players.player1,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: true,
                    isWinner: false,
                },
                player2: {
                    ...prevState.players.player2,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: false,
                    isWinner: false,
                },
            },
            dices: prevState.dices.map((el) => 0),
        }));
    };

    rollDice = () => {
        const dicesResult = this.state.dices.map((el) =>
            Math.floor(Math.random() * (DICE_MAX - DICE_MIN + 1) + DICE_MIN)
        );
        const dicesSum = dicesResult.reduce((prev, curr) => prev + curr);
        const currentPlayer = this.state.activePlayer;
        const playerCurrentScore =
            this.state.players[currentPlayer].currentScore + dicesSum;
        console.log("current score", playerCurrentScore)

        if (dicesResult[0] === 6 && dicesResult[1] === 6) {
            this.setState((prevState) => ({
                dices: dicesResult,
                players: {
                    ...prevState.players,
                    [currentPlayer]: {
                        ...prevState.players[currentPlayer],
                        currentScore: 0,
                    }
                },
            }), () => this.hold());
        } else {
            this.setState((prevState) => ({
                dices: dicesResult,
                players: {
                    ...prevState.players,
                    [currentPlayer]: {
                        ...prevState.players[currentPlayer],
                        currentScore: playerCurrentScore,
                    },
                },
            }));
        }
        console.log(dicesResult);
    };


    gameOver = () => {
        console.log("The winner is", this.state.activePlayer);
        this.setState({
            gameOver: true,
        });

    };

    hold = () => {
        const currentPlayer = this.state.activePlayer;
        const notCurrentPlayer =
            currentPlayer === "player1" ? "player2" : "player1";
        const currentSumScore =
            this.state.players[currentPlayer].currentScore +
            this.state.players[currentPlayer].sumScore;
        if (currentSumScore > this.state.pointsToWin) {
            this.setState((prevState) => ({
                players: {
                    ...prevState.players,
                    [currentPlayer]: {
                        ...prevState.players[currentPlayer],
                        sumScore: currentSumScore,
                    },
                },
            }));
            this.gameOver();
        } else {
            this.setState((prevState) => ({
                players: {
                    ...prevState.players,
                    [currentPlayer]: {
                        ...prevState.players[currentPlayer],
                        sumScore: currentSumScore,
                        currentScore: 0,
                        isActive: false,
                    },
                    [notCurrentPlayer]: {
                        ...prevState.players[notCurrentPlayer],
                        isActive: true,
                    },
                },
                activePlayer: notCurrentPlayer,
            }));
        }
    };

    render() {
        return (
            <div className="GameApp">
                <Player playerData={this.state.players.player1} />
                <GameBoard
                    callBack={this.callBackFunctions}
                    dices={this.state.dices}
                    gameOver={this.state.gameOver}
                    winner={this.state.activePlayer}
                    pointsToWin={this.state.pointsToWin}
                />
                <Player playerData={this.state.players.player2} />

            </div>
        );
    }
}

export default GameApp;
