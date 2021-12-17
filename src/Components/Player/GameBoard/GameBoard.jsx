import react from "react";
import Dice from "../../../Common/Dice/Dice";


class GameBoard extends react.Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div>
                <div>GameBoard</div>
                <Dice />
                <Dice />
            </div>
        )
    }
}

export default GameBoard