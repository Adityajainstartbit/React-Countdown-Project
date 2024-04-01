import { forwardRef } from "react"
const Result= forwardRef( function Result({remaningTime,targetTime, onReset}, ref )

{
    const score = Math.round((1-remaningTime / (targetTime * 1000) )* 100);
    const timeget= remaningTime <= 0;
    console.log(timeget)

    const ActualTimeRemaing = (remaningTime / 1000).toFixed(2);
    return(

        <dialog ref={ref} className="result-modal">
              {/* <p>{timeget ? "You lost stupid good for nothing" : "You lost stupid good for nothing"}</p> */}
              {timeget && <h2>you lost stupid good for nothing</h2>}
              {!timeget && <h2>Your Sore is {score}</h2>}
       
          <p>The target time was {targetTime}</p>
            <p> you  punch out before {ActualTimeRemaing}</p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
              
            </form>

        </dialog>
    )
   
    
})
export default Result;