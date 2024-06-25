import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function ({title, targetTime}){

    const [ExpiredTime, setExpiredTime] = useState(false)
    const [TimerStart, setTimerStart] = useState(false)
    const timer = useRef()
    const dialog = useRef()

    function handleTimer(){
        timer.current = setTimeout(()=>{
            setExpiredTime(true)
            dialog.current.open()
        }, targetTime*1000)

        setTimerStart(true)
    }

    function handleStop(){
        clearTimeout(timer.current)
    }

    return(
        <>
        <ResultModel ref={dialog} targetTime={targetTime} result={"lost"} />
        <section className="challenge">
            <h2>{title}</h2>
         
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
        </>
    );
}