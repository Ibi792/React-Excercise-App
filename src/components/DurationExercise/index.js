import React, { useState } from "react";

function DurationExercise ({ name }) {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    React.useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTimer = (s) => {
        const mins = String(Math.floor(s /60)).padStart(2,"0");
        const secs = String(s % 60).padStart(2,"0");
        return `${mins}:${secs}`;
    };

    return(
        <div>
            <h2>{name}</h2>
            <p>timer: {formatTimer(seconds)}</p>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Reset</button>
        </div>
    );
}

export default DurationExercise;
