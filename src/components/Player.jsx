import { useState, useRef } from "react";

export default function Player() {
// const [initialPlayname,setPlayerName]= useState(null)
const playerName = useRef();
const [initilaclick, setclikname] = useState('')
//  function handlechangeName(event)
//  {
  
//   setPlayerName(event.target.value)
//   setclikname('')
//  }
 function handlesetName()
 {
  setclikname(playerName.current.value);
  playerName.current.value= '';
 }

  return (
    <section id="player">
      <h2>Welcome  {initilaclick ? initilaclick : 'set your name'}</h2>
      <p>
        <input  ref = {playerName} type="text"  />
        <button onClick={handlesetName}>Set Name</button>
      </p>
    </section>
  );
}
