import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function ({title, targetTime}){

    // const [ExpiredTime, setExpiredTime] = useState(false)
    // const [TimerStart, setTimerStart] = useState(false)
    const [RemainingTime, setRemainingTime] = useState(targetTime * 1000)
    const timer = useRef()
    const dialog = useRef()

    const timeIsActive = RemainingTime > 0 && RemainingTime < targetTime * 1000;

    if(RemainingTime <= 0 ){
        clearInterval(timer.current)
        setRemainingTime(targetTime * 1000)
        dialog.current.open();
    }

    function handleReset(){
        setRemainingTime(targetTime * 1000)
    }

    function handleTimer(){
        timer.current = setInterval(()=>{
           setRemainingTime(prevRemainingTime => prevRemainingTime-10)
        },10)

    }

    function handleStop(){
        clearInterval(timer.current)
        dialog.current.open();
    }

    return(
        <>
        <ResultModel ref={dialog} targetTime={targetTime} result={"lost"} RemainingTime={RemainingTime} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
         
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timeIsActive ? handleStop : handleTimer} >{ timeIsActive ? "Stop" : "Start"} challenge</button>
            </p>
            <p className={timeIsActive ? "active" : undefined}>
               {timeIsActive ?  "Time is running..." :  "Time inactive"}
            </p>

        </section>
        </>
    );
}