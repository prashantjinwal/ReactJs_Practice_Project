import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel =  forwardRef( function ResultModel({ result, targetTime}, ref){

    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return{
            open(){
                dialog.current.showModal()
            }
        };
    })


    return(
        <dialog ref={dialog} className="result-modal" >
            <h2>You {result}</h2>
            <p>
                the target time was <strong>{targetTime} seconds </strong> 
            </p>
            <p>
                You stopped the timer with <strong>X time left</strong>
            </p>
            <form method="dialog" >
                <button>Close</button>
            </form>

        </dialog>
    );
})

export default ResultModel;