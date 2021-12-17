import react from "react";
import GameBoard from "../../Components/Player/GameBoard/GameBoard";
import Player from "../../Components/Player/Player/Player";


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

    newGame = () => {
        console.log("new game")
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






   

    render() {
        return (
            <>
                <div>GameApp component!

                </div>
                <GameBoard newGame={this.newGame} />
                <Player playerData={this.state.players.player1} />
                <Player playerData={this.state.players.player2} />
            </>
        )
    }
}



export default GameApp