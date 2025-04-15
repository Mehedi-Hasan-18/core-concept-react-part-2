import { useState } from "react"

export default function Team(){
    const [player,setPlayer] = useState(11);

    function handleAddPlayer(){
        const newPlayer = player+1;
        setPlayer(newPlayer);
    }
    function handleRemovePlayer(){
        const newPlayer = player-1;
        setPlayer(newPlayer);
    }

    const TeamStyle = {
        border : '2px solid red',
        margin : '2rem',
        padding : '15px',
        borderRadius:'10px'
    }

    return(
        <div style={TeamStyle}>
            <h3>Player:{player}</h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Add Player</button>
        </div>
    )
}