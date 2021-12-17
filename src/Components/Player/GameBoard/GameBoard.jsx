import react from "react";
import Dice from "../../../Common/Dice/Dice";


class GameBoard extends react.Component {
    constructor(props){
        super(props)
        this.state ={
            dice1: 0,
            dice2:0
        }
    }
    render() {
        return (
            <div>
                <div>GameBoard {this.props.test}</div>
                <Dice />
                <Dice />
                <button className="new-game-btn" onClick={()=>(this.props.newGame())}>New Game</button>
            </div>
        )
    }
}

export default GameBoard