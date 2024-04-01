
import { useState,useRef } from "react";
import Result from './ResultModal.jsx';

export default function TimerChallenge({title,targetTime})
{
    const timerSet = useRef();
    const dialog = useRef();
    // const [timeStart, setTimeStart] = useState(false)
    // const  [timeExpired,setTimeExpired]  = useState(false)
    const [timeRemaning,SetTimeRemanning] = useState(targetTime*1000)
    const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime*1000;
    if (timeRemaning <= 0)
    {
     clearInterval(timerSet.current);
   
     dialog.current.showModal();

    }
    function handleStart()
    {
    
     timerSet.current= setInterval( ()=> {
        // setTimeExpired(true);
        
         SetTimeRemanning(prevTimeRemaining => prevTimeRemaining -10);

     

      },10)
  
    }
    function handleReset()
    {
        SetTimeRemanning(targetTime *1000)

    }
    function handleStop(){
        dialog.current.showModal();
        clearInterval(timerSet.current)
  

    }

    
    return (
        <>
        <Result targetTime={targetTime} ref = {dialog} remaningTime= {timeRemaning} onReset={ handleReset} />
        <section className="challenge">
         <h2>{title}</h2>
        
         <p className="challenge-time">
            {targetTime} secound {targetTime > 1 ? 's': ''}
         </p>
         <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} Challenge</button>

         </p>

         <p className={timerIsActive ? "active" : "undefine"}> {timerIsActive ? "Time is running" : "Time is active"}</p>
        

        </section>
        </>
    )
}