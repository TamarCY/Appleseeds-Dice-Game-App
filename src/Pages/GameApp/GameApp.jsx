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
            players: [
                {
                    id: 1,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: false,
                    isWinner: false
                },
                {
                    id: 2,
                    currentScore: 0,
                    sumScore: 0,
                    isActive: false,
                    isWinner: false
                }]

        }
    }
    render() {
        return (
            <>
                <div>GameApp component!

                </div>
                <GameBoard test={10} />
                <Player playerData={this.state.players[0]}/>
                <Player playerData={this.state.players[1]}/>
            </>
        )
    }
}

export default GameApp