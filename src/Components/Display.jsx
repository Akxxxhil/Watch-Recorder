import { useState } from "react"

function Display() {
    const [timer,setTimer]=useState("00:00:00")
    return <>
        <div className="display-watch">
            <p className="para">{timer}</p>
        </div>

        <div className="text-2xl ml-3 flex justify-center">
            <div className="btn-container">
                <div className="flex mt-[10px] gap-8">
                    <div>
                        <button className="btn w-[100px]">Start</button>
                    </div>
                    <div>
                        <button className="btn w-[100px]">Reset</button>
                    </div>
                </div>

                <div className="flex mt-[-10px] gap-8">
                    <div>
                        <button className="btn w-[100px]">Resume</button>
                    </div>
                    <div>
                        <button className="btn w-[100px]">Pause</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Display