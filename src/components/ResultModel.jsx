import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel =  forwardRef( function ResultModel({ onReset, targetTime, RemainingTime}, ref){

    const dialog = useRef()
    const useLost = RemainingTime <= 0
    const formattedRemainingTime = ( RemainingTime/1000 ).toFixed(2);

    const score = Math.round((1 - RemainingTime / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal()
            }
        };
    })


    return(
        <dialog ref={dialog} className="result-modal" >
            {useLost && <h2>You Lost</h2>}
            {!useLost && <h2>Your score: {score}</h2>}
            <p>
                the target time was <strong>{targetTime} seconds </strong> 
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingTime} time left</strong>
            </p>
            <form method="dialog" onSubmit={onReset} >
                <button>Close</button>
            </form>

        </dialog>
    );
})

export default ResultModel;