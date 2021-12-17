import react from "react";
// import Dice from "../../../Common/Dice/Dice";
import './GameBoard.css'


class GameBoard extends react.Component {
    constructor(props){
        super(props)
        this.state ={
            dice1:0,
            dice2:0
        }
    }
    render() {
        return (
            <div className="GameBoard-div">
                <div>GameBoard {this.props.test}</div>
                {/* <Dice num ={this.state.dices1}/>
                <Dice /> */}
                <div className="GameBoard-dice">{this.props.dices[0]}</div>
                <div className="GameBoard-dice">{this.props.dices[1]}</div>
                <button className="GameBoard-new-btn" onClick={()=>(this.props.newGame())}>New Game</button>
            </div>
        )
    }
}

export default GameBoard