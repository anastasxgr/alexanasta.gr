import React, { useState, useEffect } from "react";


function TimeDate() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("el-GR", { hour12: false });
    };

    return (

        <div className="time">{formatTime(time)}</div>

    );
}

export default TimeDate;
