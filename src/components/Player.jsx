import { useRef } from "react";
import { useState } from "react";

export default function Player() {

  const PlayerName = useRef()
  const [EnteredName, setEnteredName] = useState(null)
  // const [submitted, setsubmitted] = useState(false)

  // --- function for handling change name ---
  // function handleChange(event){
  //   // setsubmitted(false)
  //   setEnteredName(event.target.value)
  // }

  function handleSubmit(){
    // setsubmitted(true)
    setEnteredName(PlayerName.current.value)

  }

  return (
    <section id="player">
      <h2>Welcome {EnteredName ?? "unknown entity"}</h2>
      <p>
        <input ref={PlayerName} type="text"  />
        <button onClick={handleSubmit} >Set Name</button>
      </p>
    </section>
  );
}
