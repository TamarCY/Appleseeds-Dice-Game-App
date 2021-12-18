import './GameOverMessage.css'


function GameOverMessage (props) {
    return (
        <div className={`GameOverMessage ${props.displayMessage && "GameOverMessage-display"}`}>
            The Winner is {props.winner}
        </div>
    )
}

export default GameOverMessage