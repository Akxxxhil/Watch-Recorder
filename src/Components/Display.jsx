import { useEffect, useRef, useState } from "react"

function Display() {
    const [isrunning,setIsrunning]=useState(false)
    const[elapsedTime,setElapsedTime]=useState(0)
    const startRef=useRef(0)
    const intervalRef=useRef(null)
    useEffect(()=>{
        if(isrunning){
            intervalRef.current=setInterval(()=>{
                setElapsedTime(Date.now() - startRef.current)

            },10)
        }
        return(()=>{
            clearInterval(intervalRef.current)
        })
    },[isrunning])
    
   
    function startTimerhandler() {
        setIsrunning(true)
        startRef.current=Date.now()-elapsedTime
        

    }
    function resetTimerHandler() {
        setElapsedTime(0)
        setIsrunning(false)

    }
    function resumetimerhandler() {
        setIsrunning(true)

    }
    function pauseTimerhandler() {
        setIsrunning(false)

    }
    function timer(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;

    }
    return <>
        <div className="display-watch">
            <p className="para">{timer()}</p>
        </div>

        <div>
            <div className="btn-container mt-10">
                <div className="flex mt-[10px] gap-8 mt-5">
                    <div>
                        <button onClick={startTimerhandler} type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Start</button>
                    </div>
                    <div>                   
                        <button onClick={resetTimerHandler} type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Reset</button>

                    </div>
                </div>

                <div className="flex mt-[-10px] gap-8 mt-5">
                    <div>                        
                        <button onClick={resumetimerhandler} type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Resume</button>

                    </div>
                    <div>
                        <button onClick={pauseTimerhandler} type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Pause</button>

                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Display