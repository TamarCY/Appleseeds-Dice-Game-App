import react from "react";
import Dice from "../../../Common/Dice/Dice";


class GameBoard extends react.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div>GameBoard {this.props.test}</div>
                <Dice />
                <Dice />
            </div>
        )
    }
}

export default GameBoard