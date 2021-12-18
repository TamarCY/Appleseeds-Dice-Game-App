import react from "react";
import './Player.css'


class Player extends react.Component {
    
    render (){
        console.log(this.props.playerData.isActive)
        return (
            <div className={`Player ${this.props.playerData.isActive && "Player-active"}`}>
            <div className={`Player-name ${this.props.playerData.isActive && "Player-active-name"}`}>
                player {this.props.playerData.id}
            </div>
            <div className="Player-current">
                current <br/> {this.props.playerData.currentScore}
            </div>
            <div className="Player-sum">
                 {this.props.playerData.sumScore}
            </div>
            </div>
        )
    }
}

export default Player