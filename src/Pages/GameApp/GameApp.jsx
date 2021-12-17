import react from "react";
import GameBoard from "../../Components/Player/GameBoard/GameBoard";
import Player from "../../Components/Player/Player/Player";


class GameApp extends react.Component {
    // constructor(){
    //     super()
    // }
    render (){
        return (
        <>
        <div>GameApp component!
        
        </div>
        <GameBoard/>Í
        <Player/>
        <Player/>
        </>
        )
    }
}

export default GameApp