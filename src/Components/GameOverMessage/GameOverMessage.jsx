import './GameOverMessage.css'


function GameOverMessage (props) {
    return (
        <div className={props.displayMessage && "GameOverMessage"}>
            The Winner is {props.winner}
        </div>
    )
}

export default GameOverMessage