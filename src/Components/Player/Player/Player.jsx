import react from "react";


class Player extends react.Component {
    // constructor(props){
    //     super(props)
    // }
    render (){
        return (
            <div>
            <div>
                player {this.props.playerData.id}
            </div>
            <div>
                current {this.props.playerData.currentScore}
            </div>
            <div>
                sum {this.props.playerData.sumScore}
            </div>
            </div>
        )
    }
}

export default Player