import { useRef, useState } from "react";

export default function ({title, targetTime}){

    const [ExpiredTime, setExpiredTime] = useState(false)
    const [TimerStart, setTimerStart] = useState(false)
    const timer = useRef()

    function handleTimer(){
        timer.current = setTimeout(()=>{
            setExpiredTime(true)
        }, targetTime*1000)

        setTimerStart(true)
    }

    function handleStop(){
        clearTimeout(timer.current)
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {ExpiredTime && <p> YOU LOST !!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={TimerStart ? handleStop : handleTimer} >{ TimerStart ? "Stop" : "Start"} challenge</button>
            </p>
            <p className={TimerStart ? "active" : undefined}>
               {TimerStart ?  "Time is running..." :  "Time inactive"}
            </p>

        </section>

    );
}